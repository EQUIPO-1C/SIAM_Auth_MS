import express, {Express, Request, Response, NextFunction} from 'express';
import { Prisma } from '@prisma/client';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './src/routes/routes';
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(helmet());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

const port = process.env.PORT || 3020;

app.use((err: Error | Prisma.PrismaClientKnownRequestError, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    // @ts-ignore
    if (err && err.meta) {
        // @ts-ignore
        res.status(400).json({message: err.message});
      
    } else if (err) {
        res.status(500).json({message: err.message});
    }
});

app.listen(port, ()=> console.log(`🚀 Server ready at http://localhost:${port}`));



