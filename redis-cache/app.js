const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

// Set response
function setResponse(title, content) {
  return `<h2> Content searched for ${title} is: ${content} :)</h2>`;
}

// Make request to local api for data
async function getContent(req, res) {
  try {
    console.log('Fetching Data...');

    const { title } = req.params;

    const response = await fetch(`http://localhost:3000/articles/${title}`);

    const data = await response.json();

    const content = data.content;

    // Set data to Redis
    client.setex(title, 3600, content);

    res.send(setResponse(title, content));
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

// Cache middleware
function cache(req, res) {
  const { title } = req.params;

  client.get(title, (err, content) => {
    if (err) throw err;
    if (content !== null) {
      res.send(setResponse(title, content));
    } else {
      res.send(`No articles matching that title in our DB :( `);
    }
  });
}

app.get('/article/:title', cache, getContent);

app.listen(5000, () => {
  console.log(`App listening on port ${PORT}`);
});
