import 'dotenv/config';
import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
import { UserRepository } from './Repository/UserRepository';
import { UserService } from './services/UserService';
import { DocumentController } from './controllers/DocumentController';
import { DocumentRepository } from './Repository/DocumentRepository';
import { DocumentService } from './services/DocumentService';
import { ProjectController } from './controllers/ProjectController';
import { ProjectRepository } from './Repository/ProjectRepository';
import { ProjectService } from './services/ProjectService';
import { ChunkRepository } from './Repository/chunkRepository';
import { ChunKService } from './services/ChunkService';


const app = express();

const port = Number(process.env.PORT);
const frontendUrl = process.env.FRONTEND_URL ?? 'http://localhost:3000';

app.use(cors({
  origin: frontendUrl,
}));

useExpressServer(app, {
  controllers: [UserController,DocumentController,ProjectController,UserService,DocumentService,ProjectService,ChunKService,ProjectRepository,ChunkRepository,DocumentRepository,UserRepository],
});

app.listen(port, hello);

function hello() {
  console.log(`Server is starting at the Port ${port}`);
}
