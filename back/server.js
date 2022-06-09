const express = require('express');
const morgan = require('morgan');
const serveIndex = require('serve-index');
const app = express();
const port = 3000;
const api = require("./src/api");

app.use(morgan("tiny"));

app.use(express.static("."));

app.use("/api", api);

app.use(serveIndex(".", {icons:true}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})