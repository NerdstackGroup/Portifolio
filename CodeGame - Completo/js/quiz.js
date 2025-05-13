// Array que vai conter cada questão do quiz
// Cada objeto é uma questão diferente
const questoes = [
  {
    questao: 1,
    pergunta: "1. O que o operador % retorna?",
    opcoes: [
      "a) A porcentagem de um número",
      "b) O resultado de uma multiplicação",
      "c) O valor absoluto de um número",
      "d) O resto da divisão entre dois números",
    ],
    resposta: "d) O resto da divisão entre dois números",
  },

  {
    questao: 2,
    pergunta:
      "2. Qual é a estrutura de declaração de uma variável em JavaScript?",
    opcoes: [
      "a) let idade = 25",
      "b) criar idade = 25",
      "c) let = idade 25",
      "d) idade let = 25",
    ],
    resposta: "a) let idade = 25",
  },

  {
    questao: 3,
    pergunta:
      "3. Qual das opções abaixo representa uma variável do tipo string?",
    opcoes: ["a) Maria", "b) true", "c) 30", "d) '90'"],
    resposta: "d) '90'",
  },
  {
    questao: 4,
    pergunta: "4.  O que a condição <span> if (x < 10) </span> verifica?",
    opcoes: [
      "a) Se x for maior que 10",
      "b) Se x for menor que 10",
      "c) Se x for igual a 10",
      "d) Se x for maior ou igual a 10",
    ],
    resposta: "b) Se x for menor que 10",
  },
  {
    questao: 5,
    pergunta:
      "5. Qual a saída da expressão <span> 3 === '3' </span> em JavaScript?",
    opcoes: ["a) true", "b) false", "c) undefined", "d) NaN"],
    resposta: "b) false",
  },
  {
    questao: 6,
    pergunta: "6. Qual opção é igual a <span> A++ </span>?",
    opcoes: [
      "a) A = A + A",
      "b) A += A",
      "c) A = A + 1",
      "d) Nenhuma das opções",
    ],
    resposta: "c) A = A + 1",
  },
  {
    questao: 7,
    pergunta: "7. O que é uma função em JavaScript?",
    opcoes: [
      "a) Um tipo especial de variável que armazena números inteiros",
      "b) Um bloco de código que pode ser reutilizado e executado quando chamado",
      "c) Um método exclusivo para acessar o banco de dados",
      "d) Um loop que executa comandos repetidamente",
    ],
    resposta:
      "b) Um bloco de código que pode ser reutilizado e executado quando chamado",
  },
  {
    questao: 8,
    pergunta: "8. É correto afirmar que variável declarada com const:",
    opcoes: [
      "a) Não pode ser redeclarada ou reatribuída",
      "b) Pode ser redeclarada dentro de um bloco de código",
      "c) O valor da variável pode ser alterado, mas não a estrutura",
      "d) O valor da variável pode ser alterado, mas não dentro de funções",
    ],
    resposta: "a) Não pode ser redeclarada ou reatribuída",
  },
  {
    questao: 9,
    pergunta: "9. Em qual situação a estrutura if é útil em JavaScript?",
    opcoes: [
      "a) Quando você deseja repetir um bloco de código várias vezes",
      "b) Quando você deseja tomar uma decisão com base em uma condição",
      "c) Quando você precisa interromper um loop",
      "d) Quando você quer definir variáveis dentro de funções.",
    ],
    resposta:
      "b) Quando você deseja tomar uma decisão com base em uma condição",
  },
  {
    questao: 10,
    pergunta:
      "10. O que é verdadeiro sobre a estrutura do loop for em JavaScript?",
    opcoes: [
      "a) O for executa um bloco de código enquanto uma condição for verdadeira.",
      "b) O for sempre precisa de uma variável chamada i.",
      "c) O for serve apenas para percorrer listas de trás para frente.",
      "d) O for é usado apenas dentro de funções.",
    ],
    resposta:
      "a) O for executa um bloco de código enquanto uma condição for verdadeira.",
  },
];

// Criando as variáveis e capturando elementos do HTML
const questaoGrupo = document.querySelector(".questao-grupo");
const perguntaHtml = document.querySelector(".pergunta");
const respostaOpcaoGrupo = document.querySelector(".opcoes-respostas");
const btnConfirmar = document.querySelector(".confirmar");
const contadorHTML = document.querySelector(".contador");
const questaoNumero = document.querySelector(".questaoNumero");
const quizTela = document.querySelector(".quiz-tela-total");
// Resultado
const resultadoTexto = document.querySelector(".nota");
const fraseResultado = document.querySelector(".frase-resultado");

// Variáveis
let atual = 0;
let score = 0;
let contador = 30;
let intervaloContador;
let respondeu = false;

// Modificando a questão atual no HTML
questaoNumero.innerHTML = `Questão ${questoes[atual].questao} / 10`;

// Função do CONTADOR
function iniciandoContador() {
  /* Pausa o contador anterior */
  clearInterval(intervaloContador);

  // variável armazena o contador
  intervaloContador = setInterval(function () {
    // Contador vai perdendo -1
    contador--;

    // Enquanto contador for MAIOR que um, ele apenas aparece no html
    if (contador >= 1) {
      contadorHTML.innerHTML = contador;
    } else if (contador === 0) {
      contadorHTML.innerHTML = contador;

      // Ao chegar a ZERO, os botões serão desabilitados
      let btnOpcoes = document.querySelectorAll("button");

      for (let i = 0; i < btnOpcoes.length; i++) {
        btnOpcoes[i].disabled = true;
      }

      // Ao chegar a ZERO, vamos mostrar a OPÇÃO CORRETA
      btnOpcoes.forEach((btn) => {
        if (btn.textContent === String(questoes[atual].resposta)) {
          btn.style.backgroundColor = "#7E8374";
        }
      });

      // Pausa o contador
      clearInterval(intervaloContador);
    }
  }, 1000);
}

// Chama a função do contador
iniciandoContador();

// Modifica o HTML, adicionando a pergunta e as opções de A até D
function modificandoHtml() {
  perguntaHtml.innerHTML = `<p>${questoes[atual].pergunta}</p>`;

  respostaOpcaoGrupo.innerHTML = "";
  questoes[atual].opcoes.forEach((res) => {
    respostaOpcaoGrupo.innerHTML += `<button>${res}</button>`;
  });
}

// Chama a função que modifica o HTML
modificandoHtml();

// Função que checa o que usuário respondeu e a pontuação dele
function funcaoOpcoes() {
  let btnOpcoes = document.querySelectorAll("button");

  // Começa como falso
  respondeu = false;

  // Um loop para as opções
  btnOpcoes.forEach((marcado) => {
    marcado.addEventListener("click", (evento) => {
      // Se clicar na opção, o contador pausa
      clearInterval(intervaloContador);

      // E respondeu passa a ser VERDADEIRO
      respondeu = true;

      // As opções são desabilitadas
      for (let i = 0; i < btnOpcoes.length; i++) {
        btnOpcoes[i].disabled = true;
      }

      // Se marcar a resposta correta, aparece em verde e ganha ponto
      // Caso contrário, a opção fica vermelha e mostra a opção correta em verde
      if (evento.target.textContent === String(questoes[atual].resposta)) {
        evento.target.style.backgroundColor = "#7E8374";
        score++;
      } else if (
        evento.target.textContent !== String(questoes[atual].resposta)
      ) {
        evento.target.style.backgroundColor = "#B84040";

        btnOpcoes.forEach((btn) => {
          if (btn.textContent === String(questoes[atual].resposta)) {
            btn.style.backgroundColor = "#7E8374";
          }
        });
      }
    });
  });
}

// Chama a função das opções
funcaoOpcoes();

// Função para o botão prosseguir com as questões
function functionConfirmar() {
  // Se contador for igual ou menor que ZERO OU respondeu for VERDADEIRO
  if (contador <= 0 || respondeu === true) {
    // E se a variável atual tiver um valor menor que o índice do último elemento do array
    if (atual < questoes.length - 1) {
      // Botão será habilitado novamente
      btnConfirmar.disabled = false;

      // Atual recebe +1
      atual++;

      // Contadot reseta
      contador = 30;
      contadorHTML.innerHTML = 30;

      // Chamamos as funções e modificamos o HTML do número da questão atual
      modificandoHtml();
      funcaoOpcoes();
      iniciandoContador();
      questaoNumero.innerHTML = `Questão ${questoes[atual].questao} / 10`;
    } else {
      // Caso contrário, o quiz será escondido e a tela de resultado vai aparecer
      questaoGrupo.classList.add("hidden");
      quizTela.style.backgroundImage = "url('../img/pontos_fundo.png')";
      fraseResultado.classList.remove("hidden");
      resultadoTexto.innerHTML = `${score} / 10`;

      // Dependendo da nota, frases diferentes vão aparecer
      if (score >= 8) {
        fraseResultado.innerHTML =
          "Você dominou a batalha! A lógica foi sua aliada do começo ao fim.";
      } else if (score >= 5) {
        fraseResultado.innerHTML =
          "Você enfrentou bem o desafio! Ainda há obstáculos pela frente, mas o caminho está traçado.";
      } else if (score <= 4) {
        fraseResultado.innerHTML =
          "Essa fase foi difícil, mas toda jornada começa assim. Levante-se e tente mais uma vez!";
      }
    }
  }
}

// Ao clicar no botão Próxima, a função de confirmar será executada
btnConfirmar.addEventListener("click", functionConfirmar);
