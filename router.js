let index = require ('./src/index')
let router = function(url,res){
      switch (url) {
          case '/':
              index.homePage(res)
              break
          case '/en-cartelera':
              index.enCartelera(res)
              break
          case '/contacto':
              index.contacto(res)
              break
           case '/home-page':
               index.homePage(res)
               break
           case '/mas-votadas':
               index.masVotadas(res)
               break
           case '/preguntas-frecuentes':
               index.preguntasFrecuentes(res)
               break
           case '/sucursales':
               index.sucursales(res)
               break         
          default:
              res.end('404 server not found :c')
              
      }
}
module.exports = router