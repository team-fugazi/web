# Use an official Node runtime as a base image
FROM node:lts-alpine3.18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json, pnpm-lock.yaml, and pnpm-workspace.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install app dependencies
RUN pnpm install

# Copy the local code to the container
COPY . .

# Build the app
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["pnpm", "run", "dev"]
