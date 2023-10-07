"use strict";
// Define a variável GASOLINA
const GASOLINA = "Gasolina";
// Define a variável ETANOL
const ETANOL = "Etanol";
// Classe Combustível
class Combustivel {
    constructor(tipo, preco) {
        this.tipo = tipo;
        this.preco = parseFloat(preco.toString());
    }
}
// Classe Posto
class Posto {
    constructor(nome, gasolina, etanol) {
        this.nome = nome;
        this.gasolina = new Combustivel(GASOLINA, gasolina);
        this.etanol = new Combustivel(ETANOL, etanol);
    }
    // Método para sugerir o combustível
    sugereCombustivel() {
        // Calcula o percentual do etanol em relação à gasolina
        const percentualEtanol = Number(this.etanol.preco) / Number(this.gasolina.preco);
        // Formata o resultado com duas casas decimais
        const percentualFormatado = (percentualEtanol * 100).toFixed(2);
        // Verifica se é vantajoso abastecer com etanol
        if (percentualEtanol < 0.7) {
            // É vantajoso abastecer com ${this.etanol.tipo}
            const mensagem = `É vantajoso abastecer com ${this.etanol.tipo} no posto ${this.nome}. O percentual é de ${percentualFormatado}%.`;
            console.log(mensagem); // Imprime no console
            return mensagem;
        }
        else {
            // Não é vantajoso abastecer com ${this.etanol.tipo}
            const mensagem = `Não é vantajoso abastecer com ${this.etanol.tipo} no posto ${this.nome}. O percentual é de ${percentualFormatado}%.`;
            console.log(mensagem); // Imprime no console
            return mensagem;
        }
    }
}
// Função para calcular o combustível mais vantajoso
function calcularCombustivel() {
    // Obtém os dados do formulário
    const nomePosto = document.querySelector("input[name='nome']").value;
    const precoGasolina = parseFloat(document.querySelector("input[name='precoGasolina']").value);
    const precoEtanol = parseFloat(document.querySelector("input[name='precoEtanol']").value);
    // Cria um objeto Posto com os valores inseridos pelo usuário
    const posto = new Posto(nomePosto, precoGasolina, precoEtanol);
    // Obtém o elemento de resultado
    const resultado = document.querySelector("#resultado");
    // Obtém a sugestão de combustível do posto
    const sugestao = posto.sugereCombustivel();
    // Exibe a sugestão no elemento de resultado
    if (resultado) {
        resultado.innerHTML = sugestao;
    }
    // Impede o envio do formulário
    return false;
}
