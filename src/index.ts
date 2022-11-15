import 'dotenv/config';
import express from 'express';
import "reflect-metadata";
import { createConnection } from 'typeorm';
import router from './routes/routes';

createConnection()
    .then(async connection => {
        try{
            const port = process.env.APP_PORT;
            const app = express();
            app.use(express.json());
            app.use("/", router)
    
    
            app.listen(port, () => {
                console.log(`Servidor esta rodando em: http://localhost:${port}`)
            });
        }
       catch(e) {
          console.log(e);
       }
    })
    .catch((error) => console.log(error));

