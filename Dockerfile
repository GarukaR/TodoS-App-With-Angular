# Use an official Node.js runtime as a parent image
FROM node:22-bookworm-slim AS build
# Set the working directory
WORKDIR /app
# Copy package.json and lock.json files
COPY package*.json ./
# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .
# Build the application
RUN npm run build --configuration=production
# Use nginx to serve the built application
FROM nginx:1.28-alpine
# Copy the nginx configuration file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copy the built application from the previous stage
COPY --from=build /app/dist/todomvc-fixed/browser /usr/share/nginx/html
# Expose port 80
EXPOSE 80
# You don't need to specify a command to run nginx, as it will start automatically when the container is run
# This is because the nginx image has a default command that starts the nginx server

# Build the Docker image with the following command:
#   docker build -t todomvc-fixed:v1.0 .

# Run the Docker container with the following command:
#   docker run -d -p 3000:80 --name todomvc-fixed todomvc-fixed:v1.0
