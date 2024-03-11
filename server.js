const mongoose = require("mongoose")
const app = require('./app')



const {DB_HOST, PORT = 3000} = process.env;



mongoose.set('strictQuery', true)



mongoose.connect(DB_HOST)

.then(() => {
  app.listen(PORT)
})
.catch(error => {
  console.log(error.message)
  process.exit(1)
})

// console.log(`Connecting to MongoDB at: ${DB_HOST}`);
// const PORT = 3000; 
// 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 - sengrid
// const DB_HOST = "mongodb+srv://Vladyslav:nClNIxmkyO1HvM5e@cluster0.oytqrp5.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0";