
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