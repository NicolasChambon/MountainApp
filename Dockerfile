FROM node:14

# Install curl to download the wait-for-it script
RUN apt-get update && apt-get install -y curl

# Download wait-for-it script
RUN curl -sS https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -o /wait-for-it.sh \
    && chmod +x /wait-for-it.sh

WORKDIR /usr/src/app

COPY backend/ .

RUN npm install

EXPOSE 5000

ENV NODE_ENV=production

# Use wait-for-it to wait for the db service to be available before starting the application
CMD ["/wait-for-it.sh", "db:3306", "--", "node", "index.js"]
