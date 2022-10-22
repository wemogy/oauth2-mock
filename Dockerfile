FROM node:18-alpine
EXPOSE 3200
EXPOSE 3201
COPY . .
RUN yarn install
CMD ["yarn", "start"]
