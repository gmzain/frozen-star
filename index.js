let aboutContent = document.querySelector(".about-content")
let aboutImage = document.querySelector(".about-img")
let product= document.querySelector(".product")
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

    let productPosition = product.getBoundingClientRect().top
    if(productPosition < window.innerHeight){
        product.classList.add("product-show")
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


let count = document.querySelector("#count")

let productCon = document.querySelector(".product-con")
let products = [
    {
        id: 1,
        image: "qeema rolls.jpeg",
        name: "Chicken Roll",
        description: "Soft paratha filled with spicy chicken and sauces.",
        price: 450,
        discount: "10%"
    },

    {
        id: 2,
        image: "qeema rolls.jpeg",
        name: "Beef Roll",
        description: "Tender beef roll with smoky flavor and mayo sauce.",
        price: 500,
        discount: "12%"
    },

    {
        id: 3,
        image: "qeema rolls.jpeg",
        name: "French Fries",
        description: "Crispy golden fries served hot and fresh and spicy.",
        price: 250,
        discount: "15%"
    },

    {
        id: 4,
        image: "qeema rolls.jpeg",
        name: "Pizza Fries",
        description: "Loaded fries topped with cheese and pizza sauce.",
        price: 600,
        discount: "20%"
    },

    {
        id: 5,
        image: "qeema rolls.jpeg",
        name: "Chicken Samosa",
        description: "Crunchy samosa stuffed with spicy chicken filling.",
        price: 120,
        discount: "8%"
    },

    {
        id: 6,
        image: "qeema rolls.jpeg",
        name: "Shami Kabab",
        description: "Juicy and flavorful shami kabab with desi spices.",
        price: 300,
        discount: "5%"
    },

    {
        id: 7,
        image: "qeema rolls.jpeg",
        name: "Frozen Mixed Vegetables",
        description: "Fresh frozen vegetables ready for quick cooking.",
        price: 350,
        discount: "10%"
    },

    {
        id: 8,
        image: "qeema rolls.jpeg",
        name: "Frozen French Fries",
        description: "Premium frozen fries for crispy and spicy fast preparation.",
        price: 400,
        discount: "18%"
    }
];

function renderProduct() {
    productCon.innerHTML = ""

    products.forEach(p => {
        let card = document.createElement("div")
        card.classList.add("card")

        let imageBox = document.createElement("div")
        imageBox.classList.add("image-box")

        let img = document.createElement("img")
        img.src = p.image
        img.classList.add("img")

        let dataCon = document.createElement("div")
        dataCon.classList.add("data-con")

        let fname = document.createElement("h5")
        fname.innerHTML = p.name
        fname.classList.add("names")

        let dsct = document.createElement("p")
        dsct.innerHTML = p.description
        dsct.classList.add("dsct")

        let hrzn = document.createElement("hr")
        hrzn.classList.add("hrzn")

        let ammount = document.createElement("div")
        ammount.classList.add("ammount")

        let prices = document.createElement("h3")
        prices.innerHTML = "Rs." +  p.price
        prices.classList.add("price")

        let discounts = document.createElement("p")
        discounts.innerHTML = p.discount
        discounts.classList.add("discount")

        let cartCon = document.createElement("div")
        cartCon.classList.add("cartCon")

        let cartbtn = document.createElement("button")
        cartbtn.innerHTML = "+"
        cartbtn.classList.add("cartbtn")

        cartbtn.addEventListener("click" , () => {
          let cart =  JSON.parse(localStorage.getItem("cart")) || [];
            let exist = cart.find(item => item.id === p.id)
            if(exist){
                exist.qty += 1
            }else{
                cart.push({
                    ...p,
                    qty : 1
                })
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            let total = cart.reduce((sum , item) => sum + item.qty , 0)
            count.innerHTML = total
        })

        imageBox.appendChild(img)
        ammount.append(prices , discounts)
        cartCon.append(ammount , cartbtn)
        dataCon.append(fname , dsct , hrzn , cartCon)
        card.append(imageBox , dataCon)
        productCon.appendChild(card)

    })
}
renderProduct()
let pCards = document.querySelectorAll(".card")

window.addEventListener("scroll" , () => {
    pCards.forEach((card , index) => {
        let cardPosition = card.getBoundingClientRect().top
        if(cardPosition < window.innerHeight){
            setTimeout(() => {
                card.classList.add("card-show")
            }, index * 150);
        }
    })
})

let reviews = document.querySelector(".reviews")
let cards = document.querySelectorAll(".review-card")
let index = 0

reviews.style.transform = `translateX(-${index * 320}px)`

function slide(){
    index++
    reviews.style.transition = "0.5s ease"
    reviews.style.transform = `translateX(-${index * 320}px)`
    if(index === cards.length - 1){
        setTimeout(() => {
            reviews.style.transition = "none"
            index = 0
            reviews.style.transform =`translateX(-${index * 320}px)`
        }, 500)
    }
}

setInterval(slide , 2000)