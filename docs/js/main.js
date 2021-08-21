// Calculadora

var pantalla = document.getElementById("pantalla");
var numero_pantalla = "0";
var numero_guardado = "";
var coma = 0;
var numero_espera = -1, result;
var inciar_numero = 1;
var signo = "";

//variables RETC
var digitos = 0;
var ultimo_numero;

function numeros(numero) {
  if (numero_guardado == "") {
    numero_guardado += numero;
    pantalla.innerHTML = numero_guardado;

    if (numero == "." && inciar_numero == 1) {
      pantalla.innerHTML = "0.";
      numero_guardado = "0.";
      coma = 1;
    }
    
  } else {
    if (numero == "." && coma == 0) {
      pantalla.innerHTML += numero;
      numero_guardado += numero;
      coma = 1;
    } else if (numero == "." && coma == 1) {
    } else {
      numero_guardado += numero;
      if(numero_espera != -1){
        pantalla.innerHTML = numero_espera + signo + numero_guardado;
      }else{
        pantalla.innerHTML = signo + numero_guardado;
      }
    }
  }
  inciar_numero = 0;
}

function operador(s) {
  if( signo == ""){
    numero_espera = pantalla.innerHTML;
    numero_guardado = "";
    signo = s;
    coma = 0;
    inciar_numero = 1;
    pantalla.innerHTML = numero_espera + signo;
  } 
}

function resultado() {
  numero_espera = parseFloat(numero_espera).toFixed(3);
  numero_guardado = parseFloat(numero_guardado).toFixed(3);
  var sol = numero_espera + signo + numero_guardado;

  total = eval(sol);
  // total = parseFloat(total).toFixed(6);
  pantalla.innerHTML = total;
  signo = "";
}

function limpiar() {
  numero_pantalla = "0";
  numero_guardado = "";
  coma = 0;
  numero_espera = -1;
  inciar_numero = 1;
  signo = "";
  pantalla.innerHTML = "0";
}

function retc() {
  digitos = pantalla.innerHTML.length; //coge la longitud del numero
  ultimo_numero = pantalla.innerHTML.substr(digitos - 1, digitos); //vemos cual es el ultimo numero
  digitos = pantalla.innerHTML.substr(0, digitos - 1);

  if (digitos == "") {
    digitos = 0;
  }
  if (numero_espera != "") {
    numero_guardado = digitos;
  }
  if (ultimo_numero == ".") {
    coma = 0;
  }
  pantalla.innerHTML = digitos;
}


//Funcionalidad radio-buttons
var radios = document.getElementsByName('radio_themes');

function radio_function(){
// radios.forEach(elem => elem.classList.add('display-none'));
  radios.forEach( function(elem) {
    elem.classList.add('display-none');
    if(elem.checked == true){
      elem.classList.remove('display-none');
      clase_body(elem.value);
    }
  } );
};

function clase_body(valor){
  var body = document.body.classList;
  if(valor == 'option1'){
    body.remove('tema_2','tema_3');
    body.add('tema_1');
  }else if(valor == 'option2'){
    body.remove('tema_1','tema_3');
    body.add('tema_2');
  }else{
    body.remove('tema_1','tema_2');
    body.add('tema_3');
  }
}

