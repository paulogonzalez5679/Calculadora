function camposNoVacios(){
    var cedula, nombre, apellido, direccion, phone, fechaNac,email;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    direccion = document.getElementById("direccion").value;
    phone = document.getElementById("phone").value;
    fechaNac = document.getElementById("fechaNac").value;
    email = document.getElementById("email").value;

    if(nombre =="" || apellido =="" || direccion =="" || phone =="" || fechaNac =="" || email == "" ){
        alert("EXISTEN CAMPOS VACIOS");
    return false;
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
function ValidarFecha(fechaNac){
    object=document.getElementById(fechaNac);
    var Fecha = document.getElementById('fechaNac').value;
    var Mensaje = '';
    document.getElementById('Mensaje').className = '';
    
  
    if(Fecha.length == 10){

        var Anio = Fecha.substr(4, 4); 
        var Mes = parseFloat(Fecha.substr(2, 2)) - 1; 
        var Dia = Fecha.substr(0, 2); 
        var Fecha = new Date(Anio,"/", Mes,"/",Dia);
        if((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia))
        {
             object.style.color="#000";
             return; 
        }
        else
        {
            object.style.color="#f00";
        }
    }
    document.getElementById('Mensaje').innerHTML = Mensaje;
}






function soloNumeros(elemento){
    var key=elemento.keyCode || elemento.which; ;
    
    key=elemento.keyCode || elemento.which;

    teclado=String.fromCharCode(key).toLowerCase();

    numeros="0123456789/";

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




function ValidarMail(email){

	object=document.getElementById(email);
	valueForm=object.value;
 
	
    var patron=/^\w+([\.-]{3,8}?\w+)*@(?:est.ups.edu.ec|ups.edu.ec|)$/;
    
	if(valueForm.search(patron)==0)
	{
		
		
		object.style.color="#000";
		return;
	}
	
	
    object.style.color="#f00";
    
}



    
function validarCedula(cedula) {
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
          total += parseInt(cad.charAt(i)); 
        }
      }

      total = total % 10 ? 10 - total % 10 : 0;

      if (cad.charAt(longitud-1) == total) {
       object.style.color="#000";
       
       return ;
       
      }else{

        object.style.color="#f00";
        
      }
    }
  }
