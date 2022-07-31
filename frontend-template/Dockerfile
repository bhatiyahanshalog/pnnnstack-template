# Dockerfile

# base image
FROM node:alpine

# create & set working directory
WORKDIR /Users/hanshalbhatiya/Documents/pnnn-template/app

# copy source files
COPY . /Users/hanshalbhatiya/Documents/pnnn-template/app

# install dependencies
RUN yarn 

# start app
RUN yarn build
EXPOSE 3000
CMD yarn start