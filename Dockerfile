FROM node:16.0.0-alpine3.13 AS builder

WORKDIR /app
ENV DATABASE_URL="mysql://root:12345@10.208.0.3:3306/authdb"
ENV JWT_SECRET="aSIs6frZ6gLrkwtJDxl8o7vNy987tMHl"

COPY package*.json ./
COPY prisma ./prisma/


RUN npm install
RUN npx prisma generate
# RUN npx prisma migrate dev

COPY . .

RUN npm run build

FROM node:16.0.0-alpine3.13 AS release

ARG NODE_ENV=production

COPY prisma ./prisma/
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

RUN npm install --only=production

CMD [ "npm", "run", "start" ]
