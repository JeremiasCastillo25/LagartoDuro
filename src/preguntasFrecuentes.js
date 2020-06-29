const fs = require('fs')
let preguntasFrecuentes = {
     db : './data/faqs.json',
    titulo : 'Preguntas frecuentes',
    leerJSON: function(){
        let PreguntasJSON = fs.readFileSync(this.db, 'utf-8');
        let Preguntas = JSON.parse(PreguntasJSON);
        return Preguntas
    },
    cantidad: function(){
        return this.leerJSON().total_faqs
    },
   listarFaqs: function(){
       let faqs = this.leerJSON();
       return faqs.faqs
   }
}
module.exports = preguntasFrecuentes