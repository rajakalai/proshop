import mongoose from 'mongoose'

const connectDb = async()=>{
    try{
        const conn = await mongoose.connect(
            'mongodb://localhost/proshop',
            {                
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology:true
            }
        )
        console.log(`MongoDB connected on ${conn.connection.host}`)
    }catch(error){
        console.log(`Error ${error.message}`)
        //exit with error
        process.exit(1);
    }

}
//.red.underline.bold
//.cyan.underline

export default connectDb;