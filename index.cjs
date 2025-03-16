const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;
const HOSTNAME = "localhost";

function pageLoader(page, res) {
  // handle the root case for index.html
  const resolvePage = page === "/" ? "index" : page;
  // define path to file
  const filePath = path.join(__dirname, `${resolvePage}.html`);

  // read the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 500 status code, file not found
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      // set status code to 200
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

function page404(res) {
  // define path to file
  const filePath = path.join(__dirname, `404.html`);

  // read the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 500 status code, file not found
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      // set status code to 200
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      pageLoader("/", res);
      break;
    case "/about":
      pageLoader("about", res);
      break;
    case "/contact-me":
      pageLoader("contact-me", res);
      break;
    default:
      page404(res);
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`The server is listen at http://${HOSTNAME}:${PORT}`);
});
