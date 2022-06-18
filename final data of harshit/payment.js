
let logo = document.getElementById("logo")
logo.addEventListener("click",function()
{
    logoclick()
})

function logoclick()
{
    window.location.href="index.html"
}

function homedel(e)
{
    e.preventDefault()
    window.location.reload()
}

function collect(e)
{
    e.preventDefault()
    let s1 = document.getElementById("s_methoddiv1")
    s1.style.outline = "0"
    let s2 = document.getElementById("s_methoddiv2")
    s2.style.outline = "2px solid rgb(24, 24, 184)"
    let contactdetails = document.getElementById("contactdetails")
    contactdetails.style.display = "block"
    let shipping = document.getElementById("ship_address")
    shipping.innerHTML = null
    let checkdiv2 = document.getElementById("checkdiv2")
    checkdiv2.innerHTML = null
    let coddiv = document.getElementById("coddiv")
    coddiv.style.display = "none"
    codhr = document.getElementById("codhr")
    codhr.style.display = "none"
    let billingdiv = document.getElementById("form")
    billingdiv.style.display = "block"
    let store = document.getElementById("store")
    store.style.display = "block"
  

}

function paying(e)
{
    e.preventDefault()
    let wrong = document.getElementById("popwrong")
    wrong.style.display = "none"
    let mob = document.getElementById("mobnumber").value
    alert("otp is send to "+mob)
    let overlay = document.getElementById("overlay")
    overlay.style.display = "block"
    popinput.classList.add("open-popinput")
   
}


function paytype(e)
{
    e.preventDefault()
    let cod = document.getElementById("cod").checked

    if(cod)
    {
        let carddiv = document.getElementById("cardselected")
        carddiv.innerHTML = null
    }
    else
    {
        window.location.reload()
    }
}

function billind_add(e)
{
    e.preventDefault()
    let billing = document.getElementById("billing").checked
    if(billing)
    {
        window.location.reload()
    }
    else
    {
        let billingdiv = document.getElementById("form")
        billingdiv.style.display = "block"
    }
}


// get data from cartpage here

// localStorage.setItem("buy",JSON.stringify(data))
let cartdata = JSON.parse(localStorage.getItem("buy"))

append_data(cartdata)

function append_data(data)
{
    let container = document.getElementById("container")
    let sub_tot = 0
    
    data.forEach(function(el)
    {
        let card = document.createElement("div")
        card.classList = "card"

        let image = document.createElement("img")
        image.classList = "image"
        image.src = el.url

        let textbox = document.createElement("div")
        textbox.classList = "textbox"

        let brand = document.createElement("h5")
        brand.classList = "brand"
        brand.innerText = "MAX"

        let desc = document.createElement("h5")
        desc.classList = "desc"
        desc.innerText = el.description

        let qdiv = document.createElement("div")
        qdiv.classList = "qdiv"

        let q = document.createElement("p")
        q.classList = "q"
        q.innerText = "Qty - 1"

        let price = document.createElement("h5")
        price.classList = "price"
        price.innerText ="Price: ₹ " +el.price

        sub_tot = sub_tot + el.price

        let sub_total = document.getElementById("subtotal")
        sub_total.innerText ="₹ "+sub_tot

        let total = document.getElementById("total")
        total.innerText = "₹" +sub_tot
        container.append(card)
        card.append(image,textbox)
        textbox.append(brand,desc,qdiv)
        qdiv.append(q,price)
    })
}



function checkotp(e)
{
    e.preventDefault()
    let otpinput = document.getElementById("otpinput").value
    console.log("checkotp:",otpinput)
    if(otpinput === "1234")
    {
        popcorrect()
    }
    else
    {
        popwrong()
    }
}

function popcorrect()
{
    popinput.classList.remove("open-popinput");
    let correct = document.getElementById("popcorrect")
    correct.style.display = "block"
}

function popwrong()
{
    popinput.classList.remove("open-popinput")
    let wrong = document.getElementById("popwrong")
    wrong.style.display = "block"
}


store()
async function store()
{
    let city = document.getElementById("location").value
    let cityselected = document.getElementById("cityselected")
    cityselected.innerText = city
    let iframe = document.getElementById("gmap_canvas")
    iframe.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}
