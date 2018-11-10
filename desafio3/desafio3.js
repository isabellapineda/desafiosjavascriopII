//dias del mes
function dia(id){
	var d=document.getElementById(id);
	if (d==undefined) {
		console.log("no se encondro el ID")
	}else{
	for (var i=1; i <= 30; i++){
		d.innerHTML+="<option>"+i+"</option>";
		}
	}
}
//años
function año(id){
	var a=document.getElementById(id)
	if (a==undefined){
		console.log("No encontro el Id")
	}else{
		for (var i = 1950; i <=2018; i++) {
			a.innerHTML+="<option>"+i+"</option>";
		}
	}

}
document.form1.registrar.onclick = procesar;
function procesar(){
    alert(this.value);
    if(validar()){
        alert("Se proceso exitosamente")
    }
}
//(No entiendo porque me dice que el style es undefined
//me funciona perfectamente con un alert pero cuando quiero mostrar el div 
//me dice Uncaught TypeError: Cannot read property 'style' of undefined)
// document.form1.usuario.onblur = function(){
//     if(this.value.length>=1 && this.value.length<4){
//     	document.form1.campo1.style.display = "block";
//     }
// }

function validarUsuario(u,div){
	var a = document.getElementById(u).value;
	var b = document.getElementById(div);

	if(a.length>=1 && a.length<4)
	{	
		b.style.display="block";
		return false;
	}else
		b.style.display="none";
		 return true;
}

function claves(c1,c2){
	if (!c1.value==c2.value){
		alert("las claves deben ser identicas");
		return false;
	}else
		return true;
		alert("son iguaeles");
}
//validar usuario
function validar(){

    if(!esta_vacio(document.form1.nombre,"Debe escribir el nombre"))
    	if(!esta_vacio(document.form1.cedula,"Debe escribir la cedula"))
    		if (!esta_vacio(document.form1.correo,"Debe escribir el correo"))
    			if(!esta_vacio(document.form1.telefono,"Debe ingresar el numero de telefono"))
    				if(!esta_vacio(document.form1.usuario,"Debe ingresar el usuario"))
    					if(!esta_vacio(document.form1.clave,"Debe ingresar la clave"))
    						if (!esta_vacio(document.form1.conficlave,"Debe confirmar su clave"))
        						if(validarcorreo(document.form1.correo))
             						if(validar_select(document.form1.dia_na))
             							if (!claves(document.form1.clave,document.form1.conficlave));
             								
                        						return true;
                    						else
                        						return false;
        
}

// //validar usuario
// function validarUsuario(u,div){
// 	var a = document.getElementById(u).value;
// 	var b = document.getElementById(div).value;

// 	if(a.length>=1 && a.length<4)
// 	{	
// 		b.style.display="block";
// 		b.innerHTML="El usuario debe tener mas de 4 caracteres";
// 		return false
// 	}else
// 		b.style.display="none";
// 		 return true

// }
// //vaildar clave
// function validarClave(c,div){
// 	var a = document.getElementById(c).value;
// 	var b = document.getElementById(div);

// 	if (a.length>=1 && a.length<4)
// 	{	
// 	 	b.innerHTML="la clave debe tener al menos 4 caracteres";
// 	 	b.style.display="block"
// 	 	alert("la clave debe tener al menos 4 caracteres")
	 		
// 	} 



