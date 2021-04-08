// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

/* eslint-disable */

const functions = require("firebase-functions");
const express = require("express");
const { selectService } = require("./distrib");
const validator = require("email-validator");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/hello", (req, res, next) => {
  res.send("Привет их Firebase Cloud Functions");
});

app.post("/emailValidate", (req, res, next) => {
  const postData = req.body;
  if (postData.email) {
    try {
      // res.send({ status: validator.validate(postData.email) });
      res.send({ status: selectService("mail-checker", postData.email) });
    } catch (err) {
      if (err.message === "refuse") {
        res.send("MX сервер отклонил запрос");
      }
    }
  } else {
    res.status(500).json({ status: "Что то пошло не так" });
  }
});

app.listen(PORT, () => {
  console.info(`Сервер запущен на ${PORT} порту`);
});

exports.app = functions.https.onRequest(app);
