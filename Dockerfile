FROM dunglas/frankenphp:1-php8.4-alpine AS base

WORKDIR /app

RUN apk update && \
    apk add --no-cache \
    curl \
    nodejs \
    npm \
    libsodium-dev \
    zlib-dev \
    libpng-dev \
    icu-dev \
    libxml2-dev \
    libxslt-dev \
    libzip-dev \
    libpq-dev \
    linux-headers

RUN docker-php-ext-install bcmath sodium gd intl soap xsl zip pdo_pgsql sockets

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY uploads.ini /usr/local/etc/php/conf.d/uploads.ini

FROM base AS vendor
WORKDIR /app
COPY --from=frontend /app .
RUN composer install --no-interaction --optimize-autoloader --no-dev

FROM base AS production
WORKDIR /app

ENV SERVER_NAME=0.0.0.0:80
ENV APP_ENV=production
ENV LOG_CHANNEL=stderr
ENV APP_DEBUG=false
ENV DB_CONNECTION=$DB_CONNECTION
ENV DB_HOST=$DB_HOST
ENV DB_PORT=$DB_PORT
ENV DB_DATABASE=$DB_DATABASE
ENV DB_USERNAME=$DB_USERNAME
ENV DB_PASSWORD=$DB_PASSWORD

COPY --from=vendor /app/vendor ./vendor
COPY . .

RUN php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache

RUN chown -R frankenphp:frankenphp .

COPY docker/entrypoint.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint

EXPOSE 80

ENTRYPOINT ["entrypoint"]

CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]

