import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";

import index from "./routes/index.js";

dotenv.config();

const port = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(express.json());

app.use(index);

const server = http.createServer(app);

server.listen(port, () => console.log(`listening on port ${port}`));
