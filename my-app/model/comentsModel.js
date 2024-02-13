import { mongoose, Types } from "mongoose";

const postSchema = new mongoose.Schema({
  comentario: String,
  fecha: { type: Date, default: Date.now },
  autor: {
    type: Types.ObjectId, //hace referencia a la BD usuario donde ID.Object
    ref: 'usuarios',
  },
  postrs: {
    type: Types.ObjectId, //hace referencia a la BD posts donde ID.Object
    ref: 'posts',
  },
});

//export el model table con name coments
export const comentsModel = mongoose.model('coments', postSchema);