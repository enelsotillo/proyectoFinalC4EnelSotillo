import { mongoose, Types } from "mongoose";

const postSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  postFotoURL: String,
  fecha: { type: Date, default: Date.now },
  autor: {
    type: Types.ObjectId, //hace referencia a la BD usuario donde ID.Object
    ref: 'usuarios',
  }
});

//export el model table con name posts
export const postsModel = mongoose.model('posts', postSchema);