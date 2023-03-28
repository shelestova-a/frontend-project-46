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
	npx  --experimental-vm-modules jest

test-coverage:
	npx jest --coverage

test-watch:
	npx jest -- --watchAll
