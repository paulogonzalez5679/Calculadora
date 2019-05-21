
function rand(n)
{
    return(Math.floor(Math.random()*10+1))
}

var cambiar= new Array();
cambiar[0]= "foto1.jpg";
cambiar[1]= "foto2.jpg";
cambiar[2]= "foto3.jpg";
cambiar[3]= "foto4.jpg";
cambiar[4]= "foto5.jpg";
cambiar[5]= "foto6.jpg";
cambiar[6]= "foto7.jpg";
cambiar[7]= "foto8.jpg";
cambiar[8]= "foto9.jpg";
cambiar[9]= "foto10.jpg";




function random()
{
    var foto=document.getElementById("foto").src = cambiar[rand(10)-1];
    foto.src="foto"+num+".jpg"
}





var num=1;
function siguiente()
{
    num++;
    var foto=document.getElementById("foto")
    foto.src="foto"+num+".jpg"
    if(num>=10)
    {
        num=1;
    }
    var foto=document.getElementById("foto")
    foto.src="foto"+num+".jpg"
    
}
function atras()
{
    num--
    var foto=document.getElementById("foto")
    foto.src="foto"+num+".jpg"
    if(num<=1)
    {
        num=10;
        var foto=document.getElementById("foto")
        foto.src="foto"+num+".jpg"
    }
}