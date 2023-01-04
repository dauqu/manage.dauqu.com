const express = require("express");
const app = express();


const PORT = process.env.PORT || 4000;

//Allow cors
const cors = require("cors");
//Loop of allowed origins
const allowedOrigins = ["http://localhost:3001", "http://localhost:3000", "https://admin-for-all.vercel.app"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

//Allow JSON to be parsed
app.use(express.json());


//Cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//Allow static files
app.use(express.static(__dirname + "/files"));


//Connect to database
const connectDB = require("./config/database");
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/test", (req, res) => {
  console.log(req.body);

  res.send("Done");
});

// Harsha/
//Send html file
app.get("/files", (req, res) => {
  res.sendFile(__dirname + "/files/");
});

const apiv1 = "/api/v1";

app.use(`${apiv1}/login`, require("./routes/login")); 
app.use(`${apiv1}/create-dns`, require("./routes/create_dns"));

//Static files
app.use(express.static("public"));

app.use("/privacy-policy", (req, res) => {
  res.sendFile(__dirname + "/public/privacy-policy.html"); 
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
}); //Start the server