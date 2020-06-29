const fs = require('fs')

let sucursales = {
    db:'./data/theaters.json',
    titulo: 'Nuestras Salas',
    leerJSON: function(){
        let theatersJSON = fs.readFileSync(this.db, 'utf-8');
        let sala = JSON.parse(theatersJSON);
        return sala
    },
    cantidad: function (){
        return this.leerJSON().total_theaters
    },
    listarSalas: function (){
        let theaters = this.leerJSON();
        return theaters.theaters
        }
        
    
}
module.exports = sucursales