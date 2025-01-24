import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

var posts = [];
var darkMode = "light";

// VIEWING PAGE
// Regular sorting (for you)
app.get("/", (req, res) => {
  const page = "home";
  res.render("index.ejs", {
    page: page,
    posts: posts,
    darkMode: darkMode
  });
});

// Popular sorting
app.get("/popular", (req, res) => {
  const page = "popular";
  res.render("index.ejs", {
    page: page,
    posts: posts,
    darkMode: darkMode
  });
});

// History
app.get("/history", (req, res) => {
  const page = "history";
  res.render("index.ejs", {
    page: page,
    posts: posts,
    darkMode: darkMode
  });
})

// One user's content



// DARK/LIGHT MODE
app.post("/dark-light-switch", (req, res) => {
  const page = "";
  if (darkMode === "light") {
    darkMode = "dark";
  } else {
    darkMode = "light";
  }

  res.render("index.ejs", {
    page: page,
    posts: posts,
    darkMode: darkMode
  });
});


// ACCOUNT PAGE
app.get("/account", (req, res) => {
  const page = "account";
  res.render("account.ejs", {
    page: page,
    posts: posts,
    darkMode: darkMode
  });
});


// ADD CONTENT PAGE
app.get("/add-content", (req, res) => {
  const page = "add-content";
  res.render("add-content.ejs", {
    page: page,
    edit: "false"
  });
});

// Handle form and edit submission
app.post("/submit-added-content", (req, res) => {
  if (req.body["edited"] === "true") {
    posts.splice(req.body["index"], 1);
  }

  posts[posts.length] = {
    title: req.body["title"],
    content: req.body["content"]
  }
  
  const page = "";
  
  if (req.body["edited"] === "true") {
    res.render("account.ejs", {
      page: page,
      posts: posts,
      darkMode: darkMode
    });
  } else {
    res.render("index.ejs", {
      page: page,
      posts: posts,
      darkMode: darkMode
    });
  }
});


// EDIT POST PAGE
app.post("/edit-post", (req, res) => {
  const page = "";
  res.render("add-content.ejs", {
    page: page,
    posts: posts,
    index: req.body["index"],
    edit: "true"
  });
});


// DELETE POST PAGE
app.post("/delete-post", (req, res) => {
  posts.splice(req.body["index"], 1);

  const page = "";
  res.render("account.ejs", {
    page: page,
    posts: posts,
    darkMode: darkMode
  });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});