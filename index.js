const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact":
      path += "contact.html";
      res.statusCode = 200;
      break;
    default:
      path += "error.html";
      res.statusCode = 404;
      break;
  }

  // read files(html)
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    res.statusCode = 200;
    return res.end(data);
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening for request on port 3000");
});
