import express from "express";

//routes
import userRoutes from "./routes/users.routes";

const app = express();
var cors = require('cors')
app.use(cors())
app.set("port", 4000);

//midlewares
app.use(express.json());

//Routes
app.use(userRoutes);

export default app;