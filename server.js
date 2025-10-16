// server.js
import express from "express";
const app = express();
app.use(express.static("dist"));
app.get("/healthz", (_, res) => res.status(200).send("ok"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => console.log(`up on ${PORT}`));
