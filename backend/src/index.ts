import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.json({ message: "success" });
});

app.listen(8080, () => {
  console.log("Server running on localhost:8080");
});
