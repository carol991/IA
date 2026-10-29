
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que responde dúvidas e gera imagens e áudios hiper-realistas. Qual é seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Você acredita que é importante ter cuidado com os avanços da IA."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você vê a IA como uma oportunidade para inovar e facilitar tarefas."
            }
        ]
    },
    {
        enunciado: "Uma professora pede um trabalho sobre o uso da tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de IA para encontrar informações e entender melhor o assunto.",
                afirmacao: "Você utiliza a IA como ferramenta de pesquisa e aprendizagem."
            },
            {
                texto: "Pesquisar na internet, conversar com colegas e usar seus próprios conhecimentos.",
                afirmacao: "Você valoriza a pesquisa tradicional e a construção do conhecimento próprio."
            }
        ]
    },
    {
        enunciado: "Em um debate sobre como a IA impactará o trabalho no futuro, como você se posiciona?",
        alternativas: [
            {
                texto: "Preocupo-me com as pessoas que podem perder seus empregos para as máquinas.",
                afirmacao: "Você considera essencial proteger os trabalhadores diante das mudanças tecnológicas."
            },
            {
                texto: "Acredito que a IA pode criar empregos e melhorar as habilidades humanas.",
                afirmacao: "Você acredita que a IA pode gerar oportunidades profissionais e novas formas de trabalho."
             }
        ]
    },
    {
        enunciado: "Você precisa criar uma imagem que represente sua opinião sobre a IA. O que faz?",
        alternativas: [
            {
                texto: "Criar uma imagem usando uma ferramenta de design, como o Paint.",
                afirmacao: "Você prefere criar imagens manualmente e ter controle sobre cada detalhe."
            },
            {
                texto: "Criar uma imagem usando um gerador de imagens de IA.",
                afirmacao: "Você gosta de explorar a criatividade com a ajuda da inteligência artificial."
             }
        ]
    },
    {
        enunciado: "Seu grupo está atrasado em um trabalho de biologia, e uma pessoa usa IA para escrever o texto inteiro. O que você faz?",
        alternativas: [
            {
                texto: "Reviso o trabalho, verifico as informações e acrescento nossas próprias ideias.",
                afirmacao: "Você defende o uso responsável da IA, com revisão e participação humana."
            },
            {
                texto: "Acho que usar o texto inteiro está certo, pois alguém escreveu os comandos para a IA.",
                afirmacao: "Você considera a IA uma forma de agilizar a produção, mas precisa avaliar os limites do seu uso."
             }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

