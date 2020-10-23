const express = require("express");
const cors = require("cors");
const subscription = require("./routes/subscription");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/subscription", subscription);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
