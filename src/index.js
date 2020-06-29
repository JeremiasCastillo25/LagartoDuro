const homePage = require('./homePage');
const enCartelera = require('./enCartelera');
const masVotadas = require  ('./masVotadas');
const preguntasFrecuentes = require ('./preguntasFrecuentes');
const sucursales = require ('./sucursales');
const contacto = require ('./contacto');
const { totalPreguntas, listarFaqs } = require('./preguntasFrecuentes');
let index = {
    homePage:function(res){
       res.write(homePage.titulo)
       res.write("total: " + homePage.cantidad())
       let pelis = homePage.listarPelis();
       for(peli of pelis){
           res.write(peli)
           res.write('\n')
       }
       res.end()
    },
    enCartelera:function(res){

        res.write(enCartelera.titulo)

        res.write('\n----------------------------------------------------\n')
        
        res.write("total: "+ enCartelera.cantidad() + '\n\n');
        
        res.write('\n')
        
        let peliculas = enCartelera.listarPelis()
        for(pelicula of peliculas){
        
        res.write(pelicula.title)
       
        res.write('\n')
       
        res.write(pelicula.overview)
       
        res.write('\n\n')
}
        res.end()
      },
    masVotadas:function(res){
   
        res.write(masVotadas.titulo)
   
        res.write('\n')
   
        res.write('Total de votadas: ' + masVotadas.cantidad())
    
        res.write('\n\n')
   
        res.write('Rating promedio : ' + masVotadas.promedio())
    
        res.write('\n')
   
        res.write('Listado de peliculas')
   
     let movies = masVotadas.listarPelis();
    movies.forEach(function (movie) {
   
        res.write('\n')
    
        res.write(movie.title + 'Rating: ' + movie.vote_average)
   
        res.write('\n')
   
        res.write(movie.overview)
   
        res.write('\n')    
   
    });
    
        res.end()
    },
    preguntasFrecuentes:function(res){
        res.write(preguntasFrecuentes.titulo)

        res.write('\n\n')

        res.write('Total de preguntas: ' + preguntasFrecuentes.cantidad())

        res.write('\n\n');

        let faqs = preguntasFrecuentes.listarFaqs();
        for(faq of faqs) {
            res.write('\n')
            
            res.write('pregunta: ' + faq.faq_title)
            
            res.write('\n\n')

            res.write('Respuesta: ' + faq.faq_answer)

            res.write('\n')
        }
        res.end()
    },
    sucursales:function(res){
        
        res.write(sucursales.titulo)
        
        res.write('\n\n')
        
        res.write('Total de salas:' + sucursales.cantidad())
        
        res.write('\n\n')
        
        res.write('Listado de salas:\n\n')
        
        let salas = sucursales.listarSalas()
        salas.forEach(function(theater){
            res.write('\n')
            
            res.write(theater.name)
            
            res.write('\n')
            
            res.write(theater.address)
            
            res.write('\n')
            
            res.write(theater.description)
        });
        res.end()
        },
    contacto:function(res){
        res.write('\n\n')

        res.write(contacto.titulo)
        
        res.write('\n\n')

        res.write(contacto.contenido)

        res.end()
    },
    
}
module.exports = index