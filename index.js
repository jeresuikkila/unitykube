const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const serviceName = process.env.SERVICE_NAME || "UUID as a Service";

const uuidv4 = require("uuid/v4");

app.get("/", (req, res) => res.json({ serviceName, uuid: uuidv4() }));

app.get("/:count", (req, res) => {
  const count = parseInt(req.params.count);
  if (count < 1) {
    res.status(500).json({ serviceName, status: 500, message: "Wrong number" });
  }
  const uuids = [];
  for (let i = 0; i < count; i++) {
    uuids.push(uuidv4());
  }
  res.json({ serviceName, count, uuids });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
