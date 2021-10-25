const {Schema, model}= require ('mongoose');

const usuarioSchema = new Schema({

    
    rol: String,
    estado: autorizado,
    nombre:{
            type: String,
            required: true
    },
    apellido: String,
    pasword: String,
    usuario: String,
    identificacion: {
        
        type: String,
        required: true
      }
);

module.exports = model('Usuario', usuarioSchema);



