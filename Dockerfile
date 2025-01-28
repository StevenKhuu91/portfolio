FROM node:22
# Uses node version 22 as base image

WORKDIR /app
# Goes to app directory (think of it like a cd terminal command)

COPY package.json ./
# Copy package.json and package-lock.json (if available) to the app directory

RUN npm install
# Install app dependencies

# Imagine all the above steps as "layers", which Docker reads from and caches. (Layer Caching)

COPY . .
# Copies the rest of our app into the container

ENV PORT=9000
# Set port environment variable

EXPOSE 9000
#Expose the port so computer can access it

CMD ["npm", "start"]
#Runs the app
#CMD keyword is what DOCKER uses to run the file
#You can only have 1 CMD command in a dockerfile
#Don't use the keyword RUN, as this is BUILDING the image, not running it.