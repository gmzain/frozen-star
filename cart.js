let container = document.querySelector(".cart-container")
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let search = document.querySelector("#input")
let pCount = document.querySelector(".p-count")

search.addEventListener("input" , () => {
    let value = search.value.toLowerCase();
    let allPro = document.querySelectorAll(".card")
    allPro.forEach(p => {
        let name = p.querySelector(".names").innerHTML.toLowerCase()
        if(name.includes(value)){
            p.style.display = "flex"
        }else{
            p.style.display = "none"
        }
    })
})

function rendercart(){
    container.innerHTML = ""
    cart.forEach(p => {
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

        let total = document.createElement("h3")
        total.innerHTML = "Rs." + (p.price * p.qty)
        total.classList.add("price")

        let discounts = document.createElement("p")
        discounts.innerHTML = p.discount
        discounts.classList.add("discount")

        let cartCon = document.createElement("div")
        cartCon.classList.add("cartCon")

        let qtyCon = document.createElement("div")
        qtyCon.classList.add("qty-con")

        let addBtn = document.createElement("button")
        addBtn.innerHTML = "+"
        addBtn.classList.add("add")
        addBtn.addEventListener("click" , () => {
            p.qty++
            saveRender()
        })

        let qtyCount = document.createElement("span")
        qtyCount.innerHTML = p.qty
        qtyCount.classList.add("qty-count")

        let subBtn = document.createElement("button")
        subBtn.innerHTML = "-"
        subBtn.classList.add("sub")

        subBtn.addEventListener("click" , () => {
            if(p.qty > 1){
                p.qty--
            }else{
                cart = cart.filter(i => i.id !== p.id)
            }
            saveRender()
        })

        let buyCon = document.createElement("div")
        buyCon.classList.add("buy-con")

        let buy = document.createElement("button")
        buy.innerHTML = "Buy Now"
        buy.classList.add("buy")

        let remove = document.createElement("button")
        remove.innerHTML = "Remove"
        remove.classList.add("remove")

        remove.addEventListener("click" , () => {
            cart = cart.filter(i => i.id !== p.id)
            saveRender()
        })

        imageBox.appendChild(img)
        ammount.append(total , discounts)
        qtyCon.append(addBtn , qtyCount , subBtn)
        cartCon.append(ammount , qtyCon)
        buyCon.append(buy , remove)
        dataCon.append(fname , dsct , hrzn , cartCon , buyCon)
        card.append(imageBox , dataCon)
        container.appendChild(card)
    });
}
rendercart()
function saveRender(){
    localStorage.setItem("cart", JSON.stringify(cart));
    rendercart()
}

pCount.innerHTML = cart.length