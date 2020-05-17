const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongo = require("./config/keys")
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = mongo.mongoURI;
// Connect to MongoDB
mongoose.connect(db,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true   // for deprecation warning 
})
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

const port = process.env.PORT || 3000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));