const express = require ('express');
const app = express();
const cors = require('cors');

//CONFIGURACIONES
app.set('port', process.env.PORT || 4000);

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/productos', require('./routes/productos'));

module.exports=app;