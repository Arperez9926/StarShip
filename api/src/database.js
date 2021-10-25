const mongoose =require('mongoose');

const user='admon';
const pasword = 'admon1234';
const uri = `mongodb+srv://${user}:${pasword}@cluster0.aiahr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri)
  .then(db =>console.log('Base de datos está conectada'))
  .catch(err=> console.error(err));

module.exports=mongoose;