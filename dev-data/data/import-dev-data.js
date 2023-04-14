const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Tour = require('./../../models/tourModels');

dotenv.config({ path: './config.env' });
const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
console.log(db);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log(`Success connection`);
  });

// Read JSON File
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

console.log('Import Data to DB');

// Import Data to DB
const importDATA = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// Delete All previous data from DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log(`Data successfully deleted!`);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
if (process.argv[2] === '--import') {
  importDATA();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
