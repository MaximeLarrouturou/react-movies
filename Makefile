SHELL := /bin/bash
DOCKERFILE=cobra
IMAGE= gitlab.synthesio.com:4567/synthesio/superherojs:$(DOCKERFILE)
YARN_CACHE=yarn-cache
PKGNAME=lisa-movies
NAME=$(PKGNAME)-`date +%s`
MK=./node_modules/lisa-common-config/Makefiles/$(DOCKERFILE).mk
UID=$$(id -u)
GID=$$(id -g)

.PHONY: test
.SILENT: build ci config

.DEFAULT_GOAL := help

ifneq ("$(wildcard $(MK))","")
include $(MK)
endif


ci: ## Automagically start UT by installing expected common-config and start `make test-ci` from core
	make config
	make -- test-ci ${OPTIONS}

yarn-cache: ## Set up a busybox container for the yarn cache
	docker run -v /yarn-cache --name $(YARN_CACHE) \
		-e USER_GROUP_ID=$(UID):$(GID) busybox /bin/sh \
		-c 'chown $$USER_GROUP_ID /yarn-cache' 1>/dev/null 2>/dev/null || true

config: ## [From scratch only] Install the expected lisa-common-config
	make yarn-cache
	docker run --rm --name $(NAME) -i -e "TERM=xterm-256color" \
		-v $(PWD):/home/$(PKG) \
		--volumes-from $(YARN_CACHE) \
		-u $(UID):$(GID) -e "HOME=/tmp" \
		-w /home/$(PKG) $(IMAGE) \
		yarn --ignore-engines

