let tarot = [
"O Louco",
  "O Mago",
  "A Sacerdotisa",
  "A Imperatriz",
  "O Imperador",
  "O Hierofante",
  "Os Amantes",
  "O Carro",
  "A Força",
  "O Eremita",
  "A Roda da Fortuna",
  "A Justiça",
  "O Enforcado",
  "A Morte",
  "A Temperança",
  "O Diabo",
  "A Torre",
  "A Estrela",
  "A Lua",
  "O Sol",
  "O Julgamento",
  "O Mundo",
  "Dois de Copas",
  "Três de Copas",
  "Quatro de Copas",
  "Cinco de Copas",
  "Seis de Copas",
  "Sete de Copas",
  "Oito de Copas",
  "Nove de Copas",
  "Dez de Copas",
  "Ás de Copas",
  "Rei de Copas",
  "Cavaleiro de Copas",
  "Pajem de Copas",
  "Rainha de Copas",
  "Dois de Ouros",
  "Três de Ouros",
  "Quatro de Ouros",
  "Cinco de Ouros",
  "Seis de Ouros",
  "Sete de Ouros",
  "Oito de Ouros",
  "Nove de Ouros",
  "Dez de Ouros",
  "Ás de Ouros",
  "Rei de Ouros",
  "Cavaleiro de Ouros",
  "Pajem de Ouros",
  "Rainha de Ouros",
  "Dois de Espadas",
  "Três de Espadas",
  "Quatro de Espadas",
  "Cinco de Espadas",
  "Seis de Espadas",
  "Sete de Espadas",
  "Oito de Espadas",
  "Nove de Espadas",
  "Dez de Espadas",
  "Ás de Espadas",
  "Rei de Espadas",
  "Cavaleiro de Espadas",
  "Pajem de Espadas",
  "Rainha de Espadas",
  "Dois de Paus",
  "Três de Paus",
  "Quatro de Paus",
  "Cinco de Paus",
  "Seis de Paus",
  "Sete de Paus",
  "Oito de Paus",
  "Nove de Paus",
  "Dez de Paus",
  "Ás de Paus",
  "Rei de Paus",
  "Cavaleiro de Paus",
  "Pajem de Paus",
  "Rainha de Paus"
], tiragem = [], qtdcartas, tiposDeTiragem = ['passado_presente_futuro', 'compreensao_da_realidade', 'cruz_celta'];
let descCartas = [
  "Novos começos, liberdade, espontaneidade", // O Louco
  "Habilidade, iniciativa, poder de manifestação", // O Mago
  "Intuição, mistério, sabedoria interior", // A Sacerdotisa
  "Fertilidade, nutrição, abundância", // A Imperatriz
  "Autoridade, estrutura, liderança", // O Imperador
  "Tradição, espiritualidade, conformidade", // O Hierofante
  "Relacionamentos, escolhas, harmonia", // Os Amantes
  "Determinação, vitória, progresso", // O Carro
  "Coragem, controle interno, força emocional", // A Força
  "Busca interior, sabedoria, isolamento", // O Eremita
  "Destino, ciclos, mudanças inesperadas", // A Roda da Fortuna
  "Equilíbrio, verdade, justiça", // A Justiça
  "Rendição, nova perspectiva, sacrifício", // O Enforcado
  "Transformação, fim de um ciclo", // A Morte
  "Moderação, equilíbrio, paciência", // A Temperança
  "Apego, tentações, armadilhas", // O Diabo
  "Ruptura, mudanças repentinas", // A Torre
  "Esperança, inspiração, fé renovada", // A Estrela
  "Ilusões, medos, intuição", // A Lua
  "Sucesso, otimismo, alegria", // O Sol
  "Renascimento, avaliação, revelações", // O Julgamento
  "Conclusão, realização, plenitude", // O Mundo
  "Novo amor, compaixão, intimidade", // Ás de Copas
  "Parcerias, união, harmonia emocional", // Dois de Copas
  "Alegria, amizade, celebração", // Três de Copas
  "Desinteresse, contemplação, apatia", // Quatro de Copas
  "Decepção, perda, arrependimento", // Cinco de Copas
  "Nostalgia, memórias, infância", // Seis de Copas
  "Ilusões, escolhas, imaginação", // Sete de Copas
  "Desapego, transição emocional", // Oito de Copas
  "Realização, satisfação emocional", // Nove de Copas
  "Felicidade plena, harmonia familiar", // Dez de Copas
  "Mensagem emocional, sensibilidade", // Pajem de Copas
  "Romance, idealismo, charme", // Cavaleiro de Copas
  "Empatia, cuidado, amor maduro", // Rainha de Copas
  "Compaixão, sabedoria emocional, generosidade", // Rei de Copas
  "Novas oportunidades financeiras, abundância", // Ás de Ouros
  "Equilíbrio financeiro, decisões práticas", // Dois de Ouros
  "Trabalho em equipe, habilidade, construção", // Três de Ouros
  "Estabilidade, controle, segurança material", // Quatro de Ouros
  "Carência, exclusão, dificuldades materiais", // Cinco de Ouros
  "Generosidade, caridade, equilíbrio", // Seis de Ouros
  "Paciência, investimento, colheita futura", // Sete de Ouros
  "Trabalho diligente, aperfeiçoamento", // Oito de Ouros
  "Autossuficiência, luxo, gratidão", // Nove de Ouros
  "Riqueza, sucesso material, legado", // Dez de Ouros
  "Estudioso, novas oportunidades práticas", // Pajem de Ouros
  "Responsável, confiável, trabalhador dedicado", // Cavaleiro de Ouros
  "Segurança, nutrição, praticidade", // Rainha de Ouros
  "Sucesso financeiro, liderança, estabilidade", // Rei de Ouros
  "Clareza mental, verdade, justiça", // Ás de Espadas
  "Conflito interno, escolhas difíceis", // Dois de Espadas
  "Coração partido, dor, separação", // Três de Espadas
  "Recuperação, descanso, contemplação", // Quatro de Espadas
  "Derrota, perda, ego", // Cinco de Espadas
  "Transição, mudança, viagem", // Seis de Espadas
  "Engano, furtividade, estratégia", // Sete de Espadas
  "Restrição, medo, aprisionamento mental", // Oito de Espadas
  "Ansiedade, pesadelos, angústia", // Nove de Espadas
  "Traição, colapso, fim doloroso", // Dez de Espadas
  "Curiosidade, vigilância, aprendizado", // Pajem de Espadas
  "Determinação, ação rápida, ambição", // Cavaleiro de Espadas
  "Intelecto, franqueza, independência", // Rainha de Espadas
  "Poder mental, verdade, autoridade", // Rei de Espadas
  "Início criativo, inspiração, entusiasmo", // Ás de Paus
  "Planejamento, decisões, visão de futuro", // Dois de Paus
  "Exploração, expansão, progresso", // Três de Paus
  "Celebração, harmonia, lar", // Quatro de Paus
  "Conflito, competição, tensão", // Cinco de Paus
  "Reconhecimento, vitória, sucesso público", // Seis de Paus
  "Desafio, persistência, defesa", // Sete de Paus
  "Rapidez, progresso acelerado, movimento", // Oito de Paus
  "Resiliência, vigilância, resistência", // Nove de Paus
  "Sobrecarga, responsabilidades, estresse", // Dez de Paus
  "Mensagem entusiástica, criatividade", // Pajem de Paus
  "Energia impulsiva, aventura, paixão", // Cavaleiro de Paus
  "Independência, confiança, determinação", // Rainha de Paus
  "Liderança carismática, visão, coragem" // Rei de Paus
], AlldescCartas = [], imgTiragem = [];

function sorteiaCarta(qtd) {
    const index = Array.from({ length: 78 }, (_, i) => i);
    for (let i = index.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [index[i], index[j]] = [index[j], index[i]];
    }
    return index.slice(0, qtd);
}

function montaBaralho(qtdcartas) {
    const totalCartas = tarot.length;
    const indexSorteados = sorteiaCarta(qtdcartas);
    
    for (let index = 0; index < qtdcartas; index++) {
        const cartaSorteada = indexSorteados[index];
        tiragem[index] = tarot[cartaSorteada];
        imgTiragem[index] = cartaSorteada;
        AlldescCartas[index] = tarot[cartaSorteada] + " - " + descCartas[cartaSorteada];
    }
}


function exibeBaralho(qtdcartas, tiragemType){
    montaBaralho(qtdcartas);
    //let baralho = AlldescCartas.join("<br>");
    let baralho = [];
    let tipoCarta = [];
    let baralhoRw = [];
    switch(tiragemType)
    {
        case 1:
        tipoCarta = ["O passado", "O presente", "O futuro"];
        for(let index=0; index<qtdcartas; index++)
        {
              baralho[index] = "<div class='cartas'><h4>" + tipoCarta[index] + "</h4><p>" + AlldescCartas[index] + "</p><img src='src/assets/img/" + imgTiragem[index] + ".jpg'></div>";
              baralhoRw[index] = "Carta " + (index + 1) + " (" + tipoCarta[index] + ") - " + AlldescCartas[index];
        }
        break;

        case 2:
        tipoCarta = ["O consciente", "O inconsciente", "A realidade"];
        for(let index=0; index<qtdcartas; index++)
        {
            baralho[index] = "<div class='cartas'><h4>" + tipoCarta[index] + "</h4><p>" + AlldescCartas[index] + "</p><img src='src/assets/img/" + imgTiragem[index] + ".jpg'></div>";
            baralhoRw[index] = "Carta " + (index + 1) + " (" + tipoCarta[index] + ") - " + AlldescCartas[index];
        }
        break;
        
        case 3:
        tipoCarta = ["O presente", "Os obstaculos", "As reações do consulente diante da questão", "O passado", "Os Fatores ocultos", "O futuro", "O consulente", "Os fatores externos/O entorno", "O caminho do destino", "O Desfecho/Resposta"];
        for(let index=0; index<qtdcartas; index++)
        {
            baralho[index] = "<div class='cartasCC' id='CC-" + (index +1) + "'><h4>" + tipoCarta[index] + "</h4><p>" + AlldescCartas[index] + "</p><img src='src/assets/img/" + imgTiragem[index] + ".jpg'></div>";
            baralhoRw[index] = "Carta " + (index + 1) + " (" + tipoCarta[index] + ") - " + AlldescCartas[index];
        }
        break;
    }


    baralho = baralho.join("");
    baralhoRw = baralhoRw.join("<br>");
    resTiragem = document.getElementById("tiragem");
    resTiragem.innerHTML = baralho;
    resTiragem = document.getElementById("tiragemReview");
    resTiragem.innerHTML = baralhoRw;
}

function opDeTiragem(){
    let tipoTiragem = document.querySelector('input[name="tipo_de_tiragem"]:checked').value;
    if(tipoTiragem == tiposDeTiragem[0])
    {
    exibeBaralho(3, 1);
    }else if(tipoTiragem == tiposDeTiragem[1]){
    exibeBaralho(3, 2);
    }else{
    exibeBaralho(10, 3);
    }
}




  