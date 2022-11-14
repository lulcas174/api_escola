import 'dotenv/config';
import express from 'express';
import "reflect-metadata";

const port = process.env.APP_PORT;
const app = express();

app.listen(port, () => {
    console.log(`Servidor esta rodando em: http://localhost:${port}`)
});