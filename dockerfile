FROM node:latest AS dev

WORKDIR /app
COPY [ "package*.json", "./" ]

RUN npm install
COPY . .
CMD [ "npm", "run","start:dev" ]


# FROM base AS prod
# RUN npm install --production
# COPY . .
# RUN npm install -g @nestjs/cli
# RUN npm run build
# CMD [ "npm", "run","start:prod" ]