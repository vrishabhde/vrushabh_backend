// import express from "express";
// import { abhi, function_name, kunalfunction, login, logout, register, vrushabh } from "./controllers/all_controllers.js";

// const app = express();

// app.get("/path_name",function_name);
// app.get("/vrushabh", vrushabh);
// app.get("/abhi", abhi);
// app.get("/login", login);
// app.get("/register",register);
// app.get("/logout",logout);
// app.get("/kunal",kunalfunction);

// app.listen(3000);


import express from "express";

import morgan from "morgan";
import router from "./routes/user_routes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use("/api/v1", router);

app.listen(8000);