# --- Build stage: Vite ---
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Runtime: Nginx serving the built SPA ---
FROM nginx:1.25-alpine
# Install envsubst for runtime templating of the Nginx config
RUN apk add --no-cache gettext
# Template lets us inject $PORT at runtime (Cloud Run)
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
# Built files from Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Cloud Run listens on $PORT
ENV PORT=8080
EXPOSE 8080

# Render template → start Nginx
CMD ["sleep", "infinity"]
