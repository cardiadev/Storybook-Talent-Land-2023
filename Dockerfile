FROM node:16.20-alpine3.16 as build
WORKDIR /app

COPY package.json ./
RUN yarn install --legacy-peer-deps --silent
COPY . ./
RUN yarn build-storybook

FROM nginx:stable-alpine
COPY --from=build /app/storybook-static /usr/share/nginx/html
# ENTRYPOINT ["sh", "/docker-entrypoint.sh"]
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]