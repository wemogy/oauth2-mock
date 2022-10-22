FROM node:18-alpine
EXPOSE 3001
EXPOSE 3002
COPY . .
RUN yarn install
CMD ["yarn", "start"]
