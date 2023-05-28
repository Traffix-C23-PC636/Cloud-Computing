# Base image
FROM node:18-alpine

# Author
LABEL authors="Traffix Team"

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose the port on which your application runs
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
