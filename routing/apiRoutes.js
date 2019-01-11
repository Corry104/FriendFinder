
var path = require("path");
var friends = require("../app/data/friends");
var express = require("express");
var app = express();

module.exports = function (app) {
  
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    let userResponse = req.body.scores;
    console.log(req.body);
    let minDiff = 99999;
    let foundFriend;

    for (let i = 0; i < friends.length; i++) {
      let totDiff = 0;
      for (let j = 0; j < userResponse; j++) {
        totDiff += Math.abs(friends[i].scores[j] - userResponse[j]);
      }
      if (totDiff <= minDiff){
        foundFriend = friends[i];
        minDiff = totDiff;
    }
    console.log(friends[i] + " has a totDiff score of "+ totDiff);
    console.log("The closest match is currently " + foundFriend + " with a minDiff of " + minDiff);
    }
    res.json(foundFriend);
  });
};

