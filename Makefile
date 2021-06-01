lint:
	npx eslint ./src

build:
	npm run build

publish:
	npm publish --access public

tag:
	git tag $(TAG) && git push --tags

setup: install-deps

install-deps:
	npm ci

.PHONY: build
