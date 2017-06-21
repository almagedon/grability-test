# Prueba Tecnica FrontEnd-Grability

## Descripcion.

	La app a sido deasrrollado implementando las diversas tecnologias destacando:

- [x] [WebPack2](https://webpack.js.org/)

- [x] [React.js](https://facebook.github.io/react/)
- [x] [Redux](http://es.redux.js.org/)
- [x] [Redux-thunk](https://github.com/gaearon/redux-thunk)

- [x] [Sass](https://sass-lang.com)
- [x] [Yarn](https://yarnpkg.com/lang/en/)
- [x] [Npm](https://www.npmjs.com/)

- [x] [Git](https://github.com/)

	Un especial agradecimiento a:

[marvin](https://github.com/workco/marvin)
>Asombroso boilerplate facil, ligero, increible.
>una gran herramienta.

[Erifranck Nuñez](https://www.linkedin.com/in/erifranck-nu%C3%B1ez-948a32b7/)
>Maestro, asesor y amigo.

## Instrucciones del aplicativo.

	Es necesario tener instalado:
- [nodeJs](https://nodejs.org/es/)
- [Sass](https://sass-lang.com)
- [yarn](https://yarnpkg.com/lang/en/)
- [git](https://github.com/)

### Pasos para su instlacion:
 
 - Pocicionarnos en una carpe de nuestra elccion para este ejemplo Documentos.
 - Clonar el repositorio [aqui](https://github.com/almagedon/grability-test)
 - Entrar en el repositorio creado
 - instalar los paquetes pertinentes por npm o yarn
 - por ultimo correr el servidor de nuesta aplicacion 

```
$ cd Documentos
$ git clone git@github.com:almagedon/grability-test.git
$ cd grability-test
$ npm install
$ npm run dev
```

### Arbol de directorios:
─ grability-test  
    ├── package.json  
    ├── README.md  
    ├── source  
    │   ├── assets // iconos utilizados para esta aplicacion  
    │   │   ├── icons  
    │   │   │   ├── circle.svg  
    │   │   │   ├── square.svg  
    │   │   │   └── triangle.svg  
    │   │   └── img  
    │   │       ├── book1.jpg  
    │   │       ├── book2.jpg  
    │   │       ├── btn_arrow_left.png  
    │   │       ├── btn_arrow_right.png  
    │   │       ├── btn-close.png  
    │   │       ├── btn-delete.png  
    │   │       ├── btn-favourites-default.png  
    │   │       ├── btn-favourites-primary.png  
    │   │       ├── characters.png  
    │   │       ├── favourites.png  
    │   │       ├── grability-logo.png  
    │   │       ├── link-arrow.png  
    │   │       ├── Marvel-logo.png  
    │   │       ├── search.png  
    │   │       ├── shopping-cart-primary.png  
    │   │       ├── svgExample.svg  
    │   │       └── workco-logo.svg  
    │   ├── index.html  
    │   ├── js  
    │   │   ├── actions  
    │   │   │   ├── appBarSearch.js  
    │   │   │   ├── app.js  
    │   │   │   └── appModalData.js  
    │   │   ├── api  
    │   │   │   └── index.js //archivo con el que se hacen las peticiones a la api  
    │   │   ├── components // componentes que pertenecen a las vistas  
    │   │   │   ├── Containers  
    │   │   │   │   ├── HeroCard.jsx // componente donde se resenta cada heroe  
    │   │   │   │   ├── HeroCard.scss  
    │   │   │   │   ├── HeroFavorites.jsx // componentes para la seccion de favoritos  
    │   │   │   │   ├── HeroModal.jsx // modal para agregar a favoritos  
    │   │   │   │   ├── HeroModal.scss  
    │   │   │   │   ├── HeroMoreContiner.jsx  
    │   │   │   │   ├── HeroMoreContiner.scss  
    │   │   │   │   └── NavSortCharacters.js // seaccion para  ordenar  
    │   │   │   └── Global  
    │   │   │       ├── containers  
    │   │   │       │   └── Search.jsx  
    │   │   │       ├── Footer.jsx // footer  
    │   │   │       ├── Icon.jsx  
    │   │   │       └── NavBar.jsx // navbar y buscador  
    │   │   ├── dev  
    │   │   │   ├── logger-exports.js  
    │   │   │   └── logger.js  
    │   │   ├── index.js  
    │   │   ├── reducers  
    │   │   │   ├── app.js  
    │   │   │   └── index.js  
    │   │   └── views  
    │   │       ├── About  
    │   │       │   └── index.jsx  
    │   │       ├── App  
    │   │       │   └── index.jsx  
    │   │       ├── Dashboard // vista principal  
    │   │       │   ├── index.jsx  
    │   │       │   └── styles.scss  
    │   │       └── NotFound  
    │   │           └── index.jsx  
    │   └── scss // scss base  
    │       ├── app.scss  
    │       └── base  
    │           ├── _app.scss  
    │           ├── _breakpoints.scss  
    │           └── _normalize.scss  
    ├── webpack.config.js  
    └── yarn.lock  
