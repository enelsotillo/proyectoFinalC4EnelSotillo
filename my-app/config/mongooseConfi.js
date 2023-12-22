
import mongoose from "mongoose";
/*
Estoy teniendo problemas con mis variables de entorno consultar luego al prof
*/
const mongooseURI = process.env.MONGODB_URI;

 const startMongooseDb = mongooseURI;
 export const conexionMongoose = async () =>{
    try {
        console.log('conextion con exit DB');
        await mongoose.connect(startMongooseDb);
        
    } catch (error) {
        console.log(error);
       res.status(500).json({Error: error});
    }
    
}
