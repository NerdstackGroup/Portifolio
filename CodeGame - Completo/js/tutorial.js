// Array que armazena cada explicação sobre VARIÁVEIS
// Cada objeto dentro desse array representa um tópico

const textoVariavel = [
  {
    titulo: "O que é uma variável?",
    paragrafos:
      "Pense em uma variável como uma caixinha onde você guarda informações. Essa caixinha recebe um nome e pode armazenar diferentes tipos de dados, como textos, números ou valores verdadeiros/falsos. As variáveis ajudam a organizar e reutilizar informações no código, facilitando a leitura e manutenção no futuro.",
  },
  {
    titulo: "Declarando uma variável no JavaScript",
    paragrafos: [
      "var → Forma pouco usada nos tempos atuais, já que é mais imprevisível. ",
      "let → É flexível, pois permite modificar o valor depois da declaração.",
      "const → É constante, ou seja, não permite modificações após a declaração. Assim, usamos em variáveis que terão um único valor.",
    ],
  },
  {
    titulo: "Tipos de dados",
    paragrafos: [
      `String → Representa textos, e sempre vai entre aspas. Exemplo: "Ana", 'Olá mundo', \`300\`, entre outros.`,
      `Número → Representa qualquer número, sem aspas. Pode ser inteiro (5) ou decimal (3.14).`,
      `Booleanos → Representam verdadeiros (true) ou falsos (false). Muito usados condições.`,
    ],
  },
  {
    titulo: "Exemplo da estrutura de uma variável",
    paragrafos: [
      "1. let/const/var",
      "2. nome da variável",
      "3. = (recebe)",
      "4. dado armazenado",
      '<span>let nome = "Lucas"</span> → Se você usar a variável "nome", ela vai retornar o texto Lucas.',
      "<span> const idade = 35 </span> → Ao chamar 'idade', você recebe o número 35, que não pode ser alterado, já que foi declarado com const.",
      "<span> var adulto = true </span> → Se usar a variável 'adulto', ela vai retornar o valor true, indicando que a pessoa é adulta.",
    ],
  },
];

// Array que armazena cada explicação sobre OPERADORES
const textoOperador = [
  {
    titulo: "Tipos de operadores",
    paragrafos: [
      "Operadores Aritméticos → permitem fazer operações matemáticas, como somar, subtrair, multiplicar, dividir e descobrir o resto de uma divisão. ",
      "Operadores de Comparação → servem para comparar dois valores e verificar se eles são iguais, diferentes, maiores ou menores.",
      "Operadores Lógicos → eles permitem, por exemplo, verificar se duas coisas são verdadeiras ao mesmo tempo, se pelo menos uma é verdadeira ou negar uma condição. ",
    ],
  },
  {
    titulo: "Exemplo de operador aritmético",
    paragrafos: [
      "<span>let soma = 10 + 5</span> → valor será 15",
      "<span>let subtracao = 10 - 5</span> → resultado vai ser 5",
      "<span>let divisao = 10 / 5</span> → valor será 2",
      "<span>let multiplicacao = 10 * 5</span> → valor será 50",
      "<span>let resto = 10 % 5</span> → valor será 0, pois % retorna o resto da divisão entre dois números",
    ],
  },
  {
    titulo: "Exemplo de operador de comparação",
    paragrafos: [
      "<span>5 == '5'</span> → retorna verdadeiro (mesmo valor)",
      "<span>5 === '5'</span> → retorna falso (valores iguais, mas tipos diferentes)",
      "<span>10 != 5</span> → retorna verdadeiro (são diferentes)",
      "<span>8 > 3</span> → retorna verdadeiro (8 é maior que 3)",
      "<span>4 <= 2</span> → retorna falso (4 não é menor e nem igual a 2)",
    ],
  },
  {
    titulo: "Exemplo de operador lógico",
    paragrafos: [
      "&& → Os dois valores precisam ser verdadeiros",
      "|| → Apenas um valor precisa ser verdadeiro.",
      "! → Inverte o valor.",
      "<span>true && false</span> → retorna falso (os dois não são verdadeiros)",
      "<span>true && true</span> → retorna verdadeiro (ambos são verdadeiros)",
      "<span>true || false</span> → retorna verdadeiro (um deles é verdadeiro)",
      "<span>!true</span> → retorna falso (! significa NÃO)",
    ],
  },
];

// Array que armazena cada explicação sobre CONDICIONAL
const textoCondicional = [
  {
    titulo: "O que é uma condicional?",
    paragrafos: [
      "Condicionais são usadas para tomar decisões no código, ou seja, para executar um bloco de código apenas quando uma condição for atendida.",
      "if (condição): executa um código se a condição for verdadeira.",
      "else if: usado quando você quer testar mais de uma condição, além da principal.",
      "else: executa um código se a condição for falsa.",
    ],
  },

  {
    titulo: "Exemplo de uma condicional",
    paragrafos: [
      "<span>if (idade >= 18) {  }</span>",
      "Explicação → Na condição, checamos se a variável idade é maior ou igual a 18. Se a condição for verdadeira, todo código dentro das chaves será executado.",
      "Então, por exemplo, se colocarmos <span>console.log('Você é adulto!')</span> dentro das chaves e idade for 25, 'Você é adulto!' será lançado no console do navegador.",
    ],
  },
];

// Array que armazena cada explicação sobre FUNÇÃO
const textoFuncao = [
  {
    titulo: "O que é uma função?",
    paragrafos:
      "Funções são blocos de código que podem ser reutilizados em várias partes do programa. Elas recebem entradas (parâmetros) e retornam um valor (resultado) depois de executar uma lógica.",
  },

  {
    titulo: "Exemplo de uma função",
    paragrafos: [
      "<span>function soma(n1, n2) { }</span>",
      "Explicação → A função soma recebe dois parâmetros chamados n1 e n2. Todo elemento dentro das chaves poderá ser reutilizado se chamarmos a função novamente.",
      "Assim, se colocarmos dentro das chaves <span>return n1 + n2</span> e depois chamarmos a função, substituindo os parâmetros dentro dos parênteses, vamos receber a soma desses dois números. Então, se chamarmos <span>soma(5, 20)</span>, ela irá retornar 25.",
    ],
  },
];

// Array que armazena cada explicação sobre LOOP
const textoLoop = [
  {
    titulo: "O que é um loop?",
    paragrafos:
      "Um loop é uma estrutura que permite repetir uma ação várias vezes no código, sem precisar escrever o mesmo comando várias vezes. Ele é útil quando queremos executar algo enquanto uma condição for verdadeira, como contar números, percorrer listas ou repetir mensagens. Existem vários tipos de loops, como for e while",
  },

  {
    titulo: "Exemplo de um loop",
    paragrafos: [
      "<span>for (let i = 1; i <= 4; i++) { }</span>",
      "Explicação → No for loop, tudo que estiver dentro das chaves sofrerá com o loop até a condição deixar de ser verdadeira.",
      "<span>let i = 1</span> → Uma variável qualquer recebe um valor. Aqui, i tem valor 1.",
      "<span>i <= 4</span> → Cria-se uma condição. O loop irá ocorrer enquanto i for menor ou igual a 4.",
      "<span>i++</span>  → A cada rodada do loop, i vai recebendo +1.",
      "<span>{ }</span> → Se colocarmos <span>console.log(i)</span> dentro das chaves, veremos no console: 1 2 3 4",
      "Curiosidade: <span>i++</span> é forma abreviada de <span> i = i + 1 </span>.",
    ],
  },
];

// Criando variáveis
const textoGrupo = document.querySelector(".card-textos");
const btnProximo = document.querySelector(".btnProximo");
const btnSair = document.querySelector(".btnSair");
let textoAtual;

// Variável atual
let atual = 0;

// Função que modifica o texto
function modificandoHtml(texto) {
  // Remove todos os elementos anteriores
  textoGrupo.innerHTML = "";

  // Começa a adicionar os novos elementos
  textoGrupo.innerHTML += `<h1>${texto[atual].titulo}</h1>`;

  if (typeof texto[atual].paragrafos === "string") {
    textoGrupo.innerHTML += `<p>${texto[atual].paragrafos}</p>`;
  } else {
    for (let i = 0; i < texto[atual].paragrafos.length; i++) {
      textoGrupo.innerHTML += `<p>${texto[atual].paragrafos[i]}</p>`;
    }
  }
}

// Função que permite prosseguir para o próximo texto
function prosseguir() {
  if (atual < textoAtual.length - 1) {
    atual++;
    modificandoHtml(textoAtual);
  } else if (atual >= textoAtual.length - 1) {
    atual = 0;
    modificandoHtml(textoAtual);
  }
}

// Evento no botão Próximo
btnProximo.addEventListener("click", prosseguir);

// Função para mostrar o pop up
function mostrar(texto) {
  textoAtual = texto;
  atual = 0;
  document.querySelector(`.caixa-card-textos`).classList.remove("hidden");
  modificandoHtml(textoAtual);
}

// Função para o pop up desaparecer
function sair() {
  document.querySelector(`.caixa-card-textos`).classList.add("hidden");
  atual = 0;
  modificandoHtml(textoAtual);
}

// Evento no botão Sair
btnSair.addEventListener("click", sair);
