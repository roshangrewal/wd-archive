import express from "express";
import fetch from "node-fetch";
import cookieSession from "cookie-session";

const app = express();

app.use(
  express.cookieParser({
    secret: process.env.COOKIE_SECRET
  })
);

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
// console.log({ client_id, client_secret });

app.get("/", (req, res) => {
  res.send("Hello GitHub auth");
});

app.get("/login/github", (req, res) => {
  const redirect_uri = "http://localhost:9000/login/github/callback";
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${redirect_uri}`
  );
});

async function getAccessToken({ code, client_id, client_secret }) {
  const request = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code
    })
  });
  const text = await request.text();
  const params = new URLSearchParams(text);
  return params.get("access_token");
}

async function fetchGitHubUser(token) {
  const request = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: "token " + token
    }
  });
  return await request.json();
}

app.get("/login/github/callback", async (req, res) => {
  const code = req.query.code;
  const access_token = await getAccessToken({ code, client_id, client_secret });
  const user = await fetchGitHubUser(access_token);
  if (user) {
    req.session.access_token = access_token;
    req.session.githubId = user.id;
    res.redirect("/admin");
  } else {
    res.send("Login did not succeed!");
  }
});

app.get("/admin", async (req, res) => {
  if (req.session && req.session.githubId === 1126497) {
    res.send("Hello Kevin <pre>" + JSON.stringify(req.session, null, 2));
    // Possible use "fetchGitHubUser" with the access_token
  } else {
    res.redirect("/login/github");
  }
});

app.get("/logout", (req, res) => {
  if (req.session) req.session = null;
  res.redirect("/");
});

app.listen(process.env.PORT, () => console.log("Listening on localhost:" + process.env.PORT));


// const express = require('express');
// const fetch = require('node-fetch');
// require('dotenv').config();

// const app = express();
// const clientId = process.env.GITHUB_CLIENT_ID;
// const clientSecret = process.env.GITHUB_CLIENT_SECRET;
// // console.log({ clientId, clientSecret });

// async function getAccessToken(code) {
//   const res = await fetch('https://github.com/login/oauth/access_token', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       clientId,
//       clientSecret,
//       code
//     })
//   });
//   const data = await res.text()
//   const params = new URLSearchParams(data)
//   return params.get("access_token")
// }

// app.get('/', (req, res) => {
//   res.send('Hey there... something is coming');
// });

// app.get('/login/github', (req, res) => {
//   const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=http://localhost:4000/login/github/callback`
//   res.redirect(url);
// });

// async function getGithubUser(access_token) {
//   const req = await fetch('https://api.github.com/user', {
//     headers: {
//       Authorization: `bearer ${access_token}`
//     }
//   })
//   const data = await req.json()
//   return data;
// }

// app.get('/login/github/callback', async (req, res) => {
//   const code = req.query.code;
//   const token = await getAccessToken(code);
//   const githubData = await getGithubUser(token);
//   if (githubData.id === '1126497') {
//     res.send('Hello Kevin');
//   } else {
//     res.send('Someone else');
//   }
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });
