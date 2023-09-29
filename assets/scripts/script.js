/********************************/
//CONSTANTES
/********************************/
const arrowRight = document.querySelector(".arrow_right")
const arrowLeft = document.querySelector(".arrow_left")
const dotsTag = document.querySelector(".dots")
const bannerImg = document.querySelector(".banner-img")
const tags = document.querySelector("#banner p")
let allDots = []
//initialization
let i = 0


//fonction pricipale
function main() {
    createDots()
    nextSlide()
    previousSlide()
}
main()

/***************************************/
/* eventListener */
/***************************************/
//fonction pour afficher le slide suivant
function nextSlide() {
    arrowRight.addEventListener("click", () => {
        //supprime la class dot_selected sur le point actuel 
        allDots[i].classList.remove("dot_selected")
        
        //on incrémente le compteur
        i++

        //si on est sur la dernière photo on remet i à 0
        //pour revenir à la première photo
        if (i >= slides.length) {
            i = 0
        }

        //an ajoute la class dot_selected au point suivant
        allDots[i].classList.add("dot_selected")

        //on affiche nos éléments
        showSlide()
    })

}

//fonction pour revenir en arrière
function previousSlide() {
    arrowLeft.addEventListener("click", () => {
        //supprime la class dot_selected sur le point actuel 
        allDots[i].classList.remove("dot_selected")

        //on décrémente i
        i--

        //si on est sur la première photo on remet i égal à 
        //slides.length pour revenir à la dernière photo
        if (i < 0) {
            i = slides.length - 1
        }

        //an ajoute la class dot_selected au point suivant
        allDots[i].classList.add("dot_selected")

        //on affiche nos éléments
        showSlide()
    })
}

/*************************************/
/* les points  */
/*************************************/
//fonction pour générer les dots
function createDots() {
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

    allDots = document.querySelectorAll(".dot")
}

/*********************************************/
/* fonction pour afficher l'image et le tag */
/*******************************************/ 
function showSlide() {
    //on récupère l'image et le texte à afficher
    let nextImgSr = slides[i].image
    let nextTagLine = slides[i].tagLine    

    //on affiche l'image et le tag suivant 
    bannerImg.src = `./assets/images/slideshow/${nextImgSr}`
    tags.innerHTML = `${nextTagLine}`
}
