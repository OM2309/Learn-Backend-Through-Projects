const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  
  users.push({
    id: users.length + 1,
    ...body,
  });
 
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({
      status: "success",
      id: users.length + 1,
    });
  });
  // console.log(body);
});

app.patch("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id); // Extract the ID from URL params
  users.delete(id);
  return res.json({ status: "success" });
});


app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
