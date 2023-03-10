const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { readFortune } = require('./controller')

app.get("/api/compliment", readFortune);

const { updateFortune } = require('./controller')

app.get("/api/compliment", updateFortune);

app.listen(4000, () => console.log("Server running on 4000"));
