const skills = document.querySelector("#skills")

function createSkills(){
    for(let i=0;i<skillsBd.length;i++){
        var starSkills = skillsBd[i].stars
        const cardSkillCreate = document.createElement("div")
        cardSkillCreate.classList.add("card")

        skills.appendChild(cardSkillCreate)
        const cardSkillDiv = document.querySelector("#skills .card")

        const iconSkill = document.createElement("img")
        iconSkill.setAttribute("src","imgs/logos/"+skillsBd[i].icon)
        iconSkill.setAttribute("alt",skillsBd[i].name)
        iconSkill.classList.add("iconSkill")

        cardSkillCreate.appendChild(iconSkill)

        const infos = document.createElement("div")
        infos.classList.add("infos")
        cardSkillCreate.appendChild(infos)

        const divInfos = document.querySelectorAll(".infos")

        const nameSkill = document.createElement("p")
        nameSkill.classList.add("nameSkill")
        nameSkill.innerText = skillsBd[i].name

        divInfos[i].appendChild(nameSkill)

        const knowledge = document.createElement("div")
        knowledge.classList.add("knowledge")
        divInfos[i].appendChild(knowledge)
        const divKnowledge = document.querySelectorAll(".knowledge")

        for(let j=0;j<skillsBd[i].stars;j++){
            const starFill = document.createElement("i")
            starFill.classList.add("fa-solid")
            starFill.classList.add("fa-star")

            divKnowledge[i].appendChild(starFill)

        }

        if(skillsBd[i].stars == "null"){
            divKnowledge[i].innerText="Em breve"
        }

        else{
            for(let j=0;j<5-skillsBd[i].stars;j++){
                const starVoid = document.createElement("i")
                starVoid.classList.add("fa-regular")
                starVoid.classList.add("fa-star")
                

                divKnowledge[i].appendChild(starVoid)
            }
        }

        divInfos[i].style.color = skillsBd[i].color   
    }
}