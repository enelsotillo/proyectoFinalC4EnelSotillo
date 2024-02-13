import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  usuario: { type: String, required: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  password: { type: String, required: true },
});

//export el model table con name usuarios
export const usersModel = mongoose.model('usuarios', usersSchema);