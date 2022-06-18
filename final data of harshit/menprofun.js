let data =[];
 function Product(p,s,t,i)
 {
    this.url=i;
    this.price=p;
    this.description=`MAX Men Checked Slim Fit ${t}`;
    this.size=s;
    this.type=t;
 }
let p1 = new Product(1049,40,"shirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011152296-Blue-BLUE-1000011152296-18042022_01-2100.jpg");
// console.log(p1);
let p2 = new Product(999,44,"shirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011057408-Blue-BLUE-1000011057408-08052022_01-2100.jpg");
let p3 = new Product(1049,48,"shirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011483243-Blue-NAVY-1000011483243-29052022_01-2100.jpg");
let p4 = new Product(499,40,"tshirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011362751-Yellow-MUSTARD-1000011362751-29052022_01-2100.jpg");
let p5 = new Product(399,44,"tshirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009784266-Black-BLACK-1000009784266-22122021_01-2100.jpg");
let p6 = new Product(599,48,"tshirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011216668-Blue-BLUE-1000011216668-18042022_01-2100.jpg");
let p7 = new Product(399,40,"tshirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011362380-Green-LIGHTGREEN-1000011362380-29052022_01-2100.jpg");
let p8 = new Product(999,44,"shirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010805918-Black-BLACK-1000010805918-08022022_01-2100.jpg");
let p9 = new Product(999,48,"shirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011075956-Blue-BLUE-1000011075956-11052022_01-2100.jpg");
let p10 = new Product(599,40,"tshirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011220439-White-WHITE-1000011220439-18042022_01-2100.jpg");
let p11 = new Product(899,44,"tshirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011075906-Red-RED-1000011075906-31032022_01-2100.jpg");
let p12 = new Product(1049,48,"shirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011057343-Yellow-YELLOW-1000011057343-29052022_01-2100.jpg");
let p13 = new Product(499,40,"tshirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000008731720-Blue-Navy-1000008731720-1412020_01-2100.jpg");
let p14 = new Product(999,44,"tshirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010805970-Beige-BEIGE-1000010805970-10032022_01-2100.jpg");
let p15 = new Product(1049,48,"shirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010924936-Red-RED-1000010924936-21042022_01-2100.jpg");
let p16 = new Product(699,40,"shirt","https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010531498-Blue-Navy-1000010531498-7092021_01-2100.jpg");
data.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16);
// console.log(data);
localStorage.setItem("product",JSON.stringify(data));

let append=(data)=>{
    document.querySelector("#container").innerHTML=null;
    data.forEach((el,i)=>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src=el.url;
        let h3 = document.createElement("h3");
        h3.innerText=el.price;
        let p1 =document.createElement("p");
        p1.innerText=el.description;
        let button = document.createElement("button");
        button.innerText="ADD TO BASKET";
        button.addEventListener("click",function(){
            buyProduct(el,i)
        })
        div.append(img,h3,p1,button);
        document.querySelector("#container").append(div);
    })
}
append(data);
let buyProduct =(el,i)=>{
    let arr = JSON.parse(localStorage.getItem("buy"))||[];
    arr.push(el);
    localStorage.setItem("buy",JSON.stringify(arr));
}
let pricesort=()=>{
    let price = document.querySelector("#price").value;
    // console.log(price);
    let data=JSON.parse(localStorage.getItem("product"));
    if(price=="lh"){
        data.sort((a,b)=>{
            return a.price-b.price;
        });
        // console.log(data);
        append(data);
    }else if(price=="hl"){
        data.sort((a,b)=>{
            return b.price-a.price;
        })
        append(data);
    }
}

let sizesorting =()=>{
    let size = document.querySelector("#size").value;
    let data=JSON.parse(localStorage.getItem("product"));
    let result=data.filter((el)=>{
        if(size==el.size){
            return el.size;
        }
    })
    console.log(result);
    append(result);
}

let typesort=()=>{
    let type=document.querySelector("#type").value;
    let data=JSON.parse(localStorage.getItem("product"));
    let result = data.filter((el)=>{
        if(type==el.type){
            return el.type;
        }
    });
    console.log(result);
    append(result);
}

let pricesortt=()=>{
    let price = document.querySelector("#rel").value;
    // console.log(price);
    let data=JSON.parse(localStorage.getItem("product"));
    if(price=="lh"){
        data.sort((a,b)=>{
            return a.price-b.price;
        });
        // console.log(data);
        append(data);
    }else if(price=="hl"){
        data.sort((a,b)=>{
            return b.price-a.price;
        })
        append(data);
    }
}