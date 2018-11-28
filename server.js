const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const courses = require("./routes/api/courses");
const studentsinfo = require("./routes/api/studentsinfo");
const studentinfobyname = require("./routes/api/studentinfobyname");
const todo = require("./routes/api/todo");
const passport = require("passport");
const cors = require("cors");
const app = express();
const path = require("path");
const holds=require("./routes/api/holds");

// Set up view engine
// app.set("view engine", "ejs");
//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// DB Config
const db = require("./config/keys").mongoURI;
//Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/courses", courses);
app.use("/api/studentsinfo", studentsinfo);
app.use("/api/studentinfobyname/", studentinfobyname);
app.use("/api/todo", todo);
app.use("/api/holds",holds);

//Serve  static assets
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
