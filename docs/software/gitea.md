---
id: gitea
title: Gitea
description: Great self-hosted option that brings teams and developers high-efficiency, but easy operations from planning to production. 
slug: /gitea
---

Gitea is a painless, self-hosted, all-in-one software development service. It includes Git hosting, code review, team collaboration, package registry, and CI/CD. It is similar to GitHub, Bitbucket and GitLab.

- https://about.gitea.com/
- https://docs.gitea.com/
- https://demo.gitea.com/

## Alternatives

- https://gogs.io/
- https://forgejo.org/
- https://about.gitlab.com/install/
- https://rhodecode.com/
  
## Installation with Docker

### gitea
- https://docs.gitea.com/installation/install-with-docker

```bash
docker-compose.yml
```

```yml
networks:
  gitea:
    external: false
services:
  server:
    image: docker.gitea.com/gitea:latest
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
    restart: always
    networks:
      - gitea
    volumes:
      - ./gitea:/data
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "3000:3000"
      - "222:22"
```

### forgejo
- https://forgejo.org/docs/latest/admin/installation/docker/

```bash
docker-compose.yml
```

```yml
networks:
  forgejo:
    external: false

services:
  server:
    image: codeberg.org/forgejo/forgejo:13
    container_name: forgejo
    environment:
      - USER_UID=1000
      - USER_GID=1000
    restart: always
    networks:
      - forgejo
    volumes:
      - ./forgejo:/data
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - '3000:3000'
      - '222:22'
```

### gogs

- https://hub.docker.com/r/gogs/gogs

```bash
docker-compose.yml
```

```yml
networks:
  gogs:
    external: false
services:
  server:
    image: gogs/gogs:latest
    container_name: gogs
    environment:
      - USER_UID=1000
      - USER_GID=1000
    restart: always
    networks:
      - gogs
    volumes:
      - ./gogs:/data
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "3000:3000"
      - "222:22"
```

```bash
docker compose up -d
```

## CLI for Gitea
- https://gitea.com/gitea/tea