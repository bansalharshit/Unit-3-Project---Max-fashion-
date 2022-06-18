var cartdata=JSON.parse(localStorage.getItem("buy"))
var total = cartdata.reduce(function (sum, elem) {
return sum +Number(elem.price);
}, 0);

var length = cartdata.length;


document.querySelector("#productadd").innerText = ` ${length} Product`;

document.querySelector("h4").innerText = ` Rs ${total}`;
document.querySelector("#total").innerText = ` Rs ${total}`;

cartdata.map(function (elem,index) {
var box = document.createElement("div");

var img = document.createElement("img");
img.src = elem.url;
img.setAttribute("class","product")

var price = document.createElement("p");
price.innerText = elem.price;
// price.setAttribute("id","pri")

var des = document.createElement("p");
des.innerText = elem.description;

var size = document.createElement("p");
size.innerText = elem.size;

var type = document.createElement("p");
type.innerText = elem.type;


var btn=document.createElement("button")
btn.innerText="Remove"
btn.setAttribute("class","re")
btn.addEventListener("click",function(){
removeitem(elem,index)  
 })
box.append(img, price,des,size,type,btn);

document.querySelector("#box").append(box);
});
//   function removeitem(){
//   (event.target.parentNode.remove())
//   }
function removeitem(elem,index){
    

cartdata.splice(index,1) 
localStorage.setItem("buy",JSON.stringify(cartdata))
window.location.reload()
}