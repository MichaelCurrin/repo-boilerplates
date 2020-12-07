default: install

# Local pre-push check.
all: install build

h help:
	@egrep '^\S|^$$' Makefile


i install:
	yarn install

build:
	yarn lint:fix
	yarn build:clean

s serve:
	yarn start

# Run build and then tag and push.
tag:
	npm version minor
