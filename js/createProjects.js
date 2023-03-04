const projects = document.querySelector("#projects")

function createProjects(){
    for(var i=0;i<projectsBd.length;i++){
        const card=document.createElement("div")
        card.classList.add("card")
        projects.appendChild(card)
        const cardDiv=document.querySelectorAll("#projects .card")

        const projectsImg=document.createElement("img")
        projectsImg.setAttribute("src", "imgs/Projetos/"+projectsBd[i].photo)
        projectsImg.setAttribute("alt", projectsBd[i].name)
        projectsImg.classList.add("projectThumb")
        cardDiv[i].appendChild(projectsImg)

        const description=document.createElement("p")
        description.classList.add("projectsDesc")
        description.innerText=projectsBd[i].description
        cardDiv[i].appendChild(description)

        const stacks = document.createElement("div")
        stacks.classList.add("skills")
        cardDiv[i].appendChild(stacks)
        const stacksDiv=document.querySelectorAll(".skills")
        
        for(let j=0;j<projectsBd[i].Skills.length;j++){
            const habilidadesUsadas = document.createElement("img")
            habilidadesUsadas.setAttribute("src","imgs/logos/"+projectsBd[i].Skills[j])
            habilidadesUsadas.setAttribute("alt", "linguagem")
            habilidadesUsadas.classList.add("iconSkill")
            stacksDiv[i].appendChild(habilidadesUsadas)
        }

        
        const projectsLinksGit=document.createElement("div")
        projectsLinksGit.classList.add("projectsLinks")
        cardDiv[i].appendChild(projectsLinksGit) 
    
        const projectLinksDiv= document.querySelectorAll(".projectsLinks")
    
        const gitLink = document.createElement("a")
        gitLink.classList.add("projectLink")
        gitLink.classList.add("projectLinkGit")
        gitLink.setAttribute("href", projectsBd[i].linkGit)
        gitLink.setAttribute("target", "_blank")
        projectLinksDiv[i].appendChild(gitLink)

        const projectLinkItemGit = document.querySelectorAll(".projectLinkGit")

        const gitIcon = document.createElement("i")
        gitIcon.setAttribute("class", "fa-brands fa-github linkIcon")
        projectLinkItemGit[i].appendChild(gitIcon)

        const linkNameGit = document.createElement("p")
        linkNameGit.classList.add("linkName")
        linkNameGit.innerText="Repositório do Github"
        projectLinkItemGit[i].appendChild(linkNameGit) 
    

        const repositoriesLink = document.createElement("a")
        repositoriesLink.classList.add("projectLink")
        repositoriesLink.classList.add("projectLinkRepositories")
        repositoriesLink.setAttribute("href", projectsBd[i].linkRepositories)
        repositoriesLink.setAttribute("target", "_blank")
        projectLinksDiv[i].appendChild(repositoriesLink)

        const projectLinkItemRepositories = document.querySelectorAll(".projectLinkRepositories")

        const repositoriesIcon = document.createElement("i")
        repositoriesIcon.setAttribute("class", "fa-sharp fa-solid fa-window-maximize linkIcon")
        projectLinkItemRepositories[i].appendChild(repositoriesIcon)

        const linkNameRepositories = document.createElement("p")
        linkNameRepositories.classList.add("linkName")
        linkNameRepositories.innerText="Projeto Hospedado"
        projectLinkItemRepositories[i].appendChild(linkNameRepositories)
    }
}