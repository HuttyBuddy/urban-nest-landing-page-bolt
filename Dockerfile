# --- Build stage ---
# This stage installs dependencies and builds your static assets
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Run stage ---
# This stage serves the built assets from a lightweight server
FROM node:20-alpine
WORKDIR /app

# Install the 'serve' package to run a static file server
RUN npm i -g serve

# Correctly copy the built files from the 'build' stage
# The 'npm run build' command creates a 'dist' folder in '/app'.
# We copy that '/app/dist' folder to the current directory './dist'.
COPY --from=build /app/dist ./dist

# Set and expose the port Cloud Run will use
ENV PORT=8080
EXPOSE 8080

# The command to start the server
# It serves the content of the 'dist' folder on port 8080
CMD ["serve", "-s", "dist", "-l", "8080"]

