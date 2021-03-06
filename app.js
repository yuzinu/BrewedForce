// require("dotenv").config( {path: './.env'} );
const path = require("path");
const express = require("express");
const cors = require('cors');
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}
// const User = require("./models/User");
// const Coffee = require("./models/Coffee");
// const CoffeeScore = require("./models/CoffeeScore");
// const Review = require("./models/Review");

app.use(cors());
const users = require("./routes/api/users");
const coffees = require("./routes/api/coffees");
const coffee_scores = require("./routes/api/coffee_scores");
const reviews = require("./routes/api/reviews");
const fileUploadRoutes = require("./routes/api/fileUploadRoutes");
const shops = require("./routes/api/shops");

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
app.use("/api/reviews", reviews);
app.use("/api/photo", fileUploadRoutes);
app.use("/api/shops", shops);

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`Listening on port ${port}`)});
