var PORT=3000;
var express = require('express');
var app = express();
var mysql = require('./mysql');
app.use(express.json()); // para parsear application/json
app.use(express.static('.')); // para servir archivos estaticos


/** Obtiene los dispositivos existentes en la base de datos 
* Se puede enviar un filtro (filter) especificando:
* - el valor cero (0) para filtrar por lamparas
* - el valor uno (1) para filtrar por persianas
*/ 
app.get('/devices', function(req, res, next) {
   let consulta = 'SELECT * FROM Devices';
   if (req.query.filter === '0') {
	consulta = 'SELECT * FROM Devices WHERE type = 0';
    }
   if (req.query.filter === '1') {
	consulta = 'SELECT * FROM Devices WHERE type = 1';
    }
    mysql.query(consulta, function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta).status(200);
    });
});

/** Obtiene datos de un dispositivo
*/ 
app.get('/devices/:id', function(req, res, next) {
    mysql.query('SELECT * FROM Devices WHERE id=?', [req.params.id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta);
    });
});

/** Cambia el estado de un dispositivo
Si se encuentra en cero (0) cambia el estado a uno (1)
Si se encuentra en uno (1) cambia el estado a cero (0)
*/ 
app.post('/devices', function(req, res, next) {
    console.log(req.body);

    st=0;
    if(req.body.state)
        st=1;

    id = req.body.id.split("_")[1]; // viene dev_xx

    mysql.query('UPDATE Devices SET state=? WHERE id=?', [st, id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(JSON.stringify(req.body));
    });
});

/** Define en que puerto va a escuchar la aplicacion
*/
app.listen(PORT, function(req, res) {
    console.log("API funcionando en el puerto "+PORT);
});