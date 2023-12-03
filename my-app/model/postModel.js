import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  postFotoURL: String,
  fecha: { type: Date, default: Date.now }
});

//export el model table con name posts
export const postsModel = mongoose.model('posts', postSchema);