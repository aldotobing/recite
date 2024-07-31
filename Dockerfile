# Use a slim base image
FROM node:slim

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Copy the .env file
COPY .env .env

# Expose the port
EXPOSE 3003

# Start the application
CMD ["node", "index.js"]
