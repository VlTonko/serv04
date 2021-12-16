const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');

  res.setHeader('Content-Type', 'text/html');

  const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

  let basePath = '';

  switch (req.url) {
    case '/':
      basePath = createPath('index');
      res.statusCode = 200;
      break;
    default:
      basePath = createPath('error');
      res.statusCode = 404;
      break;
  }

  fs /
    fs.readFile(basePath, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });

  /*
  res.setHeader('Content-Type', 'text/html');
  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write('<h1>Hello</h1>');
  res.write('<p>Hello2</p>');
  */
  /*
  res.setHeader('Content-Type', 'aplication/json');
  const data = JSON.stringify([
    { name: 'Fry', age: 27 },
    { name: 'Lila', age: 25 },
  ]);
  res.end(data);
  */
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listen port ${PORT}`);
});
