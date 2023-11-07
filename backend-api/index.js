const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const kerdoivRoutes = require("./routes/kerdoivRoutes");
const connectMongoDb = require("./config/dbConnection");

const PORT = process.env.SERVER_PORT || 12345;

connectMongoDb();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/kerdoiv", kerdoivRoutes);

app.listen(PORT, () => {
    console.log(`Server port: ${PORT}`);
});