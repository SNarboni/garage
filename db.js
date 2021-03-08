const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/garage",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

const carsSchema = new mongoose.Schema({
  _id: Number,
  brand: String,
  model: String,
  year: Number,
  created: String,
});

let maDate = new Date().toLocaleString();

const carsModel = mongoose.model("cars", carsSchema);
// carsModel.deleteMany({}).then(() => {
//   carsModel.create([
//     {
//       _id: 1,
//       brand: "Renault",
//       model: "Espace",
//       year: 1999,
//       created: maDate,
//     },
//     {
//       _id: 2,
//       brand: "Renault",
//       model: "Scenic",
//       year: 2004,
//       created: maDate,
//     },
//     {
//       _id: 3,
//       brand: "Peugeot",
//       model: "308",
//       year: 2017,
//       created: maDate,
//     },
//   ]);
// });

// carsModel.findById({ _id: 1 }).then((response) => console.log(response));

// carsModel
//   .updateOne(
//     {
//       model: "Espace",
//     },
//     {
//       year: 2000,
//       created:maDate,
//     }
//   )
//   .then((response) => {
//     console.log(response);
//   });

// carsModel.deleteMany({brand : 'Renault'}).then((response) => {console.log(response)})

// carsModel.insertMany(
//   [{ _id: 1, brand: "Aston Martin", model: "DB9", year: 2010, created:maDate},
//   { _id: 2, brand: "Range Rover", model: "Discovery Sport", year: 2017, created:maDate },]
// );


carsModel.find({year:{$gt:2015} }).then((response) => console.log(response));

// carsModel.find({ model : /o/ }).then((response) => console.log(response));