const usuariosCtrl ={};

usuariosCtrl.getUsuarios = (req,res) => res.json({message:[]})

usuariosCtrl.createUsuarios = (req,res) => res.json({message:'No hay usuarios registrados'});

usuariosCtrl.getUsuario= (req,res) => res.json({message:'Buscar usuario'})

usuariosCtrl.updateUsuario = (req,res) => res.json({message:'Actualizar usuario'})

usuariosCtrl.deleteUsuario = (req,res) => res.json({message:'Eliminar usuario'})


module.exports = usuariosCtrl;