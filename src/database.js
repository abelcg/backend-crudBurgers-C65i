import mongoose from 'mongoose';
import 'dotenv/config'

//const url = 'mongodb://127.0.0.1:27017/crudburgers65i';
const URI = process.env.MONGODB_URI

//mongoose.connect(url);
mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log('BD Conectada');
})
