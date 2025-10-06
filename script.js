const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após cagar no mato, Angelo avistou um peixe morto no rio que ele defecou",
        alternativas: [
            {
                texto: "Isso é uma merda!",
                afirmacao: "No início ficou com medo do que essa bosta pode fazer. "
            },
            {
                texto: "Isso é triste!",
                afirmacao: "Angelo fica triste com o peixe morto."
            }
        ]
    },
    {
        enunciado: " Angelo avista um pé de mato de meia altura, folhas pontudas e serrilhadas, e pensou que era uma boa planta para usar com higienizador anal.",
        alternativas: [
            {
                texto: "Usar mato mistrioso",
                afirmacao: "Conseguiu utilizar um mato para contribuir com sua higiene (era Urtigão)."
            },
            {
                texto: "Dois reais",
                afirmacao: "Preferiu dois reais ao mato misterioso, mas ainda assim era o unico recurso disponível para seu asseio."
            }
        ]
    },
    {
        enunciado: "Apos limpar com a Urtiga, percebe bolas vermelhas em sua superficie pélvica, o que ele deve fazer?",
        alternativas: [
            {
                texto: "Mostrar para alguem que possivelmente sabe o que é.",
                afirmacao: "Decide apresentar os ematomas de seu anus em publico, mas ninguem pode ajudá-lo, então decide ir para casa."
            },
            {
                texto: "Conviver com isso pelo resto da vida",
                afirmacao: "Quando percebe os ematomas da Urtiga, acredita que precisa conviver com isso pelo resto de sua vida, e volta para casa ja conformado com o destino."
            }
        ]
    },
    {
        enunciado: "João decidiu não ir para o hospital, o que ele precisa fazer ?",
        alternativas: [
            {
                texto: "Jogar Clash Royale com o objetivo de upar de arena",
                afirmacao: "Vai pra casa jogar clash royale,o que acaba não sendo uma boa idéia porque cai contra um deck de PEKKA e Megacavaleiro nivel 15."
            },
            {
                texto: "Twitar sobre.",
                afirmacao: "Após chegar em casa, decide que é uma boa idéia posta no twitter!"
            }
        ]
    },
    {
        enunciado: "Angelo decide largar o celular depois de um tempo, e percebe que saiu no jornal nacional que alguem cagou no rio e contaminou a grande são paulo, matando cerca de 8 mil pessoas ",
        alternativas: [
            {
                texto: "Se arrepender de seus atos.",
                afirmacao: "Depois de perceber que Wiliam Bonner estava falando da agua que ele tinha contaminado, se arrepende de ter cagado no rio, se entrega às autoridades e é condenado a 8 anos de cadeia."
            },
            {
                texto: "Se arrepender de seus atos (segunda opção).",
                afirmacao: "Vê o anuncio do JN sobre 8 mil mortes pela agua contaminada, mas mesmo arrependido pega o Monza de seu pai e migra ilegalmente para o Paraguai. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Depois de cagar no rio...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
