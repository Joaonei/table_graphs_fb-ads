var click = document.querySelector(".click");
var voltar = document.querySelector(".voltar");

click.addEventListener("click",()=> {

    document.querySelector("#button").style.display = "none"
    document.querySelector(".grafico").style.display = "flex"

})
voltar.addEventListener("click", ()=> { 
    document.querySelector(".grafico").style.display = "none"
    document.querySelector("#button").style.display = "flex"
})