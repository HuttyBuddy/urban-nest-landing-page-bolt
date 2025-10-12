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

# Set the working directory
WORKDIR /app

# Install the 'serve' package to run a static file server
RUN npm i -g serve

# Correctly copy the built files from the 'build' stage
# This copies the CONTENTS of the 'dist' folder into the current '/app' directory
COPY --from=build /app/build .

# Set and expose the port Cloud Run will use
ENV PORT=8080
EXPOSE 8080

# The command to start the server
# It serves the content of the current directory '.' as a single-page app
CMD ["serve", "-s", ".", "-l", "8080"]
