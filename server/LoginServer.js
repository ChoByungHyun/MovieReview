const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const users = [
  {
    username: "user1",
    password: "pass1",
  },
  {
    username: "user2",
    password: "pass2",
  },
];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    res.status(401).json({ error: "Incorrect username or password" });
  } else {
    res.json({ message: "Login successful" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
