const express = require("express");
const app = express();

const port = 3001;

// CORS, JSON and URL Encoded Middlewares
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
