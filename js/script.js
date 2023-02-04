
function infos(){
    createSkills()
    createProjects()
}

const css = document.querySelector("#mode")
const modeBtn = document.querySelector("#modeBtn")
const external = document.querySelector("#externalSvg")
const internal = document.querySelector("#internalSvg")
const favicon = document.querySelector("#favicon")
const transition = document.querySelector("#transition")

transition.addEventListener("animationstart", (e) =>{
    transition.style.visibility = "visible"
})

transition.addEventListener("animationend", (e) =>{
    transition.classList.remove("transition")
    transition.style.visibility = "hidden"
})



function changeMode(id){
    transition.classList.add("transition")

    if(id === 1){
        id=2
        css.setAttribute("href", "css/white-style.css")
        modeBtn.setAttribute("onclick", "changeMode("+id+")" )
        internal.style.fill = "var(--especialColor)"
        external.style.fill = "var(--especialColor2)"
        favicon.setAttribute("href","imgs/logos/FavClaro.png")
        modeBtn.innerText="Dark Mode"
    }

    else if(id === 2){
        transition.classList.add("transition")
        css.setAttribute("href", "css/dark-style.css")
        id=1
        modeBtn.setAttribute("onclick", "changeMode("+id+")" )
        internal.style.fill = "var(--especialColor2)"
        external.style.fill = "var(--especialColor)"
        favicon.setAttribute("href","imgs/logos/FavEscuro.png")
        modeBtn.innerText="White Mode"
        
    }
}