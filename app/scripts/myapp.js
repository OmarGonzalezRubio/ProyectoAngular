'use strict';

var wapp=angular.module("miPrimeraWebApp",[]);
wapp.controller('controladorBasico',['$scope',
function controladorBasico($scope){
  var myDogs=[{nombre:"Juan",edad:12, foto:'perro1.jpg'}, 
              {nombre:"capitan",edad:10, foto:'perrp2.jpg'}, 
              {nombre:"firulais",edad:3, foto:'perro3.jpg'}
];
$scope.superdogs=myDogs;
}
]);



/* esto es del curso 1proyecto 2
'use strict';
 // esta funcion se ejecuta cuando el DOM ya esta construido 
window.onload = function() { 
// get the h1 DOM item 
  var tituloPrincipal = document.getElementById("frases"); 
  // ponemos aqui un punto de parada 
  debugger; 
var txt;
   for(var i = 0; i < 5; i++){ 
   // creamos un nuevo nodo html de tipo h2
    txt = document.createElement("h2"); 
    txt.innerHTML="texto numero " +(i+1);
    // imprimimos el resultado enla consola  
     console.log(txt.innerHTML);
     tituloPrincipal.appendChild(txt); } 
 };*/
