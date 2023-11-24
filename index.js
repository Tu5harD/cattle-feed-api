const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

// URL of database
const URL = process.env.DATABASE;

const PORT = process.env.DATABASE || 3001;

// dotenv config

dotenv.config({ path: "./.env" });




// MongoDB connection

mongoose
  .connect(process.env.DATABASE)
  .then(console.log("Connection is succesful"))
  .catch((error) => console.log(error));


// Data schama module access

const UserData = require("./src/module/cattledata");

// app use 

app.use(cors());
app.use(express.json());


// // To create data

app.post("/create",async (req, res) => {
  try {
    const productData = await UserData.create(req.body);
    res.json(productData);
  } catch (error) {
    console.log("Error found in adding ", error);
  }
});


// To get the product 

app.get("/get", async (req, res)=> {
  try {
    const productData = await UserData.find()
    res.send(productData)
  } catch (error) {
    console.log("Error found in fetching ",error)
  }
})


// To get data by _id


app.get("/getbyid/:id", async (req, res)=> {
  try {
    const id = req.params.id;
    const productData = await UserData.findById({_id: id})
    res.send(productData)
  } catch (error) {
    console.log("Error found in fetching ",error)
  }
})

// To delete the prodduct

// To increase the count 


app.put('/likes', async (req, res) => {

  let doc = await Like.findById("default");

  if (!doc) {
    doc = await Like.create({_id: "default"});
  }

  doc.likes++;
  await doc.save();

  res.json(doc);

});

// Listen port number

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

