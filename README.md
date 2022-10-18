# SIAM_Auth_MS
Microservicio de Autenticacion para el proyecto de Arquitectura de Software
Esta aplicacion es una REST API CRUD usando TypeScript y Prisma

## Desarrollo

Para el desarrollo de vez contar contar con `Node JS`

Usando una terminal en el directorio raiz del proyecto usaras el siguiente comando para instalar las dependencias `npm install`

Para ejecutar esta aplicacion `npm run dev`

## Docker
Para crear la imagen de docker, usa este comando en el directorio raiz del proyecto donde esta localizado el archivo Dockerfile
	
	docker build -t auth_ms .

Para correr la imagen

	docker run -p 3020:3020 -e DATABASE_URL=mysql://<THE DATABASE USER>:<THE DATABASE PASSWORD>@host.docker.internal:3306/auth-db -e JWT_SECRET=<SECRET JWT SEED> -e PORT=3020 --name auth_ms auth_ms

## Conexion a la DB y creacion de las tablas en la DB
Con la imagen corriendo haciendo uso del bash, ejecutar los siguientes comandos (Nota: La DB debe estar ejecutandose)

Creacion del Prisma Client
	
	npx prisma generate

Creacion las tablas en las bases de datos

	npx prisma migrate dev
