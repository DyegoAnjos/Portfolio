const projects = document.querySelector("#projects")

function createProjects(){
    for(var i=0;i<projectsBd.length;i++){
        const card=document.createElement("div")
        card.classList.add("card")
        projects.appendChild(card)
        const cardDiv=document.querySelectorAll("#projects .card")

        const linkProject = document.createElement("a")
        linkProject.setAttribute("href", projectsBd[i].linkProjects)
        linkProject.setAttribute("target", "_blank")
        linkProject.classList.add("projectsIcon")
        cardDiv[i].appendChild(linkProject)
        const linkDiv = document.querySelectorAll(".projectsIcon")


        const projectsImg=document.createElement("img")
        projectsImg.setAttribute("src", "imgs/Projetos/"+projectsBd[i].photo)
        projectsImg.setAttribute("alt", projectsBd[i].name)
        linkDiv[i].appendChild(projectsImg)

        const infosProjects = document.createElement("div")
        infosProjects.classList.add("infos")
        infosProjects.classList.add("infoProjects")
        cardDiv[i].appendChild(infosProjects)
        const infosProjectsDiv = document.querySelectorAll(".infoProjects")

        const stacks = document.createElement("div")
        stacks.classList.add("skills")
        infosProjectsDiv[i].appendChild(stacks)
        const stacksDiv=document.querySelectorAll(".skills")
        
        const description=document.createElement("p")
        description.classList.add("projectsDesc")
        description.innerText=projectsBd[i].description
        infosProjectsDiv[i].appendChild(description)

        for(let j=0;j<projectsBd[i].Skills.length;j++){
            const habilidadesUsadas = document.createElement("img")
            habilidadesUsadas.setAttribute("src","imgs/logos/"+projectsBd[i].Skills[j])
            habilidadesUsadas.setAttribute("alt", "linguagem")
            habilidadesUsadas.classList.add("iconSkill")
            stacksDiv[i].appendChild(habilidadesUsadas)
        }
    }
}