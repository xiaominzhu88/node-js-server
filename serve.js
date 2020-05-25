const serve = require('node-static');
const file = new serve.Server('./public');
require('http')
  .createServer(function (req, res) {
    req
      .addListener('end', function () {
        file.serve(req, res);
      })
      .resume();
  })
  .listen(3000);
