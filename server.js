import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send({ message: "Docker backend by Aman" });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
