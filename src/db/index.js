

import  mongoose  from "mongoose";
import { DB_NAME} from  '../constants.js'






const connectDB = async  () => {
    try {
      const connectionInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`MongoDB is Connected ${connectionInstance}`)
    } catch (error) {
    console.log('Error connecting to the database', error);
        process.exit(1)
    }
}

export default connectDB