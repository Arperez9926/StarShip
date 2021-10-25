const productosCtrl ={};

const Producto =require('../models/model.productos');

productosCtrl.getProductos = async (req,res) => {
   const productos = await Producto.find ();
    res.json(productos);
};

productosCtrl.createProductos = (req,res) => res.json({message:'No hay productos registrados'});

productosCtrl.getProducto= (req,res) => res.json({message:'Buscar producto'})

productosCtrl.updateProducto = (req,res) => res.json({message:'Actualizar producto'})

productosCtrl.deleteProducto = (req,res) => res.json({message:'Eliminar producto'})


module.exports = productosCtrl;