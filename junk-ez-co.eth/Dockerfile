# Stage 1: Build the React application
FROM node:14 AS build

# Set working directory
WORKDIR /junk-ez-co.eth

# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy app source
COPY . .
# Build the app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
# Copy the build output to replace the default nginx contents.
COPY --from=build /junk-ez-co.eth/build /usr/share/nginx/html

EXPOSE 41699 5001 3000 80
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
