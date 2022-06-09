const express = require("express");

const app = express.Router();

app.use(express.json);

app.post("/connect", (req, res) => {
  const loginForm = req.body;
  if (loginForm.login !== "admin") {
    res.status(401).end();
    return;
  }
  const user = {
    displayName: loginForm.login,
  };
  req.session.user = user;
  res.json({
    displayName: loginForm.login,
  });
});

app.post("/disconnect", (req, res) => {
  req.session.user = unedefined;
  res.status(204).end();
});

app.get("/is-connected", (req, res) => {
  if (!req.session.user) {
    res.status(401).end();
    return;
  }
  const user = req.json(req.session.user);
  return user;
});

module.exports = app;
