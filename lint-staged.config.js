export default {
	"*": ["prettier --ignore-unknown --write --cache"],
	"*.php": [
		"./vendor/bin/phpcbf --standard=phpcs.xml -d error_reporting=24575 --extensions=php --ignore=vendor/,node_modules/",
	],
	"*.{ts,tsx,json}": ["sh -c 'tsc --noEmit'"],
	"*.{js,ts,jsx,tsx,cjs,mjs}": ["eslint --fix --cache"],
};
