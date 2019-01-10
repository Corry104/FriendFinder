var express = require("express");

var app = express();

var friends = require("./app/data/friends");

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

module.exports = function(app) {

    app.get("api/friends", function(req, res){
        res.josn(friends);
    });

    app.post("/api/friends", function(req, res){
        let foundFriend;
        let minDiff = 9999;
        var userAnswer = req.body;

        userAnswer.routeName = friends.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(userAnswer);
      
        characters.push(userAnswer);
      
        res.json(userAnswer);

        for (let i = 0; i < friends.length; i++) {
            let totDiff = 0;
            for (let j =0; j < 10; j++) {

            }
        }
    });
}


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});



