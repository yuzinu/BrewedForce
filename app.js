const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const User = require("./models/User");
const Coffee = require("./models/Coffee");
const CoffeeScore = require("./models/CoffeeScore");

const users = require("./routes/api/users");
const coffees = require("./routes/api/coffees");
const coffee_scores = require("./routes/api/coffee_scores");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
app.use("/api/users", users);
app.use("/api/coffees", coffees);
app.use("/api/coffee_scores", coffee_scores);

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`Listening on port ${port}`)});
