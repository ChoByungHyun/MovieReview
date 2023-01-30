const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/search", async (req, res) => {
  try {
    const response = await axios.get(
      `https://openapi.naver.com/v1/search/movie.json?query=${req.body.query}`,
      {
        headers: {
          "X-Naver-Client-Id": "YOUR_CLIENT_ID",
          "X-Naver-Client-Secret": "YOUR_CLIENT_SECRET",
        },
      }
    );
    res.send(response.data);
  } catch (err) {
    res.status(500).send({ error: "An error occurred while fetching data" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
