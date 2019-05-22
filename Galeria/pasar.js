var imagenes = ['../imagenes/foto1.jpg',
'../imagenes/foto2.jpg','../imagenes/foto3.jpg',
'../imagenes/foto4.jpg','../imagenes/foto5.jpg',
'../imagenes/foto6.jpg','../imagenes/foto7.jpg',
'../imagenes/foto8.jpg','../imagenes/foto9.jpg',
'../imagenes/foto10.jpg']

cont=0;
var nuevo = 0;


    function cambio(contenedor) {
   
        var m = imagenes.length;

	    for(var i= 0;i<5;i++){
            aleatorio = Math.floor(Math.random() * m--);
            nuevo =nuevo+","+aleatorio;
        }
       
    }
    
    document.addEventListener("DOMContentLoaded",() =>{
       let contenedor = document.querySelector('.contenedor');
    })

  
   contmax=0;
   contmin=0;

   function next(){
        if(contmax<10){
            contmax=contmax+2;
            document.getElementById('imagen').src =imagenes[nuevo[contmax]];
        }
        
         
         
 
    }


   function prev(){
        if(contmax > 0){
            contmax=contmax-2;
            document.getElementById('imagen').src =imagenes[nuevo[contmax]];
        }
        
       
    } 
   