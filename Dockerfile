FROM node:16.0.0-alpine3.13 AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

ENV DATABASE_URL=mysql://root:a2MCOkkDEyjNytTTlMDM@containers-us-west-102.railway.app:6182/railway
ENV JWT_SECRET=aSIs6frZ6gLrkwtJDxl8o7vNy987tMHl
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
