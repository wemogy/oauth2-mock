FROM node:18-alpine
EXPOSE 3200
EXPOSE 3201
COPY . .
RUN yarn install

ENV OAUTH2_SERVER_HOST="0.0.0.0"

CMD ["yarn", "start"]
