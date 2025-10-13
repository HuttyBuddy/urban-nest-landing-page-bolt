# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build  # -> /app/dist

# ...same build stage...

FROM nginx:alpine
# listen on Cloud Run port
RUN sed -i 's/listen\s\+80;/listen 8080;/' /etc/nginx/conf.d/default.conf
# ✅ proper SPA fallback: serve real files if they exist, else index.html
RUN sed -i 's|try_files .*;|try_files $uri $uri/ /index.html;|' /etc/nginx/conf.d/default.conf || true
COPY --from=build /app/dist /usr/share/nginx/html
ENV PORT=8080
EXPOSE 8080
