# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build  # -> /app/dist

# --- Run stage (Nginx) ---
FROM nginx:alpine
# Cloud Run expects the container to listen on 8080
RUN sed -i 's/listen\s\+80;/listen 8080;/' /etc/nginx/conf.d/default.conf
# SPA fallback so deep links work
RUN sed -i 's|try_files .*;|try_files $uri /index.html;|' /etc/nginx/conf.d/default.conf || true
COPY --from=build /app/dist /usr/share/nginx/html
ENV PORT=8080
EXPOSE 8080
