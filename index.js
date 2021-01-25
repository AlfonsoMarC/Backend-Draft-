'use strcit'
// mongoose: trabajar con MongDB
var mongoose = require('mongoose');
var app=require('./app');
var port=3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
		.then(()=> {
			console.log("Conexion a la base de datos establecida con éxito");

			// Crear el servidor 
			app.listen(port, ()=> {
				console.log("Servidor corriendo en localhost:3700")
			});
		})
		.catch(err=> console.log(err));  // Capturar el error