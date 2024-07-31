# Use a slim base image
FROM node:slim

# Set environment variables
ENV MONGO_URI=mongodb+srv://nn:nn@cluster0.nn.mongodb.net/quotes_db
ENV PORT=3003

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 3003

# Start the application
CMD ["node", "index.js"]
