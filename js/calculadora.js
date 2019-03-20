
function addEvents(){
	var texto = document.getElementById("texto");
	var expr = /^(\d|-)?(\d|,)*\.?\d*$/;
	document.getElementById("suma").addEventListener("click", suma);
	document.getElementById("suma").setAttribute("onclick", "comprobar3(text)");
	document.getElementById("resta").addEventListener("click", resta);
	document.getElementById("resta").setAttribute("onclick", "comprobar2(text)");
	document.getElementById("multi").addEventListener("click", multi);
	document.getElementById("multi").setAttribute("onclick", "comprobar1(text)");
	document.getElementById("divi").addEventListener("click", divi);
	document.getElementById("divi").setAttribute("onclick", "comprobar1(text)");
	document.getElementById("resi").addEventListener("click", resi);
	document.getElementById("resi").setAttribute("onclick", "comprobar4(text)");
	document.getElementById("ele2").addEventListener("click", ele2);
	document.getElementById("ele3").addEventListener("click", ele3);
	document.getElementById("inver").addEventListener("click", inver);
	document.getElementById("raiz2").addEventListener("click", raiz2);
	document.getElementById("raiz3").addEventListener("click", raiz3);
	document.getElementById("igual").addEventListener("click", igual);
	document.getElementById("delet").addEventListener("click", delet);
	document.getElementById("uno").addEventListener("click", uno);
	document.getElementById("dos").addEventListener("click", dos);
	document.getElementById("tres").addEventListener("click", tres);
	document.getElementById("cuatro").addEventListener("click", cuatro);
	document.getElementById("cinco").addEventListener("click", cinco);
	document.getElementById("seis").addEventListener("click", seis);
	document.getElementById("siete").addEventListener("click", siete);
	document.getElementById("ocho").addEventListener("click", ocho);
	document.getElementById("nueve").addEventListener("click", nueve);
	document.getElementById("punto").addEventListener("click", punto);
	document.getElementById("punto").setAttribute("onclick", "comprobar1(text)");
	document.getElementById("cero").addEventListener("click", cero);
	document.getElementById("mas_menos").addEventListener("click", mas_menos);
	document.getElementById("delet_all").addEventListener("click", delet_all);

	function uno(){
		texto.value = texto.value + "1";
	}
	function dos(){
		texto.value = texto.value + "2";
	}
	function tres(){
		texto.value = texto.value + "3";
	}
	function cuatro(){
		texto.value = texto.value + "4";
	}
	function cinco(){
		texto.value = texto.value + "5";
	}
	function seis(){
		texto.value = texto.value + "6";
	}
	function siete(){
		texto.value = texto.value + "7";
	}
	function ocho(){
		texto.value = texto.value + "8";
	}
	function nueve(){
		texto.value = texto.value + "9";
	}
	function cero(){
		texto.value = texto.value + "0";
	}

	function inver(){
		if (texto.value === "" || texto.value.replace(/ /g, '') === '') {
			texto.setAttribute("placeholder","Ingrese operación o número");
			return false;
		}
		if (!expr.test(texto.value)) {
			texto.value="";
	        texto.setAttribute("placeholder","Solo números, no signos");
		}else{
			var res = eval(texto.value)
			var res2 = Math.pow(res,-1);
			texto.value = res2;
		}

		if (texto.value === "NaN") {
			texto.value="";
			texto.setAttribute("placeholder","Ingrese operación o número");
		}
	}

	function ele2(){
		if (texto.value === "" || texto.value.replace(/ /g, '') === '') {
			texto.setAttribute("placeholder","Ingrese operación o número");
			return false;
		}
		if (!expr.test(texto.value)) {
			texto.value="";
	        texto.setAttribute("placeholder","Solo números, no signos");
		}else{
			var res = eval(texto.value)
			var res2 = Math.pow(res,2);
			texto.value = res2;
		}

		if (texto.value === "NaN") {
			texto.value="";
			texto.setAttribute("placeholder","Ingrese operación o número");
		}
	}

	function ele3(){
		if (texto.value === "" || texto.value.replace(/ /g, '') === '') {
			texto.setAttribute("placeholder","Ingrese operación o número");
			return false;
		}
		if (!expr.test(texto.value)) {
			texto.value="";
	        texto.setAttribute("placeholder","Solo números, no signos");
		}else{
			var res = eval(texto.value)
			var res2 = Math.pow(res,3);
			texto.value = res2;
		}

		if (texto.value === "NaN") {
			texto.value="";
			texto.setAttribute("placeholder","Ingrese operación o número");
		}
	}

	function raiz2(){
		if (texto.value === "" || texto.value.replace(/ /g, '') === '') {
			texto.setAttribute("placeholder","Ingrese operación o número");
			return false;
		}
		if (texto.value <0) {
			texto.value="";
			texto.setAttribute("placeholder","No se permite números negativos");
			return false;
		}
		if (!expr.test(texto.value)) {
			texto.value="";
	        texto.setAttribute("placeholder","Solo números, no signos");
		}else{
			var res = eval(texto.value)
			var res2 = Math.pow(res,1/2);
			texto.value = res2;
		}

		if (texto.value === "NaN") {
			texto.value="";
			texto.setAttribute("placeholder","Ingrese operación o número");
		}
	}

	function raiz3(){
		if (texto.value === "" || texto.value.replace(/ /g, '') === '') {
			texto.setAttribute("placeholder","Ingrese operación o número");
			return false;
		}
		if (texto.value <0) {
			texto.value="";
			texto.setAttribute("placeholder","No se permite números negativos");
			return false;
		}
		if (!expr.test(texto.value)) {
			texto.value="";
	        texto.setAttribute("placeholder","Solo números, no signos");
		}else{
			var res = eval(texto.value)
			var res2 = Math.pow(res,1/3);
			texto.value = res2;
		}
		if (texto.value === "NaN") {
			texto.value="";
			texto.setAttribute("placeholder","Ingrese operación o número");
		}
	}

	function mas_menos(){
		if (texto.value === "" || texto.value.replace(/ /g, '') === '') {
			texto.setAttribute("placeholder","Ingrese operación o número");
			return false;
		}
	    var res = texto.value * -1;
	    texto.value=res;
	}

	function delet(){

	    var anterior=texto.value;

	    var nuevovalor=anterior.substring(0,anterior.length-1);

	    texto.value=nuevovalor;
	}

	function delet_all(){
	    texto.value="";
	    texto.setAttribute("placeholder","")
	}

	function igual(){
		

		try{
			if (texto.value === "-") {
			texto.value="";
	        texto.setAttribute("placeholder","Ingrese una operación");
		}
		if (texto.value === "+") {
			texto.value="";
	        texto.setAttribute("placeholder","Ingrese una operación");
		}
		var respuesta = eval(texto.value);

		if(respuesta=="Infinity"){
			texto.value="";
	        texto.setAttribute("placeholder","No divisible entre cero");

	    }else{
	        texto.value=respuesta;
	    }
	    if (respuesta== null) {
			texto.value="";
	        texto.setAttribute("placeholder","Ingrese una operación");
		}
		}catch(e){
			texto.value="";
	        texto.setAttribute("placeholder","Syntax ERROR");
		}

	}
}



function comprobar1(num){ 
//var anterior = document.fo.valores.value;
var anterior = texto.value;
if(anterior==""){
texto.value="";
}else{    
    texto.value=anterior+num;
    esto=texto.value;

    record=0; 
    igual=1; 
    var letraRecord 
    var b=0 
    var letra="" 

    for (a=1;a<esto.length;a++){      
    if (esto.charAt(a)=="*" || esto.charAt(a)=="/" || esto.charAt(a)=="."){ 
    igual=igual+1; 
    letra=esto.charAt(a);
    }else{ 
         if(igual>record){record=igual;letraRecord=letra} 
            igual=1 
         } 
         b=a 
    }
    
    if(igual>record){
      record=igual;
      letraRecord=letra;
    } 

    if (record>2){
        var anterior = esto;
        var nuevovalor = anterior.substring(0, anterior.length-1);
        texto.value=nuevovalor;
        record=0;b=0;igual=1;letra="";letraRecord="";
    }     
}
}

function comprobar2(num){ 
//var anterior = document.fo.valores.value;
var anterior = texto.value;
if(anterior=="-"){
texto.value="";
}else{    
    texto.value=anterior+num;
    esto=texto.value;

    record=0; 
    igual=1; 
    var letraRecord 
    var b=0 
    var letra="" 

    for (a=1;a<esto.length;a++){      
    if (esto.charAt(a)=="*" || esto.charAt(a)=="/" || esto.charAt(a)=="." || esto.charAt(a)=="-"){ 
    igual=igual+1; 
    letra=esto.charAt(a);
    }else{ 
         if(igual>record){record=igual;letraRecord=letra} 
            igual=1 
         } 
         b=a 
    }
    
    if(igual>record){
      record=igual;
      letraRecord=letra;
    } 

    if (record>2){
        var anterior = esto;
        var nuevovalor = anterior.substring(0, anterior.length-1);
        texto.value=nuevovalor;
        record=0;b=0;igual=1;letra="";letraRecord="";
    }     
}
}

function comprobar3(num){ 
//var anterior = document.fo.valores.value;
var anterior = texto.value;
if(anterior=="+"){
texto.value="";
}else{    
    texto.value=anterior+num;
    esto=texto.value;

    record=0; 
    igual=1; 
    var letraRecord 
    var b=0 
    var letra="" 

    for (a=1;a<esto.length;a++){      
    if (esto.charAt(a)=="*" || esto.charAt(a)=="/" || esto.charAt(a)=="." || esto.charAt(a)=="+"){ 
    igual=igual+1; 
    letra=esto.charAt(a);
    }else{ 
         if(igual>record){record=igual;letraRecord=letra} 
            igual=1 
         } 
         b=a 
    }
    
    if(igual>record){
      record=igual;
      letraRecord=letra;
    } 

    if (record>2){
        var anterior = esto;
        var nuevovalor = anterior.substring(0, anterior.length-1);
        texto.value=nuevovalor;
        record=0;b=0;igual=1;letra="";letraRecord="";
    }     
}
}
function comprobar4(num){ 
//var anterior = document.fo.valores.value;
var anterior = texto.value;
if(anterior==""){
texto.value="";
}else{    
    texto.value=anterior+num;
    esto=texto.value;

    record=0; 
    igual=1; 
    var letraRecord 
    var b=0 
    var letra="" 

    for (a=1;a<esto.length;a++){      
    if (esto.charAt(a)=="*" || esto.charAt(a)=="/" || esto.charAt(a)=="." || esto.charAt(a)=="%"){ 
    igual=igual+1; 
    letra=esto.charAt(a);
    }else{ 
         if(igual>record){record=igual;letraRecord=letra} 
            igual=1 
         } 
         b=a 
    }
    
    if(igual>record){
      record=igual;
      letraRecord=letra;
    } 

    if (record>2){
        var anterior = esto;
        var nuevovalor = anterior.substring(0, anterior.length-1);
        texto.value=nuevovalor;
        record=0;b=0;igual=1;letra="";letraRecord="";
    }     
}
}


window.onload = addEvents;