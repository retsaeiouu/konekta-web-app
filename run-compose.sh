#!/bin/bash

# defaults to 'dev'
ENV=${NODE_ENV}
ENV_FILE=".env.$ENV"

echo "Running in $ENV mode."
# mounts the env file base on NODE_ENV value
docker-compose --env-file "$ENV_FILE" up -d
