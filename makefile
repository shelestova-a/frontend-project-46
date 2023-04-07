install:
	npm ci

lint:
	npx eslint

publish:
	npm publish --dry-run

link:
	npm link

gendiff:
	node bin/gendiff.js

test:
	npx jest

test-coverage:
	npx jest --coverage

test-watch:
	npx jest -- --watchAll
