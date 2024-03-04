# ![wemogy logo](https://wemogyimages.blob.core.windows.net/logos/wemogy-github-tiny.png) OAuth2.0 Mock Server

[![Docker](https://img.shields.io/badge/Docker%20Hub-oauth2--mock-blue.svg?logo=docker)](https://hub.docker.com/repository/docker/wemogy/oauth2-mock)

This project uses the [axa-group/oauth2-mock-server](https://github.com/axa-group/oauth2-mock-server) repository at its core.

## Get it running

### Docker

```bash
docker run -p 3200:3200 -p 3201:3201 wemogy/oauth2-mock
```

### Code

Clone the repository.

Install all dependencies

```bash
yarn install
```

Start the servers

```bash
yarn start
```

## Configuration

You can set the following environment variables to configure the servers:

| Name | Description | Default |
|---|---|---|
| `OAUTH2_SERVER_HOST` | The host of the OAuth2 server | `0.0.0.0` |
| `OAUTH2_SERVER_PORT` | The port of the OAuth2 server | `3200` |
| `TOKEN_PROVIDER_PORT` | The port of the token provider server | `3201` |

## Token Provider server

### Requesting a token

**POST:** `/jwt`

```json
{
    "sub": "test123",
    "aud": "realtime.eu1.spaceblocks.cloud",
    "ext": {
        "app_subject_id": "subject",
        "app_tenant_id": "tenantId",
        "spaceblocks_tenant_id": "00000000-0000-0000-0000-000000000001",
        "spaceblocks_stage_id": "e2esc01"
    }
}
```

## Docker

### Build the Docker container

```bash
docker build -t oauth2-mock .
```

### Run the Docker container

```bash
docker run -p 3200:3200 -p 3201:3201 -d oauth2-mock
```
