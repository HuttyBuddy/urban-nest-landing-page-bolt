# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build   # outputs /app/dist (change if your build dir differs)

# --- Run stage (Nginx on Cloud Run) ---
FROM nginx:alpine

# Listen on Cloud Run port (8080) and set SPA fallback + caching headers
RUN set -eux; \
  sed -i 's/listen\s\+80;/listen 8080;/' /etc/nginx/conf.d/default.conf; \
  # SPA fallback: serve file if it exists, otherwise index.html
  sed -i 's|try_files .*;|try_files $uri $uri/ /index.html;|' /etc/nginx/conf.d/default.conf; \
  # Add no-store for HTML responses in the root location block
  awk '1; /location \// && !x {print "    add_header Cache-Control \"no-store\";"; x=1}' \
      /etc/nginx/conf.d/default.conf > /tmp/default.conf && mv /tmp/default.conf /etc/nginx/conf.d/default.conf; \
  # Long-cache immutable for built assets
  printf "\nlocation /assets/ {\n  add_header Cache-Control \"public, max-age=31536000, immutable\";\n}\n" \
      >> /etc/nginx/conf.d/default.conf

# Serve the built app
COPY --from=build /app/dist /usr/share/nginx/html

ENV PORT=8080
EXPOSE 8080
