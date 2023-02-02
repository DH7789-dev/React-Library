FROM node:18 as node
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build
ENV REACT_APP_API_URL=http://localhost:8081

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/build /usr/share/nginx/html