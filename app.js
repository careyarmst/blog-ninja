const express = require("express");
const connectToDB = require("./db");
const configureMiddlewares = require("./middlewares");
const routes = require("./routes");
require("dotenv").config({ path: "./db_connection.env" });

// express app
const app = express();

// use middlewares
configureMiddlewares(app);

// set view engine
app.set("view engine", "ejs");

// connect to mongodb
connectToDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Failed to start the server:", err);
  });

// use routes
app.use("/", routes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
