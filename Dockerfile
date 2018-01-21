# Specify node environment for inside container
FROM node:carbon

# Make directory for app to run in
WORKDIR /usr/src/app

# Environment variables
ENV PORT 3000
ENV API_ENDPOINT https://hadrian-blog.prismic.io/api

# Copy package and package-lock before other files
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
