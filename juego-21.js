class Simbolo {
    constructor(figura = []) {
        this.figura = figura
        console.log(this.figura);
    }
}

class Naipe {
    constructor(valor = [2, 3, 4, 5, 6, 7, 8, 9, 10], valorAS = [1, 11], viejas = [10]) {
        this.valor = valor;
        this.cartaAs = valorAS
        this.cartaMayor = viejas
    }
}

class Jugador {
    constructor(carta = []) {
        this.carta = carta
    }
}

class Letra {
    constructor(signo = ['2', '3', '4', '5', '6', '7', '8', '9', '10'], letraA = ['A'], letraMayor = ['J', 'Q', 'K']) {
        this.letras = signo
        this.A = letraA
        this.vieja = letraMayor
    }
}

class Fabrica {
    barajas = [baraja.figura.push(' ♠ CORAZON_N ♠ '), baraja.figura.push(' ♦ DIAMANTES ♦ '), baraja.figura.push(' ♣ TREBOL ♣ '), baraja.figura.push(' ♥ CORAZON ♥ ')];
    mazo = [];
    primeraCarta;
    segundaCarta;
    pedir;

    crearMazo() {

        for (let a = 0; a < this.barajas.length; a++){
            let cartaAs = Letras.A[0].concat(baraja.figura[a].concat(Valor.cartaAs))
            let carta = new Jugador(cartaAs)
            this.mazo.push(carta)
        }
        for (let v = 0; v < 3; v++) {
            for (let b = 0; b < this.barajas.length; b++) {
                let letraEs = Letras.vieja[v].concat(baraja.figura[b]).concat(Valor.cartaMayor[0])
                let carta = new Jugador(letraEs)
                this.mazo.push(carta)
            }
        }
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < this.barajas.length; j++) {
                let agregar = Letras.letras[i].concat(baraja.figura[j]).concat(Valor.valor[i])
                let carta = new Jugador(agregar)
                this.mazo.push(carta)
            }
        }
       
        return this.mazo
    }

    mezclar() {
        const aleatiro1 = Math.floor(Math.random() * this.mazo.length)
        const aleatorio2 = Math.floor(Math.random() * this.mazo.length)
        this.primeraCarta = this.mazo[aleatiro1]['carta']
        this.segundaCarta = this.mazo[aleatorio2]['carta']

        document.getElementById("carta1").style.background = '#ffcc00';
        document.getElementById("carta1").innerHTML = this.primeraCarta + '<br>';
        document.getElementById("carta2").style.background = '#eb4d55';
        document.getElementById("carta2").innerHTML = this.segundaCarta;

    }

    pedirCarta() {
        const aleatorio = Math.floor(Math.random() * this.mazo.length)
        this.pedir = this.mazo[aleatorio]['carta']
        document.getElementById("carta3").style.background = '#eb4d55';
        document.getElementById("carta3").innerHTML = this.pedir;
        console.log(this.pedir)
    }


    validar() {
        let num;
        for (let g = 0; g < 4; g++) {
            num = jugador.mazo[g]['carta'] = Valor.cartaAs
            console.log(parseInt(num))
        }
        for (let q = 4; q < 40; q++) {
            num = parseInt(jugador.mazo[q]['carta']);
            console.log(num)
        }
        for (let r = 40; r < 52; r++) {
            num = jugador.mazo[r]['carta'] = Valor.cartaMayor
            console.log(parseInt(num))
        }

        let c1 = parseInt(this.primeraCarta)
        let c2 = parseInt(this.segundaCarta)
        let c3 = parseInt(this.pedir)
        console.log(num)
        let sumaCartas = c1 + c2
        let total = c1 + c2 + c3
        console.log(total)
        
        if (sumaCartas < 21 || sumaCartas > 21) {
            document.getElementById("puntaje").innerHTML = 'Perdio 21 :(';
        }
        if (sumaCartas == 21) {
            document.getElementById("puntaje").innerHTML = 'Ganaste :)';
        }
        if (total < 21 || total > 21) {
            document.getElementById("puntaje").innerHTML = 'Perdio :(';
        }
        if (total === 21) {
            document.getElementById("puntaje").innerHTML = 'Ganaste :)';
        }
    }
}

const baraja = new Simbolo()
const Letras = new Letra()
const Valor = new Naipe()
const jugador = new Fabrica()
jugador.crearMazo()