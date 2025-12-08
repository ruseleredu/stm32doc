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
      - DB_TYPE=sqlite
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


```yml
services:
  gitea:
    image: gitea/gitea:latest
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
      - DB_TYPE=sqlite
      - GITEA__server__ROOT_URL=https://yourdomain.com/
      - GITEA__server__HTTP_PORT=3000
    volumes:
      - ./gitea:/data
    networks:
      - gitea_net

  apache:
    image: httpd:latest
    container_name: apache
    depends_on:
      - gitea
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./apache/conf:/usr/local/apache2/conf
      - ./apache/logs:/usr/local/apache2/logs
    networks:
      - gitea_net

networks:
  gitea_net:
    driver: bridge
```

```apacheconf
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule ssl_module modules/mod_ssl.so

<VirtualHost *:80>
    ServerName yourdomain.com

    ProxyPreserveHost On
    ProxyPass / http://gitea:3000/
    ProxyPassReverse / http://gitea:3000/

    ErrorLog /usr/local/apache2/logs/error.log
    CustomLog /usr/local/apache2/logs/access.log combined
</VirtualHost>

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