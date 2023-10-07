// Define a variável GASOLINA
const GASOLINA: string = "Gasolina";

// Define a variável ETANOL
const ETANOL: string = "Etanol";

// Classe Combustível
class Combustivel {
    tipo: string;
    preco: number;

    constructor(tipo: string, preco: number) {
        this.tipo = tipo;
        this.preco = parseFloat(preco.toString());
    }
}

// Classe Posto
class Posto {
    nome: string;
    gasolina: Combustivel;
    etanol: Combustivel;

    constructor(nome: string, gasolina: number, etanol: number) {
        this.nome = nome;
        this.gasolina = new Combustivel(GASOLINA, gasolina);
        this.etanol = new Combustivel(ETANOL, etanol);
    }

    // Método para sugerir o combustível
    sugereCombustivel(): string {
        // Calcula o percentual do etanol em relação à gasolina
        const percentualEtanol: number = Number(this.etanol.preco) / Number(this.gasolina.preco);

        // Formata o resultado com duas casas decimais
        const percentualFormatado: string = (percentualEtanol * 100).toFixed(2);

        // Verifica se é vantajoso abastecer com etanol
        if (percentualEtanol < 0.7) {
            // É vantajoso abastecer com ${this.etanol.tipo}
            const mensagem = `É vantajoso abastecer com ${this.etanol.tipo} no posto ${this.nome}. O percentual é de ${percentualFormatado}%.`;
            console.log(mensagem); // Imprime no console
            return mensagem;
        } else {
            // Não é vantajoso abastecer com ${this.etanol.tipo}
            const mensagem = `Não é vantajoso abastecer com ${this.etanol.tipo} no posto ${this.nome}. O percentual é de ${percentualFormatado}%.`;
            console.log(mensagem); // Imprime no console
            return mensagem;
        }
    }
}

// Função para calcular o combustível mais vantajoso
function calcularCombustivel(): boolean {
    // Obtém os dados do formulário
    const nomePosto: string = (document.querySelector("input[name='nome']") as HTMLInputElement).value;
    const precoGasolina: number = parseFloat((document.querySelector("input[name='precoGasolina']") as HTMLInputElement).value);
    const precoEtanol: number = parseFloat((document.querySelector("input[name='precoEtanol']") as HTMLInputElement).value);

    // Cria um objeto Posto com os valores inseridos pelo usuário
    const posto: Posto = new Posto(nomePosto, precoGasolina, precoEtanol);

    // Obtém o elemento de resultado
    const resultado: HTMLElement | null = document.querySelector("#resultado");

    // Obtém a sugestão de combustível do posto
    const sugestao: string = posto.sugereCombustivel();

    // Exibe a sugestão no elemento de resultado
    if (resultado) {
        resultado.innerHTML = sugestao;
    }

    // Impede o envio do formulário
    return false;
}
