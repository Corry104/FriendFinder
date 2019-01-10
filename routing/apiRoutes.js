// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// var friends = require('friendsData');
var express = require("express");
var app = express();

module.exports = function (app) {
  
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //needs testing
  app.post("/api/friends", function (req, res) {
    let foundFriend;
    let minDiff = 99999;

    var userAnswers = req.body;

    userAnswer.routeName = friends.name.replace(/\s+/g, "").toLowerCase();

    for (let i = 0; i < friends.length; i++) {
      let totDiff = 0;
      for (let j = 0; j < 10; j++) {
        totDiff += Math.abs(friends[i].ans[j] - userAnswers[j]);
      }
      if (totDiff <= minDiff) {
        minDiff = totDiff;
        foundFriend = friends[i];
      }
    }
    res.json(foundFriend);
  });
};

