var data = 0;
var n1 = "";
var n2 = "";
var nuevoNum = "blank";
var opvalue = "";

function pantalla(pantallanumber) 
{
document.calculator.answer.value = pantallanumber;
}

function borrar() 
{
data = 0;
document.calculator.mem.value = "";
}

function borrado() 
{
n1 = "";
n2 = "";
nuevoNum = "blank";
pantalla("");
}

function borradoMemoria()
{
n2 = "";
nuevoNum = "yes";
pantalla("");
}

function setNum(answer) 
{
   if(answer == ".")
   {
      Number = document.calculator.answer.value;
      if(Number.indexOf(".") != -1) 
      {
      answer = "";
      }
   }
   if(nuevoNum == "yes") 
   {
      n2 += answer;
      pantalla(n2);
   }
   else 
   {
      if(nuevoNum == "blank")
      {
         n1 = answer;
         n2 = "";
         nuevoNum = "no";
      }
      else 
      {
         n1 += answer;
      }
      pantalla(n1);
   }
}

function suma(x) 
{
   if(x == 1) igual();
   if(n2 != "")
   {
      n1 = parseFloat(n1) + parseFloat(n2);
   }
   nuevoNum = "yes";
   opvalue = '+';
   pantalla(n1);
}

function resta(x) 
{
   if(x == 1) igual();
   if(n2 != "") 
   {
       n1 = parseFloat(n1) - parseFloat(n2);
   }
   nuevoNum = "yes";
   opvalue = '-';
   pantalla(n1);
}

function multi(x) 
{
   if(x == 1) igual();
   if(n2 != "")
   {
     n1 = parseFloat(n1) * parseFloat(n2);
   }
   nuevoNum = "yes";
   opvalue = '*';
   pantalla(n1);
}

function division(x) 
{
   if(x == 1) igual();
   if(n2 != "")
   {
      n1 = parseFloat(n1) / parseFloat(n2);
   }
   nuevoNum = "yes";
   opvalue = '/';
   pantalla(n1);
}
function raiz()
{
   n1 = Math.sqrt(n1);
   nuevoNum = "blank";
   pantalla(n1);
}
function porcentaje() 
{
   if(nuevoNum != "blank") 
   {
      n2 *= .01;
      nuevoNum = "blank";
      pantalla(n2);
   }
}

function divUno() 
{
   n1 = 1/n1;
   nuevoNum = "blank";
   pantalla(n1);
}
function negativo() 
{
   n1 = parseFloat(-n1);
   nuevoNum = "no";
   pantalla(n1);
}
function igual() {
if(opvalue == '+') suma(0);
if(opvalue == '-') resta(0);
if(opvalue == '*') multi(0);
if(opvalue == '/') division(0);
if(opvalue == '√') raiz(0);
if(opvalue == '%') porcentaje(0);
if(opvalue == '1/x') divUno(0);
if(opvalue == '+/-') negativo(0);
n2 = "";
opvalue = "";
}
