import express from "express";
import fs from "node:fs/promises"

const app = express();
const port = 3000;

/* 
app.<METHOD>('<PATH>', (req, res) => {
  res.status(<numer>).send(<string>);
}): 
*/

app.get('/', (req, res) => {
  res.status(200).send("HOME => endpoints: /status /posts");
});

app.get('/status', (req, res) => {
  res.status(200).send("200 OK");
});

app.get('/posts', async (req, res) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const posts = await res.json();
    console.log(posts);
    res.status(200).send(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('500 Internal Server Error');
  }
});

/********************************************/
app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});