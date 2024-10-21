# Start from a Node.js based image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package definition files
COPY package*.json ./

# Install required dependencies
RUN npm install

# Copy application files
COPY . .

# Run the application
CMD ["node", "index.js"]
