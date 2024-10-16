let nome = prompt("Qual é o seu nome?");

let pesquisa = "Olá, " + nome + "! Bem-vindo à iPhone Store! Aqui você irá consultar os valores dos iphones. No momento, temos esses modelos: iphone 11, iphone 12, iphone 13, iphone 14 e o iphone 15!";
alert(pesquisa); 

let resposta = prompt("Você gostaria de continuar? (sim ou não)");
   
    if (resposta === "sim" || resposta === "Sim" || resposta === "SIM") {
         let resposta = (escolha = prompt("Qual seria o modelo de sua escolha? EX: iphone 15"));
    } else if (resposta === "não" || resposta === "Não" || resposta === "nao" || resposta === "Nao" || resposta === "NÃO" || resposta === "NAO") {
        alert("Lamento que não tenha achado nada do seu agrado. Fique à vontade para voltar a qualquer momento!.");
    } else {
       
        alert("Resposta inválida! Por favor, responda com 'sim' ou 'não'.");
    }

switch (escolha) {
  case "iphone 11": 
    console.log("" + nome + ", o iphone 11 de 256 gb custa R$ 2.500") 
    break;
  case "iphone 12":
    console.log("" + nome + ", o iphone 12 de 256 gb custa R$ 3.000")
    break;
     case "iphone 13":
    console.log("" + nome + ", o iphone 13 de 256 gb custa R$ 3.500")
    break;
     case "iphone 14":
    console.log("" + nome + ", o iphone 14 de 256 gb custa R$ 4.300")
    break;
     case "iphone 15": 
    console.log("" + nome + ", o iphone 15 de 256 gb custa R$ 5.000") 
    break;
  default:
    console.log("" + nome + ", Não temos esse iphone no momento")
}


// Não sei se podia misturar o switch case com if/else, porém achei que fluiu melhor assim. Peguei a estrutura da atividade de JS passada, porém o (Você gostaria de continuar? (sim ou não)) estava aparecendo primeiro que o texto de boas-vindas. Aí peguei o alert (pesquisa) do GPT e pedi ajuda com o sim e não do if/else.