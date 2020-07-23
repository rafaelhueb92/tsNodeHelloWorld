import express from "express";

const app = express();
const PORT = parseInt(process.env.PORT || "3000");

app.get("/", (_, res) => {
  res.send("The sedulous hyena ate the antelope!");
});
app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});
