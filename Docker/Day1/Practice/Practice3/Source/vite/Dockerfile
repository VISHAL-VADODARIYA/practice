FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5030
CMD npm run dev -- --host --port 5030