const {Schema, model}= require ('mongoose');



const productoSchema = new Schema({

    ID: String,
    Nombre_producto:{
            type: String,
            required: true
    },
    Presentacion: String,
    Precio: String,
    Stock: String,
    Fecha_registro: Date
});

module.exports = model('Producto', productoSchema);