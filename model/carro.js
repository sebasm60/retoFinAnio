'use strict';

class carro {

    constructor(marcha, frenoDeMano, clutch, freno, direccionales, estado, paradas, distancia, tiempoParadas, parada) {
        this.marcha = marcha;
        this.frenoDeMano = frenoDeMano;
        this.clutch = clutch;
        this.freno = freno;
        this.estado = estado;
        this.direccionales = direccionales;
        this.paradas = paradas;
        this.distancia = distancia;
        this.tiempoParadas = tiempoParadas;
        this.parada = parada;
    }

    encenderApagado(accion) {

        if (accion === "apagar") {
            if (this.marcha != "neutro") {
                this.print("El vehiculo debe estar en neutro");
            } else if (this.frenoDeMano != "on") {
                this.print("El freno de mano no esta activo!");
            } else {
                this.estado = "apagado";
                this.print("Apagando");
            }
        } else {
            if (this.marcha != "neutro") {
                this.print("El vehiculo debe estar en neutro");
            } else if (this.frenoDeMano != "on") {
                this.print("El freno de mano no esta activo!");
            } else {
                this.estado = "encendido";
                this.print("Encendiendo");
            }
        }
    }

    seleccionarDestino() {

        this.paradas = Math.floor(Math.random() * (3) + 1);
        this.distancia = document.getElementById("kilometros").value;
        this.tiempoParada = Math.floor(Math.random() * (5) + 1);
        this.parada = this.distancia / this.paradas;

        (this.distancia === "") ? this.print("Ingrese la distancia"):
            (this.print(`El numero de paradas seran: ${this.paradas}`),
                this.print(`Las paradas se realizaran cada: ${this.parada}Km`),
                this.print(`El tiempo de las paradas es de: ${this.tiempoParada}s`));
    }

    arranque() {

        (this.estado === "apagado") ? this.print("Debe encender el vehiculo"):
            (this.clutch != "on") ? this.print("Debe presionar el clutch") :
            (this.marcha != "1") ? this.print("Debe colocar la marcha 1") :
            (this.frenoDeMano != "off") ? this.print("Debe soltar el freno de mano") :
            (this.freno != "off") ? this.print("Debe soltar el freno") :
            (this.print("Arranco..."), this.velocimetro());
    }


    realizarGiro() {
        (this.direccionales) ? this.print("Girando..."): this.print("Encianda las direccionales!");
    }

    velocimetro() {

        let velocidad = 0;
        let randomCambio = Math.floor(Math.random() * (5) + 2)


        for (let i = 0; i <= 80; i += 1) {

            velocidad += 15;

            if (velocidad == 15) {
                this.marcha++;
            } else if (velocidad == 30) {
                this.marcha++;
            } else if (velocidad == 45) {
                this.marcha++;
            } else if (velocidad == 60) {
                this.marcha++;
            } else if (velocidad == 75) {
                this.marcha++;
            } else if (velocidad > 80) {
                break;
            }

            if (this.marcha == randomCambio) {
                this.frenadoAleatorio();
            }
        }
    }

    frenadoAleatorio() {

        if (this.marcha > 2 && this.marcha < 6) {
            for (let j = 0; j < this.paradas; j++) {
                for (let i = 0; i <= this.distancia; i++) {
                    if (i === parseInt(this.parada)) {
                        this.print("Deteniendo");
                        for (let a = this.tiempoParada; a >= 0; a--) {
                            this.encenderEstacionarias();
                            this.print(a);
                        }
                    }
                }
            }
        }
    }

    encenderEstacionarias() {
        let dirIzq = document.getElementById('direccionalIzquierda');
        let dirDer = document.getElementById('direccionalDerecha');

        if (dirIzq.classList.contains("container") && dirDer.classList.contains("container")) {
            dirIzq.classList.add("yellow");
            dirIzq.classList.remove("container");
            dirDer.classList.add("yellow");
            dirDer.classList.remove("container");
        }
    }

    print(string) {
        let mensaje = document.getElementById('mensaje');
        mensaje.innerHTML += `${string} <br>`;
    }

    setMarcha(marcha) {
        this.marcha = marcha;
    }

    setFrenoDeMano(frenoDeMano) {
        this.frenoDeMano = frenoDeMano;
    }

    setClutch(clutch) {
        this.clutch = clutch;
    }

    setFreno(freno) {
        this.freno = freno;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    setDireccionales(direccionales) {
        this.direccionales = direccionales;
    }

    setEstado(estado) {
        this.estado = estado;
    }
}