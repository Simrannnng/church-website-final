const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const contactRoutes = require("./routes/ContactRoutes"); 

const app = express();
app.use(bodyParser.json());
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));


mongoose
  .connect(
    "mongodb+srv://shreyasht2002:contactform@cluster0.wvz9d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB."))
  .catch((err) => console.error("MongoDB connection failed:", err));


app.use("/api", contactRoutes);

// Start server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
