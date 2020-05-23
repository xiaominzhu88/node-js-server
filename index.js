const http = require('http');
const publicFile = require('./public/publicFile'); // 'import' the created file in 'public' dir
const fs = require('fs');

const server = http.createServer((req, res) => {
  // use fs to read file which i created inside 'public' dir
  fs.readFile('./public/public.html', (err, data) => {
    if (err) {
      res.setHeader('Content-type', 'text/plain');
      // error 404!
      res.statusCode = 404;
      res.end(err);
    } else {
      //set type of the content on localhost page with hostname and port, could also change
      //to text/html then it shows html -Header
      res.setHeader('Content-type', 'text/html');

      // port 200 OK!
      res.statusCode = 200;

      // finish res
      res.end(data);
    }
  });
});

//  show server console with run on localhost
server.listen(publicFile.port, publicFile.hostname, () => {
  console.log(
    `Server running at http://${publicFile.hostname}:${publicFile.port}/`,
  );
});
