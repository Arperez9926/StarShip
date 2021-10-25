const{Router}=require('express');
const router = Router();

const{getProductos, createProductos,getProducto,updateProducto,deleteProducto} = require('../controllers/productos.controller');


router.route('/')
    .get(getProductos)
    .post(createProductos);

router.route('/:Id')
    .get(getProducto)
    .put(updateProducto)   
    .delete(deleteProducto) 

module.exports=router;



