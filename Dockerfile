# ---- Build stage ----
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Run stage ----
FROM node:20-alpine
WORKDIR /app
RUN npm i -g serve
COPY --from=build /app/dist /app/dist
ENV PORT=8080
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
