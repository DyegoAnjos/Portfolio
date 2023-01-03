const habilidades = document.querySelector("#habilidades")

function infos(){
    // Linguagens
    for(let i=0;i<linguagens.length;i++){
        var tamanhoEstrelas = linguagens[i].estrelas
        const cardHabilidade = document.createElement("div")
        cardHabilidade.setAttribute("class", "card")

        habilidades.appendChild(cardHabilidade)
        const cardHabilidadeDiv = document.querySelector("#habilidades .card")

        const iconeHabilidade = document.createElement("img")
        iconeHabilidade.setAttribute("src","imgs/logos/"+linguagens[i].icone)
        iconeHabilidade.setAttribute("alt",linguagens[i].nome)
        iconeHabilidade.setAttribute("class","iconeHabilidade")

        cardHabilidade.appendChild(iconeHabilidade)

        const infos = document.createElement("div")
        infos.setAttribute("class", "infos")
        cardHabilidade.appendChild(infos)

        const divInfos = document.getElementsByClassName("infos")

        const nomeLinguagem = document.createElement("p")
        nomeLinguagem.setAttribute("class", "nomeLinguagem")
        nomeLinguagem.innerText = linguagens[i].nome

        divInfos[i].appendChild(nomeLinguagem)

        const conhecimento = document.createElement("div")
        conhecimento.setAttribute("class", "conhecimento")
        divInfos[i].appendChild(conhecimento)
        const divConhecimento = document.getElementsByClassName("conhecimento")

        for(let j=0;j<linguagens[i].estrelas;j++){
            const estrelaFill = document.createElement("i")
            estrelaFill.setAttribute("class", "fa-solid fa-star")

            divConhecimento[i].appendChild(estrelaFill)

        }

        if(tamanhoEstrelas == "nulo"){
            divConhecimento[i].innerText="Em breve"
        }

        else{
            for(let j=0;j<5-linguagens[i].estrelas;j++){
                const estrelaVazia = document.createElement("i")
                estrelaVazia.setAttribute("class", "fa-regular fa-star")

                divConhecimento[i].appendChild(estrelaVazia)
            }
        }

        divInfos[i].style.color = linguagens[i].cor   
    }
}