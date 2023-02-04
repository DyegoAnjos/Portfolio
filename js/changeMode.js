const temaFolha = document.getElementById("mode")
const temaBtn = document.getElementById("modeBtn")
const externo = document.getElementById("Externo")
const interno = document.getElementById("Interno")
const favicon = document.querySelector("#favicon")

function changeMode(id){
    transicao.classList.add("transicao")

    if(id === 1){
        id=2
        temaFolha.setAttribute("href", "css/white-style.css")
        temaBtn.setAttribute("onclick", "mudarTema("+id+")" )
        interno.style.fill = "var(--corEspecial)"
        externo.style.fill = "var(--corEspecial2)"
        favicon.setAttribute("href","imgs/logos/FavClaro.png")
        temaBtn.innerText="Dark Mode"
    }

    else if(id === 2){
        transicao.classList.add("transicaoIn")
        temaFolha.setAttribute("href", "css/dark-style.css")
        id=1
        temaBtn.setAttribute("onclick", "mudarTema("+id+")" )
        interno.style.fill = "var(--corEspecial2)"
        externo.style.fill = "var(--corEspecial)"
        favicon.setAttribute("href","imgs/logos/FavEscuro.png")
        temaBtn.innerText="White Mode"
        
    }
}