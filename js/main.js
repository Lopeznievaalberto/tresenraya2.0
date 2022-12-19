
const cuadrado_btn = document.querySelectorAll(".cuadrado");
const info = document.getElementById("juego-info");
const juego_btn = document.getElementById("juego-boton");
let i = 1;
const jBtn_e = "pointer-events:initial;opacity:initial;",
    jBtn_d = "pointer-events:none;opacity:40%;";
let state = false;







let matrizganadora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


comprobar = () => {
    juego_btn.style.cssText = jBtn_d;
    for (let j = 0; j < matrizganadora.length; j++) {
        if (cuadrado_btn[matrizganadora[j][0]].innerHTML === "X" && cuadrado_btn[matrizganadora[j][1]].innerHTML === "X"
            && cuadrado_btn[matrizganadora[j][2]].innerHTML === "X") {
            info.innerHTML = '"X" Gana';
            state = true;
            deshabilitarCasillas();
        } else if (cuadrado_btn[matrizganadora[j][0]].innerHTML === "O" && cuadrado_btn[matrizganadora[j][1]].innerHTML === "O"
            && cuadrado_btn[matrizganadora[j][2]].innerHTML === "O") {
            info.innerHTML = '"O" Gana';
            state = true;
            deshabilitarCasillas();
        }
    }
    if (cuadrado_btn[0].innerHTML != "" && cuadrado_btn[1].innerHTML != "" && cuadrado_btn[2].innerHTML != ""
        && cuadrado_btn[3].innerHTML !== "" && cuadrado_btn[4].innerHTML != "" && cuadrado_btn[5].innerHTML != ""
        && cuadrado_btn[6].innerHTML != "" && cuadrado_btn[7].innerHTML != "" && cuadrado_btn[8].innerHTML != ""
        && state == false) {
        info.innerHTML = "Empate";
        deshabilitarCasillas(false);
    }

}

/* funcion que va recorriendo las casillas y las deja "marcadas" */
deshabilitarCasillas = (y) => {
    (y == false) ? i = Math.floor(Math.random() * (3 - 1)) + 1 : 0;
    for (let n_boton = 0; n_boton < cuadrado_btn.length; n_boton++) {
        cuadrado_btn[n_boton].style.setProperty("pointer-events", "none");
    }
    juego_btn.style.cssText = jBtn_e;
}


empieza = () => {
    juego_btn.style.cssText = jBtn_d;
    let c1;
    (i % 2 == 0) ? c1 = "X" : c1 = "O";
    info.innerHTML = `Presione cualquier cuadrado para iniciar: <b>"${c1}"</b> empieza.`;
}

/* bucle forEach que recorre la matriz cuadrado_btn y establece el evento onclick de cada elemento
a una función que establece el inner del elemento de información, establece el HTML interno de
el elemento actual a "X" u "O" dependiendo del valor de i, llamando a la función comprobar, establece
la propiedad pointer-events del elemento actual hasta "none"(ninguno)*/
cuadrado_btn.forEach(boton => {
    boton.onclick = () => {
        info.innerHTML = "";
        (i % 2 == 0) ? boton.innerHTML = "X" : boton.innerHTML = "O";
        comprobar();
        boton.style.setProperty("pointer-events", "none");
        i++;//incrementa ahora i, y establece i en 1 si es igual a 3
        (i == 3) ? i = 1 : 0;
    }
});

/* Establece el evento onclick del elemento juego_btn en una función que establece los eventos de puntero
de cada elemento en la matriz cuadrado_btn hasta "initial", estp hace que innerHTML sea "rellenado"
establece el HTML interno de cada elemento
en la matriz cuadrado_btn a una cadena vacía, establece la variable de estado en falso y llama al
Función nEmpieza. */
juego_btn.onclick = () => {
    for (let n_boton = 0; n_boton < cuadrado_btn.length; n_boton++) {
        cuadrado_btn[n_boton].style.cssText = "pointer-events:initial;";
        cuadrado_btn[n_boton].innerHTML = "";
        state = false;
    }
    empieza();
}

empieza();










var contador_selecciones = 0;
var ganador = 0; //0 1 2 3
var score1 = 0;
var score2 = 0;

function puntaje() {
    if (ganador === 1) {
        score1 += 1;
        winPlayer1 = (score1) => {
            for (var i = 1; i < 10; i++) {
                let string = "button_active" + i;
                document.getElementById(string).disabled = true
            };
        };
        contador_selecciones = 0;
    } else if (ganador === 2) {
        score2 += 1;
        winPlayer2 = (score2) => {
            for (var i = 1; i < 10; i++) {
                let string = "button_active" + i;
                document.getElementById(string).disabled = true;
            }
        };
        contador_selecciones = 0;
    } else if (ganador === 3) {
        contador_selecciones = 0;
    }
}








var nombre = sessionStorage.getItem("nombre");
var jugador = sessionStorage.getItem("jugador");


mostrarnombre = () => {
    document.write(nombre);
}

mostrarjugador = () => {
    document.write(jugador);
}










/*
const entrar = () => {
    Math.floor(Math.random()*2) ? "nombre":"jugador"
    let jugador1 = document.getElementById("nombre").value;
    let jugador2 = document.getElementById("jugador").value;
    if(jugador1&&jugador2){
         sessionStorage.setItem("nombre", jugador1)
        sessionStorage.setItem("jugador", jugador2)
        window.open('../html/index.html');
    } console.log("Escribe nombre")
};*/
