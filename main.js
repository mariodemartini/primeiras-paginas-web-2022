var botao = document.querySelectorAll(".menu ul > li > .botao");
for (var i = 0; i < botao.length; i++) {
    botao[i].addEventListener("click", function (e) {

        var cards = this.id;

        if(cards == "T"){
            // document.getElementsByClassName("todos").style.display = "none";
            document.getElementsByClassName("receita massas").style.display = "block";
            document.getElementsByClassName("receita salgados").style.display = "block";
            document.getElementsByClassName("receita sobremesas").style.display = "block";
        }
        if(cards == "M"){

            document.getElementsByClassName("receita massas").style.display = "block";
            document.getElementsByClassName("receita salgados").style.display = "none";
            document.getElementsByClassName("receita sobremesas").style.display = "none";  
        }
        if(cards == "S"){

            document.getElementsByClassName("receita massas").style.display = "none";
            document.getElementsByClassName("receita salgados").style.display = "block";
            document.getElementsByClassName("receita sobremesas").style.display = "none";  
        }
        if(cards == "D"){

            document.getElementsByClassName("receita massas").style.display = "none";
            document.getElementsByClassName("receita salgados").style.display = "none";
            document.getElementsByClassName("receita sobremesas").style.display = "block";                
        }

    })
}