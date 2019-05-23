/*
function validarCamposObligatorios(){
    var cedula, nombre, apellido, direccion, phone, fechaNac,email;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    direccion = document.getElementById("direccion").value;
    phone = document.getElementById("phone").value;
    fechaNac = document.getElementById("fechaNac").value;
    email = document.getElementById("email").value;
    if(nombre =="" || apellido =="" || direccion =="" || phone =="" || fechaNac =="" || email == "" ){
        alert("Todos los campos son obligatorios");
    return false;
    }
}
*/


function validarCamposObligatorios(){

    var bandera = false
    

    for(var i = 0; i < document.forms[0].length; i++){
        var elemento = document.forms[0].elements[i]
        if(elemento.value.trim() == ''){
            bandera = true;
            if(elemento.id == 'cedula')
            {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeCedula").innerHTML = ('cedula obligatoria')
            }
            if(elemento.id == 'nombre')
            {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeNombres").innerHTML = ('nombres obligatorios')
            }
            if(elemento.id == 'apellido')
            {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeApellidos").innerHTML = ('apellidos obligatorios')
            }
            if(elemento.id == 'direccion')
            {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeDireccion").innerHTML = ('direccion obligatoria')
            }
            if(elemento.id == 'phone')
            {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeTelefono").innerHTML = ('telefono obligatorio')
            }
            if(elemento.id == 'fechaNac')
            {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeFecha").innerHTML = ('fecha de nacimiento obligatorio')
            }
            if(elemento.id == 'email')
            {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeCorreo").innerHTML = ('correo obligatorio')
            }
        }
    }

    if(bandera)
    {
        alert('Llenar todos los campos correctamente')
        return false
    }else{
        return true
    }

} 





function sololetras(elemento) {
    key=elemento.keyCode || elemento.which;

    teclado=String.fromCharCode(key).toLowerCase();

    letras="qwertyuiopasdfghjklñzxcvbnm ";

    especiales="8-37-38-46-164";

    teclado_especial=false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
            break;
        }
    }

    if(letras.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
}

//CONTROL DE DOS PALABRAS


function dosPalabras(e) { 
    tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; //Tecla de retroceso (para poder borrar) 
    // dejar la línea de patron que se necesite y borrar el resto 
    patron =/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])$/; // Solo acepta letras 
    //patron = /\d/; // Solo acepta números 
    //patron = /\w/; // Acepta números y letras 
    //patron = /\D/; // No acepta números 
    // 
    te = String.fromCharCode(tecla); 
    return patron.test(te); 
    } 


/*
    
    
    //key=nombre.keyCode || nombre.which;
    var m = document.getElementById("nombre").value;
    teclado=String.fromCharCode(key).toLowerCase();
    var expreg = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])$/;
  
    if(expreg.test(m))
      alert("La matrícula es correcta");
    else
      alert("Solo puede ingresar dos palabras");
}
/*
function dosPalabras(elemento){
    
    key=elemento.keyCode || elemento.which;
    teclado=String.fromCharCode(key).toLowerCase();
    letras="qwertyuiopasdfghjklñzxcvbnm ";
    especiales="8-37-38-46-164";
    teclado_especial=false;
    
 
    // Patron palabra espacio palabra
    
    var patron= /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])$/;
	if(valueForm.search(patron)==0)
	{
		//Mail correcto
		
		object.style.color="#000";
		return;
	}
	//Mail incorrecto
	
    object.style.color="#f00";
    
}
*/

function ValidarFecha(fechaNac){
    object=document.getElementById(fechaNac);
    // Almacenamos el valor digitado en TxtFecha
    var Fecha = document.getElementById('fechaNac').value;
    var Mensaje = '';
    document.getElementById('Mensaje').className = '';
    
    // Si la fecha está completa comenzamos la validación
    if(Fecha.length == 8){

        var Anio = Fecha.substr(4, 4); // Extraemos en año
        var Mes = parseFloat(Fecha.substr(2, 2)) - 1; // Extraemos el mes
        var Dia = Fecha.substr(0, 2); // Extraemos el día
    
     //var Anio = Fecha.substr(0, 4); // Extraemos en año
     //var Mes = parseFloat(Fecha.substr(4, 2)) - 1; // Extraemos el mes
     //var Dia = Fecha.substr(6, 2); // Extraemos el día
     
     // Con la función Date() de javascript evaluamos si la fecha existe
     var VFecha = new Date(Anio, Mes, Dia);
     
     // Si las partes de la fecha concuerdan con las que digitamos, es correcta
     if((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia)){
        //Mensaje = 'Fecha correcta';
        //document.getElementById('Mensaje').className = 'Mensaje1';

        object.style.color="#000";
        return; 
     }
     else{

        object.style.color="#f00";

     //Mensaje = 'Fecha incorrecta';
     //document.getElementById('Mensaje').className = 'Mensaje';
     }

     /*
    //if(Anio > 2019){
        Mensaje = 'Año incorrecto';
        document.getElementById('Mensaje').className = 'Mensaje';
     }
    // if(Mes > 12){
        Mensaje = 'Mes incorrecto';
        document.getElementById('Mensaje').className = 'Mensaje';
     }
    // if(Dia >31){
        Mensaje = 'Dia incorrecto';
        document.getElementById('Mensaje').className = 'Mensaje';
     }
     */
    }
    
    // Mostramos el mesaje
    document.getElementById('Mensaje').innerHTML = Mensaje;
}




//VALIDACION SOLO NUMEROS  


function soloNumeros(elemento){
    var key=elemento.keyCode || elemento.which; ;
    
    key=elemento.keyCode || elemento.which;

    teclado=String.fromCharCode(key).toLowerCase();

    numeros="0123456789 ";

    especiales=false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
            break;
        }
    }
    if(numeros.indexOf(teclado)==-1 && !especiales){
        return false;
    }

}



//Correo Institucional UPS

function ValidarMail(email){
	//Creamos un objeto 
	object=document.getElementById(email);
	valueForm=object.value;
 
	// Patron para el correo
    var patron=/^\w+([\.-]{3,8}?\w+)*@(?:est.ups.edu.ec|ups.edu.ec|)$/;
    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	if(valueForm.search(patron)==0)
	{
		//Mail correcto
		
		object.style.color="#000";
		return;
	}
	//Mail incorrecto
	
    object.style.color="#f00";
    
}


//FUNCION VALIDAR CEDULA ECUADOR 

    
function cedulaEC(cedula) {
    object=document.getElementById(cedula);
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10){
      for(i = 0; i < longcheck; i++){
        if (i%2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
        }
      }

      total = total % 10 ? 10 - total % 10 : 0;

      if (cad.charAt(longitud-1) == total) {
       // document.getElementById("salida").innerHTML = ("Cedula Válida");
       object.style.color="#000"; 
       return;

      }else{

        object.style.color="#f00";
      }
    }
  }

