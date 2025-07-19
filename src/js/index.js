let tarot = [
  'O Louco',
  'O Mago',
  'A Sacerdotisa',
  'A Imperatriz',
  'O Imperador',
  'O Hierofante',
  'Os Enamorados',
  'O Carro',
  'A Força',
  'O Eremita',
  'A Roda da Fortuna',
  'A Justiça',
  'O Enforcado',
  'A Morte',
  'A Temperança',
  'O Diabo',
  'A Torre',
  'A Estrela',
  'A Lua',
  'O Sol',
  'O Julgamento',
  'O Mundo',
  'Ás de Paus',
  'Dois de Paus',
  'Três de Paus',
  'Quatro de Paus',
  'Cinco de Paus',
  'Seis de Paus',
  'Sete de Paus',
  'Oito de Paus',
  'Nove de Paus',
  'Dez de Paus',
  'Pajem de Paus',
  'Cavaleiro de Paus',
  'Rainha de Paus',
  'Rei de Paus',
  'Ás de Copas',
  'Dois de Copas',
  'Três de Copas',
  'Quatro de Copas',
  'Cinco de Copas',
  'Seis de Copas',
  'Sete de Copas',
  'Oito de Copas',
  'Nove de Copas',
  'Dez de Copas',
  'Pajem de Copas',
  'Cavaleiro de Copas',
  'Rainha de Copas',
  'Rei de Copas',
  'Ás de Espadas',
  'Dois de Espadas',
  'Três de Espadas',
  'Quatro de Espadas',
  'Cinco de Espadas',
  'Seis de Espadas',
  'Sete de Espadas',
  'Oito de Espadas',
  'Nove de Espadas',
  'Dez de Espadas',
  'Pajem de Espadas',
  'Cavaleiro de Espadas',
  'Rainha de Espadas',
  'Rei de Espadas',
  'Ás de Ouros',
  'Dois de Ouros',
  'Três de Ouros',
  'Quatro de Ouros',
  'Cinco de Ouros',
  'Seis de Ouros',
  'Sete de Ouros',
  'Oito de Ouros',
  'Nove de Ouros',
  'Dez de Ouros',
  'Pajem de Ouros',
  'Cavaleiro de Ouros',
  'Rainha de Ouros',
  'Rei de Ouros'
], tiragem = [], qtdcartas, tiposDeTiragem = ['passado_presente_futuro', 'compreensao_da_realidade', 'mandala_da_vida'];
let descCartas = [
  "Novos começos, liberdade, espontaneidade",
  "Habilidade, iniciativa, poder de manifestação",
  "Intuição, mistério, sabedoria interior",
  "Fertilidade, nutrição, abundância",
  "Autoridade, estrutura, liderança",
  "Tradição, espiritualidade, conformidade",
  "Relacionamentos, escolhas, harmonia",
  "Determinação, vitória, progresso",
  "Coragem, controle interno, força emocional",
  "Busca interior, sabedoria, isolamento",
  "Destino, ciclos, mudanças inesperadas",
  "Equilíbrio, verdade, justiça",
  "Rendição, nova perspectiva, sacrifício",
  "Transformação, fim de um ciclo",
  "Moderação, equilíbrio, paciência",
  "Apego, tentações, armadilhas",
  "Ruptura, mudanças repentinas",
  "Esperança, inspiração, fé renovada",
  "Ilusões, medos, intuição",
  "Sucesso, otimismo, alegria",
  "Renascimento, avaliação, revelações",
  "Conclusão, realização, plenitude",
  "Início criativo, inspiração, entusiasmo",
  "Planejamento, decisões, visão de futuro",
  "Exploração, expansão, progresso",
  "Celebração, harmonia, lar",
  "Conflito, competição, tensão",
  "Reconhecimento, vitória, sucesso público",
  "Desafio, persistência, defesa",
  "Rapidez, progresso acelerado, movimento",
  "Resiliência, vigilância, resistência",
  "Sobrecarga, responsabilidades, estresse",
  "Mensagem entusiástica, criatividade",
  "Energia impulsiva, aventura, paixão",
  "Independência, confiança, determinação",
  "Liderança carismática, visão, coragem",
  "Novo amor, compaixão, intimidade",
  "Parcerias, união, harmonia emocional",
  "Alegria, amizade, celebração",
  "Desinteresse, contemplação, apatia",
  "Decepção, perda, arrependimento",
  "Nostalgia, memórias, infância",
  "Ilusões, escolhas, imaginação",
  "Desapego, transição emocional",
  "Realização, satisfação emocional",
  "Felicidade plena, harmonia familiar",
  "Mensagem emocional, sensibilidade",
  "Romance, idealismo, charme",
  "Empatia, cuidado, amor maduro",
  "Compaixão, sabedoria emocional, generosidade",
  "Clareza mental, verdade, justiça",
  "Conflito interno, escolhas difíceis",
  "Coração partido, dor, separação",
  "Recuperação, descanso, contemplação",
  "Derrota, perda, ego",
  "Transição, mudança, viagem",
  "Engano, furtividade, estratégia",
  "Restrição, medo, aprisionamento mental",
  "Ansiedade, pesadelos, angústia",
  "Traição, colapso, fim doloroso",
  "Curiosidade, vigilância, aprendizado",
  "Determinação, ação rápida, ambição",
  "Intelecto, franqueza, independência",
  "Poder mental, verdade, autoridade",
  "Novas oportunidades financeiras, abundância",
  "Equilíbrio financeiro, decisões práticas",
  "Trabalho em equipe, habilidade, construção",
  "Estabilidade, controle, segurança material",
  "Carência, exclusão, dificuldades materiais",
  "Generosidade, caridade, equilíbrio",
  "Paciência, investimento, colheita futura",
  "Trabalho diligente, aperfeiçoamento",
  "Autossuficiência, luxo, gratidão",
  "Riqueza, sucesso material, legado",
  "Estudioso, novas oportunidades práticas",
  "Responsável, confiável, trabalhador dedicado",
  "Segurança, nutrição, praticidade",
  "Sucesso financeiro, liderança, estabilidade"
], AlldescCartas = [];


function sorteiaCarta(){
    return Math.floor(Math.random() * (77 - 0 + 1)) + 0;
}

function montaBaralho(qtdcartas){
    for(let index=0; index<qtdcartas; index++)
    {
        let cartaSorteada = sorteiaCarta();
        tiragem[index] = tarot[cartaSorteada];
        AlldescCartas[index] = (tiragem[index] + " - " + descCartas[index]);
    }
}

function exibeBaralho(qtdcartas){
    montaBaralho(qtdcartas);
    let baralho = AlldescCartas.join("<br>");
    resTiragem = document.getElementById("tiragem");
    resTiragem.innerHTML = baralho;
}

function opDeTiragem(){
    let tipoTiragem = document.querySelector('input[name="tipo_de_tiragem"]:checked').value;
    if(tipoTiragem == tiposDeTiragem[0]){
    exibeBaralho(3);
    }if(tipoTiragem == tiposDeTiragem[1]){
    exibeBaralho(3);
    }if(tipoTiragem == tiposDeTiragem[2]){
    exibeBaralho(14);
    }
}




  