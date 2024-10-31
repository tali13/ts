"use strict";
class Padaria {
    constructor(paes, tortas, doces, fins) {
        this.clientes = [];
        this.paes = paes;
        this.tortas = tortas;
        this.doces = doces;
        this.fins = fins;
    }
    adicionarCliente(nome, sobre_nome) {
        let cliente = new Cliente();
        cliente.nome = nome;
        cliente.sobre_nome = sobre_nome;
        this.clientes.push(cliente);
    }
}
class Cliente {
    constructor() {
        this.nome = "";
        this.sobre_nome = "";
        this.idade = 0;
        this.peso = 0;
    }
    calcularPTDF() {
        return this.idade / this.peso * this.peso;
    }
}
let cliente = new Cliente();
let padaria = new Padaria(3, 3, 3, 3);
padaria.adicionarCliente("Pedro", "Pampa");
console.log(padaria);
