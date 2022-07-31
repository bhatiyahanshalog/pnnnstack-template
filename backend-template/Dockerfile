# Base image
FROM node:lts-alpine3.15

# Create app directory
WORKDIR /Users/hanshalbhatiya/Documents/pnnn-template/server

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY . /Users/hanshalbhatiya/Documents/pnnn-template/server


# Install app dependencies
RUN yarn

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN yarn build
EXPOSE 3001

# Start the server using the production build
CMD [ "node", "dist/main.js" ]