install:
	simple-git-hooks

lint:
	npx eslint

publish:
	npm publish --dry-run
