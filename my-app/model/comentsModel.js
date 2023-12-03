import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  comentario: String,
  fecha: { type: Date, default: Date.now }
});

//export el model table con name coments
export const comentsModel = mongoose.model('coments', postSchema);