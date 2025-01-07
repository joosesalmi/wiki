const express = require("express");
const {wikisearch} = require ("./wikisearch");

const app = express();

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

app.get("/wiki", (req, res, next) => {
    wikisearch(req.query.haku, (error, data) => {
      if (error) {
        res.end(error);
      } else {
        res.json(data);
      }
    });
  });
  
  
  