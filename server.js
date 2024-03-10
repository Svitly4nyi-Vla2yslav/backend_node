const mongoose = require("mongoose")
const app = require('./app')

// const DB_HOST = "mongodb+srv://Vladyslav:nClNIxmkyO1HvM5e@cluster0.oytqrp5.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0";

const {DB_HOST, PORT = 3000} = process.env;

// const PORT = 3000; 

mongoose.set('strictQuery', true)

// console.log(`Connecting to MongoDB at: ${DB_HOST}`);

mongoose.connect(DB_HOST)

.then(() => {
  app.listen(PORT)
})
.catch(error => {
  console.log(error.message)
  process.exit(1)
})