"use strict";
class Treino {
    constructor(descricao, serie, repeticoes) {
        this.descricao = descricao;
        this.serie = serie;
        this.repeticoes = repeticoes;
    }
}
class Aluno {
    constructor() {
        this.nome = "";
        this.sobre_nome = "";
        this.peso = 0;
        this.altura = 0;
        this.treinos = [];
    }
    calcularIMC() {
        return this.peso / this.altura * this.altura;
    }
    adicionarTreino(treino) {
        this.treinos.push(treino);
    }
}
class Academia {
    constructor() {
        this.alunos = [];
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    adicionarTreinoAluno(aluno, descricao, serie, repeticoes) {
        const treino = new Treino(descricao, serie, repeticoes);
        aluno.adicionarTreino(treino);
    }
}
let academia = new Academia();
let aluno_1 = new Aluno();
aluno_1.nome = "Pedro";
aluno_1.sobre_nome = "Das Neves";
let aluno_2 = new Aluno();
aluno_2.nome = "João";
aluno_2.sobre_nome = "Das Canhas";
academia.adicionarAluno(aluno_1);
academia.adicionarAluno(aluno_2);
academia.adicionarTreinoAluno(aluno_1, "Biceps", 3, 12);
