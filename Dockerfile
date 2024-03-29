# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:10

ARG version_info
ENV REACT_APP_DTAC_BMW_VERSION=${version_info}

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install

# Copies everything over to Docker environment
COPY . .

# Finally runs the application
CMD [ "npm", "start" ]