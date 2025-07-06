let mostraHTML = document.getElementById("mostraHTML");
let jhonHTML = document.getElementById("jhonHTML");
let frontHTML = document.getElementById("frontHTML");
let leHTML = document.getElementById("leHTML");

function cadastro() {
  // 1
  let time1 = window.prompt("Qual o nome do Time 1?");
  mostraHTML.innerHTML += `<h3>Time: ${time1}</h3>`;

  let nome1 = window.prompt("Qual seu nome?");
  let idade1 = Number(window.prompt("Jogador 1 - Qual sua idade?"));

  mostraHTML.innerHTML += `<p>${nome1}, Idade: ${idade1}</p>`;

  let nome2 = window.prompt("Qual seu nome?");
  let idade2 = Number(window.prompt("Jogador 2 - Qual sua idade?"));

  mostraHTML.innerHTML += `<p>${nome2}, Idade: ${idade2}</p>`;

  let nome3 = window.prompt("Qual seu nome?");
  let idade3 = Number(window.prompt("Jogador 3 - Qual sua idade?"));

  mostraHTML.innerHTML += `<p>${nome3}, Idade: ${idade3}</p>`;

  let media1 = (idade1 + idade2 + idade3) / 3;
  mostraHTML.innerHTML += `<p>Média de idade: ${media1.toFixed(2)}</p><hr>`;




  if (media1 > 15) {
    alert("vcs não poderão jogar o campeonato");

  
  mostrarHTML.innerHTML = `vocês estão eliminado do campeonato. motivo:sua media de idade eceder o limite colocado`;

    while (media >= 15 || media === 0) {
    mostraHTML.innerHTML = "";
    }

      let time1 = window.prompt("Qual o nome do Time 1?");
  mostraHTML.innerHTML += `<h3>Time: ${time1}</h3>`;

  let nome1 = window.prompt("Qual seu nome?");
  let idade1 = Number(window.prompt("Jogador 1 - Qual sua idade?"));

  mostraHTML.innerHTML += `<p>${nome1}, Idade: ${idade1}</p>`;

  let nome2 = window.prompt("Qual seu nome?");
  let idade2 = Number(window.prompt("Jogador 2 - Qual sua idade?"));

  mostraHTML.innerHTML += `<p>${nome2}, Idade: ${idade2}</p>`;

  let nome3 = window.prompt("Qual seu nome?");
  let idade3 = Number(window.prompt("Jogador 3 - Qual sua idade?"));

  mostraHTML.innerHTML += `<p>${nome3}, Idade: ${idade3}</p>`;

  let media1 = (idade1 + idade2 + idade3) / 3;
  mostraHTML.innerHTML += `<p>Média de idade: ${media1.toFixed(2)}</p><hr>`;


  } else {
    alert("o campeonato vai começar em 00/00/0000");
  }

  // 2
  let time2 = window.prompt("Qual o nome do Time 2?");
  jhonHTML.innerHTML += `<h3>Time: ${time2}</h3>`;

  let nome4 = window.prompt("Qual seu nome?");
  let idade4 = Number(window.prompt("Jogador 1 - Qual sua idade?"));

  jhonHTML.innerHTML += `<p>${nome4}, Idade: ${idade4}</p>`;

  let nome5 = window.prompt("Qual seu nome?");
  let idade5 = Number(window.prompt("Jogador 2 - Qual sua idade?"));

  jhonHTML.innerHTML += `<p>${nome5}, Idade: ${idade5}</p>`;

  let nome6 = window.prompt("Qual seu nome?");
  let idade6 = Number(window.prompt("Jogador 3 - Qual sua idade?"));

  jhonHTML.innerHTML += `<p>${nome6}, Idade: ${idade6}</p>`;

  let media2 = (idade4 + idade5 + idade6) / 3;
  jhonHTML.innerHTML += `<p>Média de idade: ${media2.toFixed(2)}</p><hr>`;

  if (media2 > 15) {
    alert("vcs não poderão jogar o campeonato");
  } else {
    alert("o campeonato vai começar em 00/00/0000");
  }

  // 3
  let time3 = window.prompt("Qual o nome do Time 3?");
  frontHTML.innerHTML += `<h3>Time: ${time3}</h3>`;

  let nome7 = window.prompt("Qual seu nome?");
  let idade7 = Number(window.prompt("Jogador 1 - Qual sua idade?"));

  frontHTML.innerHTML += `<p>${nome7}, Idade: ${idade7}</p>`;

  let nome8 = window.prompt("Qual seu nome?");
  let idade8 = Number(window.prompt("Jogador 2 - Qual sua idade?"));

  frontHTML.innerHTML += `<p>${nome8}, Idade: ${idade8}</p>`;

  let nome9 = window.prompt("Qual seu nome?");
  let idade9 = Number(window.prompt("Jogador 3 - Qual sua idade?"));

  frontHTML.innerHTML += `<p>${nome9}, Idade: ${idade9}</p>`;

  let media3 = (idade7 + idade8 + idade9) / 3;
  frontHTML.innerHTML += `<p>Média de idade: ${media3.toFixed(2)}</p><hr>`;

  if (media3 > 15) {
    alert("vcs não poderão jogar o campeonato");
  } else {
    alert("o campeonato vai começar em 00/00/0000");
  }

  // 4
  let time4 = window.prompt("Qual o nome do Time 4?");
  leHTML.innerHTML += `<h3>Time: ${time4}</h3>`;

  let nome10 = window.prompt("Qual seu nome?");
  let idade10 = Number(window.prompt("Jogador 1 - Qual sua idade?"));

  leHTML.innerHTML += `<p>${nome10}, Idade: ${idade10}</p>`;

  let nome11 = window.prompt("Qual seu nome?");
  let idade11 = Number(window.prompt("Jogador 2 - Qual sua idade?"));

  leHTML.innerHTML += `<p>${nome11}, Idade: ${idade11}</p>`;

  let nome12 = window.prompt("Qual seu nome?");
  let idade12 = Number(window.prompt("Jogador 3 - Qual sua idade?"));

  leHTML.innerHTML += `<p>${nome12}, Idade: ${idade12}</p>`;

  let media4 = (idade10 + idade11 + idade12) / 3;
  leHTML.innerHTML += `<p>Média de idade: ${media4.toFixed(2)}</p><hr>`;

  if (media4 > 15) {
    alert("vcs não poderão jogar o campeonato");
  } else {
    alert("o campeonato vai começar em 00/00/0000");
  }

  alert("Cadastro finalizado! 4 times cadastrados com sucesso.");

  alert("desculpe mais é só quatro times");
}