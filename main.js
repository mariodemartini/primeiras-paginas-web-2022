function selecionaTodos(){
    document.getElementById("massas").style.display = "block";
    document.getElementById("salgados").style.display = "block";
    document.getElementById("sobremesas").style.display = "block";
}

function selecionaMassas(){
    document.getElementById("massas").style.display = "flex";
    document.getElementById("salgados").style.display = "none";
    document.getElementById("sobremesas").style.display = "none";
}

function selecionaSalgados(){
    document.getElementById("massas").style.display = "none";
    document.getElementById("salgados").style.display = "flex";
    document.getElementById("sobremesas").style.display = "none";
}

function selecionaSobremesas(){
    document.getElementById("massas").style.display = "none";
    document.getElementById("salgados").style.display = "none";
    document.getElementById("sobremesas").style.display = "flex";
}

const iconeFavorito = document.querySelectorAll('.receita i');

function marcarFavorito(evento){
    const icone = evento.target;
    icone.classList.toggle("fa-regular");
    icone.classList.toggle("fa-solid");

}

iconeFavorito.forEach(icone => {
    icone.onclick = marcarFavorito;
})