# --- Build stage ---
# This stage installs all dependencies and builds your static assets
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Run stage ---
# This stage prepares the final, lightweight production container
FROM node:20-alpine
WORKDIR /app

# Copy the files needed to run the production server
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

# Install only the dependencies needed for production (like Vite)
RUN npm ci --omit=dev

# Set the port Cloud Run provides
ENV PORT=8080
EXPOSE 8080

# Run the correct start command from your package.json ("vite preview")
CMD ["npm", "start"]
