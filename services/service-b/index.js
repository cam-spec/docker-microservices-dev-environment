const express = require("express");
const app = express();

const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.json({ service: "service-b", status: "running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, () => {
  console.log(`service-b running on port ${PORT}`);
});
