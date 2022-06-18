let data = [];
function Product(p,s,t,d,i){
    this.url = i;
    this.price = p;
    this.description = d;
    this.size = s;
    this.type = t;
}

let p1 = new Product(599,36,"Top","MAX Women Textured Knitted T-shirt","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010657858-Green-Green-1000010657858-8272021_01-2100.jpg");
// console.log(p1);
let p2 = new Product(699,38,"Top","MAX Women Striped Knit Short Sleeves Top","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010684080-Pink-Pink-1000010684080-9032021_01-2100.jpg");
let p3 = new Product(899,40,"Top","MAX Women Printed V-Neck Tunic","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010659592-Red-Red-1000010659592-8272021_01-2100.jpg");
let p4 = new Product(699,42,"Top","MAX Women Printed Round Neck Top","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010684130-Beige-Ivory-1000010684130-8272021_01-2100.jpg");
let p5 = new Product(599,44,"Top","MAX Women Floral Print Three-quarter Sleeves Top","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010659555-Green-Sage-1000010659555-8272021_01-2100.jpg");
let p6 = new Product(399,36,"Top","MAX Women Printed Round Neck T-shirt","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010689554-Grey-Greymel-1000010689554-8272021_01-2100.jpg");
let p7 = new Product(799,36,"Dress","MAX Women Printed Regular Fit A-Line Dress","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011173967-Multicolour-M-1000011173967-10032022_02-2100.jpg");
let p8 = new Product(1099,38,"Dress","MAX Women Floral Embroidered A-Line Dress","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010775726-Pink-PINK-1000010775726-29122021_01-2100.jpg");
let p9 = new Product(899,40,"Dress","MAX Women Embroidered A-Line Ethnic Dress","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011188949-Blue-BLUE-1000011188949-31032022_01-2100.jpg");
let p10 = new Product(899,42,"Dress","MAX Women Printed A-line Dress","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011237442-Pink-PINK-1000011237442-19032022_01-2100.jpg");
let p11 = new Product(1399,44,"Dress","MAX Women Textured A-Line Lace Dress","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011190505-Black-BLACK-1000011190505-07042022_01-2100.jpg");
let p12 = new Product(1199,36,"Bottom","MAX Women Checked Casual Trousers","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010728266-White-WHITE-1000010728266-15122021_01-2100.jpg");
let p13 = new Product(999,38,"Bottom","MAX Women Solid Drawstring Waist Straight Pants","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011058518-Green-SAGE-1000011058518-21032022_01-2100.jpg");
let p14 = new Product(1199,40,"Bottom","MAX Women Solid Casual Trousers","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010945266-Pink-LIGHTPINK-1000010945266-22022022_01-2100.jpg");
let p15 = new Product(1299,42,"Bottom","MAX Women Striped Elasticated Straight Pants","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010979832-Beige-BEIGEP-1000010979832-07032022_01-2100.jpg");
let p16 = new Product(1399,44,"Bottom","MAX Women Solid Elasticated Straight Pants","https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010548780-Beige-OFFWHITEP-1000010548780-8132021_01-2100.jpg");

data.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16);
console.log(data);

localStorage.setItem("product",JSON.stringify(data));

let append = (data) => {
    let products = document.querySelector("#products");
    // let data = JSON.parse(localStorage.getItem("product"))
    products.innerHTML = null;
    data.forEach((el)=>{
        let box = document.createElement("div");
        box.setAttribute("id","box");

        let image = document.createElement("img");
        image.src = el.url;

        let price = document.createElement("h2");
        price.innerText = el.price;

        let description = document.createElement("h4");
        description.innerText = el.description;

        let btn = document.createElement("button");
        btn.setAttribute("class","add");
        btn.innerText = "ADD TO BASKET";
        btn.addEventListener("click",function(){
            addTo(el);
        })

        box.append(image,price,description,btn);
        products.append(box);
    })
}

append(data);

let addTo = (el)=>{
    let cart = JSON.parse(localStorage.getItem("buy")) || [];
    cart.push(el);
    localStorage.setItem("buy",JSON.stringify(cart));
    console.log(cart);
}

let priceSort = () =>{
    let money = document.querySelector("#amount").value;
    let prod = JSON.parse(localStorage.getItem("product"));
    if(money == "low"){
        prod.sort((a,b)=>{
            return a.price-b.price;
        });
        console.log(prod);
        // document.querySelector("#products").innerHTML = null;
        append(prod);
    }
    else if(money == "high"){
        prod.sort((a,b)=>{
            return b.price-a.price;
        });
        // document.querySelector("#products").innerHTML = null;
        append(prod);
    }
}

let sizeSort = () =>{
    let naap = document.querySelector("#size").value;
    let prod = JSON.parse(localStorage.getItem("product"));
    let result = prod.filter((el)=>{
        if(naap == el.size){
            return el;
        }
    });
    console.log(result);
    
    append(result);
}

let typeSort = () =>{
    let type = document.querySelector("#type").value;
    let prod = JSON.parse(localStorage.getItem("product"));
    let result = prod.filter((el)=>{
        if(type == el.type){
            return el;
        }
    });
    console.log(result);
    append(result);
}
