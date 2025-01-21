#!/bin/bash

ENV=${NODE_ENV}
ENV_FILE="../.env.$ENV"

# executes migration base on env value
npx dotenv -e "$ENV_FILE" -- npx prisma migrate dev
