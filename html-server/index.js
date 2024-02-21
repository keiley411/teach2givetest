const fsPromises = require("fs").promises;
const path = require("path");
const http = require("http");

const HOME_PAGE = path.join(__dirname, "html-pages", "home.html");
const SIGN_UP_PAGE = path.join(__dirname, "html-pages", "sign-up.html");
const ERROR_PAGE = path.join(__dirname, "html-pages", "error.html");
const STYLES = path.join(__dirname, "html-pages", "styles.css");
const port = 3000;

const getHtml = async (fileName) => {
  const fileContent = await fsPromises.readFile(fileName, { encoding: "utf8" });
  return fileContent;
};

const server = http.createServer(async (req, res) => {
    console.log(req.url)
  if (req.url === "/") {
    // home page
    // getHtml(HOME_PAGE).then((htmlContent) => res.write(htmlContent));
    const htmlContent = await getHtml(HOME_PAGE);
    res.write(htmlContent);
  } else if (req.url === "/sign-up") {
    // sign-up page
    const htmlContent = await getHtml(SIGN_UP_PAGE);
    res.write(htmlContent);

} else if (req.url === "/styles.css") {
    const htmlContent = await getHtml(STYLES);
    res.write(htmlContent);
  
  } else {
    // error page
    const htmlContent = await getHtml(ERROR_PAGE);
    res.write(htmlContent);
  }
  res.end();
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}\n`);
});
