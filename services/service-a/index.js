const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.json({ service: "service-a", status: "running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, () => {
  console.log(`service-a running on port ${PORT}`);
});
