import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { Pool } from "pg";

config();
const PORT = process.env.API_PORT;
const app = express();
app.use(cors());

const db = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.get("/logs", async (req, res) => {
  const { rows } = await db.query("SELECT id,title FROM log");
  res.json(rows);
});

app.get("/logs/:id", async (req, res) => {
  const { rows } = await db.query(
    "SELECT id, title, date, content FROM log WHERE id=$1",
    [Number(req.params.id)],
  );
  res.json(rows[0]);
});

app.delete("/logs/:id", async (req, res) => {
  const { rows } = await db.query("DELETE FROM log WHERE id=$1", [
    Number(req.params.id),
  ]);
  res.json(rows[0]);
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});
