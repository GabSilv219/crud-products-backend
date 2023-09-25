import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routes from '../router';
import db from '../db/connection';
import dotenv from 'dotenv'

dotenv.config();

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application Running on Port: ${this.port}`)
        })
    }

    routes() {
        this.app.use(routes)
    }

    midlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Database Connected!')
        } catch (error) {
            console.log(error);
            console.log('Error trying to connect in database!')
        }
    }
}

export default Server;