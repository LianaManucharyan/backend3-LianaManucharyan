import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from "swagger-ui-express";

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb+srv://lianamanucharyan002:LCbytQARdSWy76jT
@cluster0.v00xs.mongodb.net/backend3LianaM?retryWrites=true&w=majority&appName=Cluster0`);

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "AdoptMe app documentation",
            description: "Documentación de endpoints relacionados con Usuarios"
        }
    },
    apis: ["./src/docs/Users/*.yaml"]
}

const specs = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);
app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));


app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
