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