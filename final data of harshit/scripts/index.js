

import navbar from "../components/navbar.js";

console.log(navbar());
document.getElementById("header").innerHTML=navbar();




document.querySelector(".search-box").addEventListener("keydown",myfunc);


function myfunc(e){
    if(e.key==="Enter")
    {
      let search=document.querySelector(".search-box").value;
      if(search==="tshirt" || search==="mentshirt" || search==="Men's tshirt" || search==="man tshirt" || search==="men tshirt" )
      {
        window.location.href="mensproduct1.html";
      }
      else if(search==="tops" || search==="women tops" || search==="woman tops" || search==="woman tshirt" || search==="women tshirt")
      {
        window.location.href="womens_product.html";
      }
      else if(search==="shoes" || search==="man shoes" || search==="woman shoes" || search==="women shoes" || search==="man shoes")
      {
        window.location.href="shoes.html"
      }
    }
    
}


let userinformation = JSON.parse(localStorage.getItem("userinfo"))
document.querySelector(".na2-right-para").innerHTML=`Hi,  ${userinformation.firstname}`

let Basket=document.getElementById("basket")
Basket.addEventListener("click",function(){
  Mufunction();
})

let Mufunction=()=>{

window.location.href="addtocart.html"
}



