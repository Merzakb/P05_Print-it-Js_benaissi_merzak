
/*************************************/
/* les points */
/*************************************/
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

/***************************************/
/* FUNCTIONS */
/***************************************/
//initialization
let i = 0

//fonction pour mettre en surbrillance
//le point qui correspond au slide actuel
function selectedDot() {
    //on récupère toute nos point
    let allDots = document.querySelectorAll(".dot")

    for (let j = 0; j < allDots.length; j++) {
        if (j === i) {
            //si l'index de la photo et le même que celui du point
            //on ajoute la classe .dot_selected
            allDots[j].classList.add("dot_selected")
        } else {
            //sinon on la supprime
            allDots[j].classList.remove("dot_selected")
        }
    }
}

//fonction pour afficher l'image et le tag 
function showSlide() {
    //on récupère l'image et le texte à afficher
    let nextImgSr = slides[i].image
    let nextTagLine = slides[i].tagLine

    //on récupère les élements html où afficher img et tag
    let bannerImg = document.querySelector(".banner-img")
    let tags = document.querySelector("#banner p")

    //on affiche l'image et le tag suivant 
    bannerImg.src = `./assets/images/slideshow/${nextImgSr}` 
    tags.innerHTML = `${nextTagLine}`
}


//fonction pour avancer
function nextSlide () {
    //on incrémente le compteur
    i++

    //si on est sur la dernière photo on remet i à 0
    //pour revenir à la première photo
    if (i >= slides.length) {
        i = 0
    }

    //on affiche nos éléments grâce a ces fonctions
    showSlide()
    selectedDot()
   
}


//fonction pour revenir en arrière
function previousSlide () {
    //on décrémente i
    i--

    //si on est sur la première photo on remet i égal à 
    //slides.length pour revenir à la dernière photo
    if (i < 0) {
        i = slides.length -1
    }

    //on affiche nos éléments grâce a ces fonctions
    showSlide()
    selectedDot()
}

/***************************************/
/* eventListener */
/***************************************/
//next slide
let arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener("click", () => {
    //au click, on exécute  cette fonction
    nextSlide()
    
})


//previous slide
let arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", () => {
    //au click, on exécute  cette fonction
    previousSlide()
})