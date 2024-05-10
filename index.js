
const express = require("express"); 
const app = express(); 
const establishConnect = require("./dbconnection");
const routes = require('./Routes/routes')
const bodyParser = require('body-parser');


try {
  console.log("*****"); 
  establishConnect();
} catch(Error) {
  console.log(Error);
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("*****",process.env.BASE_URL);
app.use(`${process.env.BASE_URL}`, routes);
const port=3002; 
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
  });