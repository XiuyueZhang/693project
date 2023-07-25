import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import users from "./routes/users.js"
import general from "./routes/general.js"
import admin from "./routes/admin.js"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use('/', general);
app.use('/user', users);
app.use('/admin', admin);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});