const habilidades = document.querySelector("#habilidades")
const projects = document.querySelector("#projetos")

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

    //Projetos
    for(var i=0;i<projetos.length;i++){
        const card=document.createElement("div")
        card.setAttribute("class", "card")
        projects.appendChild(card)
        const cardDiv=document.querySelectorAll("#projetos .card")

        const link = document.createElement("a")
        link.setAttribute("href", projetos[i].linkProjeto)
        link.setAttribute("target", "_blank")
        link.setAttribute("class", "projetosIcone")
        cardDiv[i].appendChild(link)
        const linkA = document.querySelectorAll(".projetosIcone")


        const porjetoImg=document.createElement("img")
        porjetoImg.setAttribute("src", "imgs/Projetos/"+projetos[i].foto)
        porjetoImg.setAttribute("alt", projetos[i].nome)
        linkA[i].appendChild(porjetoImg)

        const infosProjetos = document.createElement("div")
        infosProjetos.setAttribute("class", "infos infoProjeto")
        cardDiv[i].appendChild(infosProjetos)
        const infosProjetosDiv = document.querySelectorAll(".infoProjeto")

        const stacks = document.createElement("div")
        stacks.setAttribute("class", "linguagens")
        infosProjetosDiv[i].appendChild(stacks)
        const stacksDiv=document.querySelectorAll(".linguagens")
        
        const descricao=document.createElement("p")
        descricao.setAttribute("class", "descricao")
        descricao.innerText=projetos[i].descricao
        infosProjetosDiv[i].appendChild(descricao)

        for(let j=0;j<projetos[i].linguagensUsadas.length;j++){
            const habilidadesUsadas = document.createElement("img")
            habilidadesUsadas.setAttribute("src","imgs/logos/"+projetos[i].linguagensUsadas[j])
            habilidadesUsadas.setAttribute("alt", "linguagem")
            habilidadesUsadas.setAttribute("class", "iconeHabilidade")
            stacksDiv[i].appendChild(habilidadesUsadas)
        }
    }
}

const temaFolha = document.getElementById("tema")
const temaBtn = document.getElementById("temaBtn")
const externo = document.querySelector("#externo") 
const interno = document.querySelector("#interno") 

// console.log(bg)
function mudarTema(id){
    if(id === 1){
        id=2
        temaFolha.setAttribute("href", "css/white-style.css")
        temaBtn.setAttribute("onclick", "mudarTema("+id+")" )
        interno.setAttribute("src","imgs/animacao/interno.png")
        externo.setAttribute("src","imgs/animacao/Externo.png")
        temaBtn.innerText="Dark Mode"
    }

    else if(id === 2){
        temaFolha.setAttribute("href", "css/dark-style.css")
        id=1
        temaBtn.setAttribute("onclick", "mudarTema("+id+")" )
        interno.setAttribute("src","imgs/animacao/internoDark.png")
        externo.setAttribute("src","imgs/animacao/ExternoDark.png")
        temaBtn.innerText="White Mode"
        
    }
}

function abriMenu(){
    alert("teste")
}