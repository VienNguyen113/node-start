import express   from "express";
import express   from "express";

const app =  express() ;

app.listen(5555, () => {
  console.log("Express server started at port 5555");
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  console.log("GET /")
  console.log("GET ////")
  res.send("hello world");
});
