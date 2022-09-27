FROM node:latest AS build-step

WORKDIR /build
COPY package.json package-lock.json ./
RUN npm install
RUN npm install axios bootstrap react-bootstrap

COPY . .
RUN npm run build

FROM nginx:1.18-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /build/build /frontend/build
