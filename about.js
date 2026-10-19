let aboutContent = document.querySelector(".about-content")
let aboutImage = document.querySelector(".about-img")
let trustCard = document.querySelectorAll(".cardd")
let trustHead = document.querySelectorAll(".trust-div")

window.addEventListener("scroll" , () => {
    let contentPosition = aboutContent.getBoundingClientRect().top
    if(contentPosition < window.innerHeight){
        aboutContent.classList.add("about-content-show")
    }

    let imagePosition = aboutImage.getBoundingClientRect().top
    if(imagePosition < window.innerHeight){
        aboutImage.classList.add("about-img-show")
    }

    trustCard.forEach((card , index) => {
        let trustPosition = card.getBoundingClientRect().top
        if(trustPosition < window.innerHeight){
            setTimeout(() => {
                card.classList.add("trust-card-show")
            }, index * 150);
        }
    })

    trustHead.forEach(item => {
        let headPosition = item.getBoundingClientRect().top
        if(headPosition < window.innerHeight){
        item.classList.add("trust-div-show")
    }
    })
   
})