const mongoose = require("mongoose")

const MONGO_URI = 'mongodb://localhost:27017'

const connectDB = async () => {
    console.log(MONGO_URI)
    try {
      await mongoose.connect( MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, success) {
  
          if (success) {
            console.log(`🗄️  DB connected successully`);
          }else if(err){
            console.log(err);
            console.log('😒  DB connection failed ');
          }
  
      });
      return mongoose.connection;
    } catch (error) {
      console.log(error);
      console.log(' Error connecting to DB');
      return error;
    //   process.exit(1)
    }
  }


module.exports = connectDB