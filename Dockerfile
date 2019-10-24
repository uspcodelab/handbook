# Use official Node's alpine image as a base
FROM node:12.13-alpine

# Create an environment variable for our default installation path
ENV INSTALL_PATH /usr/src/handbook

# Set INSTALL_PATH as the work directory
WORKDIR $INSTALL_PATH

# Copy files that define dependencies
COPY package.json ./

# Install dependencies
RUN npm install

# Copy remaining source code
COPY . .

# Run in development mode
CMD npm run docs:dev
