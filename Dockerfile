# ---- build stage ----
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- runtime stage ----
FROM nginx:1.25-alpine
# Remove any default configs/templates that could reintroduce ${PORT} etc.
RUN rm -f /etc/nginx/conf.d/* /etc/nginx/templates/* || true

# Our Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx","-g","daemon off;"]
