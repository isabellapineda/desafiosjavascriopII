	
var n=0;
var acumulador_pro=0;
var contador_apro=0;

function calcular_nota_final(){

	var desafio1 = parseFloat(document.procesamiento.desafio1.value);
	var desafio2 = parseFloat(document.procesamiento.desafio2.value);
	var desafio3 = parseFloat(document.procesamiento.desafio3.value);
	var desafio4 = parseFloat(document.procesamiento.desafio4.value);

	return ((desafio1+desafio2+desafio3+desafio4)/4) ;
}

function aprobacion_final(){
   n++;
	var examen = parseFloat(document.procesamiento.examen.value);
	var mensaje;
	var calculo = calcular_nota_final();
	 

	if (examen>=0)
		acumulador_pro+=examen;
	
	if ((examen>=80 && examen<=100) && (calculo>=80)){

		 contador_apro++;
		 return mensaje =" Aprobado :D ";
		 
	}else  return mensaje =" Reprobado :C ";
	console.log(calculo);
	console.log(calculo);


}

function aprobacion(){
	var agregar;
	var apro = aprobacion_final()
	var calculo = calcular_nota_final()


	agregar = (apro+=calculo);
	console.log(calculo)
	console.log(apro)
	document.procesamiento.Promedio.value=agregar;
} 


function agrega(){

	var alumnos = document.getElementById("Alumnos")

	alumnos.innerHTML += n+"  "+"Alumno = "+document.procesamiento.nombre.value+"<br>"+
	"Nota desafio1 = "+document.procesamiento.desafio1.value+"<br>"+
	"Nota desafio2 = "+document.procesamiento.desafio2.value+"<br>"+
	"Nota desafio3 = "+document.procesamiento.desafio3.value+"<br>"+
	"Nota examen = "+document.procesamiento.examen.value+"<br>"+
	" Promedio de la nota final = "+document.procesamiento.Promedio.value+"<br>"+"<br>"+"<br>";
	
	document.procesamiento.reset();
	promediar();
}

function promediar(){

	var Promedio1 = acumulador_pro/n;
	var cantidad_aprobados = contador_apro;
	var porcentaje = cantidad_aprobados/n*100
	
	    final=("Promedio de la Seccion en la nota de los examenes= "+Promedio1+"<br>"+
		"La cantidad de alumos aprobados es= "+contador_apro+"<br>"+
		"El porcentaje que reprecentan es de= "+porcentaje+"%"+"<br>"+"<br>");
	  
	    console.log(cantidad_aprobados);
	    var promedio=document.getElementById("promedio")
	    promedio.innerHTML=final;	
    
  }
//OJO LO DE VALIDAR QUE EL USUARIO NO PUEDA INGREAR (NUMEROS O LETRAS) SEGUN SEA EL CASO  SOLO ME FUNCIONO CON CHROME
//color al seleccional el input
function cambiarcolor(validar){
	var x = document.getElementById(validar);
	x.style.backgroundColor="#AAE8E1";
}
//funcion para validar que no este vacio, si es asi mostrara un mensaje
function validar(validar,div){
	let x = document.getElementById(validar);
	let y = document.getElementById(div);


	if(x.value==""){
		y.style.backgroundColor="red"
		y.style.display="block";
    
	}else{
		y.style.display="none";
		x.style.backgroundColor="white"
	}
}
//funcion para que el usuario solo ingrese numeros
function validarnumero(e){
	key = e.keyCode
	teclado = String.fromCharCode(key);

	numero = "1234567890" ;

	if(numero.indexOf(teclado)==-1){
		return false;
	}
		
}
//funcion para que el usuario solo ingrese letras
function validarnombre(e){
	key = e.keyCode;

	teclado = String.fromCharCode(key).toLowerCase();

	letras="abcdefjhijklmnñopqrstuvwxyz";
	if(letras.indexOf(teclado)==-1){
		return false;
	}


}
//validacion de rango
function validacionRango(valido,div){
	var x = document.getElementById(valido);
	var y = document.getElementById(div);

	if ((x.value<0) || (x.value>100)){
		y.style.backgroundColor = "#f54f16";
		y.style.display = "block";
		x.style.backgroundColor = "#f54f16";
	}else{
		y.style.display = "none"
		x.style.backgroundColor = "white";
	}
	
}





