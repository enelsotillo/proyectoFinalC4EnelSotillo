
import mongoose from "mongoose";
/*
Estoy teniendo problemas mis variables de entorno
*/
const mongooseURI = process.env.MONGOSE_DB_IRU;

 const startMongooseDb = "mongodb+srv://enelsotillo:1234@cluster0.5nsb5iv.mongodb.net/?retryWrites=true&w=majority";
 export const conexionMongoose = async () =>{
    try {
        console.log('conextion con exit DB');
        await mongoose.connect(startMongooseDb);
        
    } catch (error) {
        console.log(error);
       res.status(500).json({Error: error});
    }
    
}
