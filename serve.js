const serve = require('node-static');
const file = new serve.Server('./public');
const config = require('./config'); 

require('http')
  .createServer(function (req, res) {
    req
      .addListener('end', function () {
        file.serve(req, res);
      })
      .resume();
  })
  
 .listen(config.port, config.hostname, () => {
  console.log(
    `Server running at http://${config.hostname}:${config.port}/`,
  );
});
  //.listen(config.port);
