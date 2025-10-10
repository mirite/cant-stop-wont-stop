FROM dunglas/frankenphp:php8.4-alpine AS base

WORKDIR /app

RUN apk update && \
    apk add --no-cache \
    libsodium \
    zlib \
    libpng \
    icu-libs \
    libxml2 \
    libxslt \
    libzip \
    libpq && \
    apk add --no-cache --virtual .build-deps \
    $PHPIZE_DEPS \
    libsodium-dev \
    zlib-dev \
    libpng-dev \
    icu-dev \
    libxml2-dev \
    libxslt-dev \
    libzip-dev \
    libpq-dev \
    linux-headers && \
    # Install the PHP extensions
    docker-php-ext-install bcmath sodium gd intl soap xsl zip pdo_pgsql sockets && \
    # Clean up the build dependencies
    apk del .build-deps

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY uploads.ini /usr/local/etc/php/conf.d/uploads.ini

FROM base AS vendor
WORKDIR /app
COPY . .
RUN composer install --no-interaction --optimize-autoloader

FROM base AS production
WORKDIR /app

ENV SERVER_NAME=0.0.0.0:80
ENV APP_ENV=production
ENV LOG_CHANNEL=stderr
ENV APP_DEBUG=false
ARG DB_CONNECTION
ARG DB_HOST
ARG DB_PORT
ARG DB_DATABASE
ARG DB_USERNAME
ARG DB_PASSWORD
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

COPY entrypoint.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint

EXPOSE 80

ENTRYPOINT ["entrypoint"]

CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]

