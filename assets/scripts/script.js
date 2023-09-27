//varaibles
let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")

arrowLeft.addEventListener("click", () => {
    console.log("arrow left");
})

arrowRight.addEventListener("click", () => {
    console.log("arrow right");
})

/* les points */
//récupérer la div .dots
let dotsTag = document.querySelector(".dots")

//une boucle pour créer tous les points
for (let i = 0; i < slides.length; i++) {
    //création des élements span dans la div dots
    let dot = document.createElement("span")
    //ajouter la class .dot à tous les span
    dot.classList.add("dot")
    //condition pour ajouté la class .dot_selected au premier span
    if (i === 0) {
        dot.classList.add("dot_selected")
    }
   
    //ajouter les span à la div parent .dots
    dotsTag.appendChild(dot)
    
}