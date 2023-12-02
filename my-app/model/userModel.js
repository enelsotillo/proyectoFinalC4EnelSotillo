import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  usuario: String,
  nombre: String,
  apellido: String
});

export const usersModel = mongoose.model('usuarios', usersSchema);