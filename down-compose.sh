#!/bin/bash

ENV=${NODE_ENV}
ENV_FILE=".env.$ENV"

docker-compose --env-file "$ENV_FILE" down
