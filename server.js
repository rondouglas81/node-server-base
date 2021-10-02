import express from "express";
import http from "http";
import cors from "cors";

import index from "./routes/index.js";

const port = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(index);

const server = http.createServer(app);

server.listen(port, () => console.log(`listening on port ${port}`));
