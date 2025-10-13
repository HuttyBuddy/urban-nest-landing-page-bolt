# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies and build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build   # outputs /app/dist (change if your build dir differs)

# --- Run stage (Nginx for Cloud Run) ---
FROM nginx:alpine

# Copy our custom Nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Environment
ENV PORT=8080
EXPOSE 8080
