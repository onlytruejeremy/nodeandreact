const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded());

app.use(cors());

app.get("", (req, res) => {
  res.send("Server is running");
});

//serve static if production
/* if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
}); */

app.listen(port, () => {
  console.log(`Server running on: ${port}`);
});
