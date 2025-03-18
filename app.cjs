/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(404).send('File Not Found');
    } else {
      res.set("Content-Type", "text/html");
      res.status(200).send(Buffer.from(data));
    }
  });
});

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "about.html");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(404).send('File Not Found');
    } else {
      res.set("Content-Type", "text/html");
      res.status(200).send(Buffer.from(data));
    }
  });
});

app.get("/contact-me", (req, res) => {
  const filePath = path.join(__dirname, "contact-me.html");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(404).send('File Not Found');
    } else {
      res.set("Content-Type", "text/html");
      res.status(200).send(Buffer.from(data));
    }
  });
});

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
  console.log(
    `The server is listen at http://${process.env.HOSTNAME}:${process.env.PORT}`,
  );
});
