import mongoose from "mongoose"
module.export=()=>{
    const connectionParams={useNewUrlParser:true,useUnifiedTopology:true}
}
try {
    mongoose.connect(process.env.DB,connectionParams)
    console.log("connected to db")
} catch (error) {
    console.log("error connection to db")
}

