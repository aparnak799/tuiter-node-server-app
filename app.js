import express from "express";
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const app = express();
const port = process.env.PORT || 4000
app.use(cors());
app.use(express.json());

TuitsController(app);
HelloController(app);
UserController(app);

app.listen(port, () => {
    console.log(`Server running on  ${port}`)
});