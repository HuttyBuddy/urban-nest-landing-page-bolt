# ---- Stage 1: Build ----
# Use an official Node.js LTS (Long Term Support) version as a parent image
FROM node:20-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock, etc.) first
COPY package*.json ./

# Use npm install for robustness
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Build the React application for production
RUN npm run build

# ---- Stage 2: Serve ----
# Use a lightweight, production-ready Nginx image.
FROM nginx:stable-alpine

# Install envsubst for runtime templating of the Nginx config
RUN apk add --no-cache gettext

# Template lets us inject $PORT at runtime (Cloud Run)
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Built files from Vite
COPY --from=builder /app/dist /usr/share/nginx/html
# Cloud Run listens on $PORT
ENV PORT 8080

# This is the correct command to start the server.
# It processes the Nginx config and then starts the Nginx server.
CMD ["/bin/sh", "-c", "envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'" ]
