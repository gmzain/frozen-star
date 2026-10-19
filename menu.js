let buttons = document.querySelectorAll(".button")
let search = document.querySelector("#input")
let productCon = document.querySelector(".product-con")
let pCount = document.querySelector(".p-count")

search.addEventListener("input" , () => {
    let value = search.value.toLowerCase()
    let allProducts = document.querySelectorAll(".card")
    allProducts.forEach(p => {
        let name = p.querySelector(".names").innerHTML.toLowerCase()
        if(name.includes(value)){
            p.style.display = "flex"
        }else{
            p.style.display = "none"
        }
    })
})



let count = document.querySelector("#count")
let products = [
    {
        id: 1,
        image: "qeema rolls.jpeg",
        name: "Chicken Roll",
        category: "roll",
        description: "Soft paratha filled with spicy chicken and sauces.",
        price: 450,
        discount: "10%"
    },
    {
        id: 2,
        image: "qeema rolls.jpeg",
        name: "Beef Roll",
        category: "roll",
        description: "Tender beef roll with smoky flavor and mayo sauce.",
        price: 500,
        discount: "12%"
    },
    {
        id: 3,
        image: "qeema rolls.jpeg",
        name: "French Fries",
        category: "fries",
        description: "Crispy golden fries served hot and fresh and spicy.",
        price: 250,
        discount: "15%"
    },
    {
        id: 4,
        image: "qeema rolls.jpeg",
        name: "Pizza Fries",
        category: "fries",
        description: "Loaded fries topped with cheese and pizza sauce.",
        price: 600,
        discount: "20%"
    },
    {
        id: 5,
        image: "qeema rolls.jpeg",
        name: "Chicken Samosa",
        category: "samosa",
        description: "Crunchy samosa stuffed with spicy chicken filling.",
        price: 120,
        discount: "8%"
    },
    {
        id: 6,
        image: "qeema rolls.jpeg",
        name: "Shami Kabab",
        category: "kabab",
        description: "Juicy and flavorful shami kabab with desi spices.",
        price: 300,
        discount: "5%"
    },
    {
        id: 7,
        image: "qeema rolls.jpeg",
        name: "Frozen Mixed Vegetables",
        category: "vegetable",
        description: "Fresh frozen vegetables ready for quick cooking.",
        price: 350,
        discount: "10%"
    },
    {
        id: 8,
        image: "qeema rolls.jpeg",
        name: "Frozen French Fries",
        category: "fries",
        description: "Premium frozen fries for crispy and spicy fast preparation.",
        price: 400,
        discount: "18%"
    }
];

function productFilter(category) {
    if(category === "all"){
        renderProduct(products)
    }else{
        let filtered = products.filter(p => p.category === category)
        renderProduct(filtered)
    }
}

function renderProduct(data = products) {
    productCon.innerHTML = ""

    data.forEach(p => {
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
            let exist = cart.find(i => i.id === p.id)
            if(exist){
                exist.qty += 1
            }else{
                cart.push({
                    ...p,
                    qty: 1
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

pCount.innerHTML = products.length

buttons.forEach(btn => {
    btn.addEventListener("click" , () => {
        let category = btn.getAttribute("data-category")
        productFilter(category)
    })
})