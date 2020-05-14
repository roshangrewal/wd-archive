const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

// Set response
function setResponse(article, content) {
  return `<h2> Content: ${content} :)</h2>`;
}

// Make request to local api for data
async function getContent(req, res) {
  try {
    console.log('Fetching Data...');

    const { article } = req.params;

    const response = await fetch(`http://localhost:3000/articles/${article}`);

    const data = await response.json();

    const content = data.content;

    // Set data to Redis
    client.setex(article, 3600, content);

    res.send(setResponse(article, content));
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

// Cache middleware
function cache(req, res, next) {
  const { article } = req.params;

  client.get(article, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send(setResponse(article, data));
    } else {
      res.send(`No articles matching that title in our DB :( `);
    }
  });
}

app.get('/article/:article', cache, getContent);

app.listen(5000, () => {
  console.log(`App listening on port ${PORT}`);
});
