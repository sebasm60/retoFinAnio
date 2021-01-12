'use strict';

let renault = new carro();
renault.setEstado("apagado");

let btnEncender = document.getElementById("btnEncender");
btnEncender.addEventListener('click', encendidoApagado);

let btnArrancar = document.getElementById("btnArrancar");
btnArrancar.addEventListener('click', arrancar);

let btnParadas = document.getElementById("btnParadas");
btnParadas.addEventListener('click', paradas);

function encendidoApagado() {

    let marcha = document.getElementById("marcha");
    let frenoDeMano = document.getElementById("frenoDeMano");

    renault.setMarcha(marcha.value);
    renault.setFrenoDeMano(frenoDeMano.value);

    if (renault.estado === "apagado") {
        renault.encenderApagado("encender");
    } else {
        renault.encenderApagado("apagar")
    }
}

function paradas() {
    renault.seleccionarDestino();
}

function arrancar() {

    let marcha = document.getElementById("marcha");
    let frenoDeMano = document.getElementById("frenoDeMano");
    let clutch = document.getElementById("clutch");
    let freno = document.getElementById("freno");

    renault.setMarcha(marcha.value);
    renault.setFrenoDeMano(frenoDeMano.value);
    renault.setClutch(clutch.value);
    renault.setFreno(freno.value);

    renault.arranque();
}

document.getElementById('contenedor').addEventListener('click', function(e) {

    const target = e.target

    if (target.classList.contains("btnDireccional")) {
        if (target.parentElement.classList.contains("container")) {
            target.parentElement.classList.add("yellow");
            target.parentElement.classList.remove("container");
            renault.setDireccionales(true);
        } else {
            target.parentElement.classList.add("container");
            target.parentElement.classList.remove("yellow");
            renault.setDireccionales(false);
        }
    }
    e.preventDefault();
});

document.addEventListener('keydown', () => {

    if (event.which === 76 || event.which === 82) {
        renault.realizarGiro();
    }
});