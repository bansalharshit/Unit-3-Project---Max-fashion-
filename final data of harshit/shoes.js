var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


var datamax_fashion = [
    {
        image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010883910-Pink-BABYPINK-1000010883910-28012022_01-2100.jpg",
        price: "₹ 699",
        pro_name: "MAX Women Textured Lace-Up Sneakers",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011249061-Pink-BLUSH-1000011249061-25032022_01-2100.jpg",
        price: "₹ 799",
        pro_name: "MAX Women Textured Flat Sandals",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010921937-White-WHITE-1000010921937-10032022_02-2100.jpg",
        price: "₹ 999",
        pro_name: "MAX Men Colourblocked Lace-Up Sneakers",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010374391-Green-GREEN-1000010374391-5012022_02-2100.jpg",
        price: "₹ 999 ",
        pro_name: "MAX Women Solid Lace-Up Sneakers",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010571352-Grey-Grey-1000010571352-10072021_02-2100.jpg",
        price: "₹ 699",
        pro_name: "MAX Women Textured V-Strap Slippers ",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010888410-Red-BRICK-1000010888410-16022022_02-2100.jpg",
        price: "₹999",
        pro_name: "MAX Women Solid Flat Sandals",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010682300-Grey-Grey-1000010682300-11042021_02-2100.jpg",
        price: "₹799",
        pro_name: "MAX Women Textured Slip-On Casual Shoes ",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010406477-Black-Black-1000010406477-8132021_02-2100.jpg",
        price: "₹699",
        pro_name: "MAX Women Bow Checked Ballerinas ",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010883910-Pink-BABYPINK-1000010883910-28012022_02-2100.jpg",
        price: "₹699",
        pro_name: "MAX Girls Textured Ballerinas",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010374391-Pink-PINK-1000010374391-5012022_02-2100.jpg",
        price: "₹999",
        pro_name: "MAX Women Solid Lace-Up Sneakers",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010921835-Grey-GREY-1000010921835-22022022_02-2100.jpg",
        price: "₹1499",
        pro_name: "MAX Men Colourblocked Sports Shoes",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010916174-Pink-APRICOT-1000010916174-28012022_02-2100.jpg",
        price: "₹899",
        pro_name: "MAX Women Solid Flat Sandals ",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010374332-Grey-GREY-1000010374332-5012022_02-2100.jpg",
        price: "₹699",
        pro_name: "MAX Women Solid Textured Shoes ",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011158559-Yellow-GOLD-1000011158559-10032022_02-2100.jpg",
        price: "₹499",
        pro_name: "MAX Women Solid Slip-On Flat Sandals",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011003876-Multicolour-M-1000011003876-17032022_01-2100.jpg",
        price: "₹1999",
        pro_name: "MAX Men Colourblocked Color Changing Lace-Up Sneakers",
    },
    {
        image: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010726728-Blue-NAVY-1000010726728-5012022_02-2100.jpg",
        price: "₹399",
        pro_name: "MAX Boys Colourblocked Clogs ",
    }
    ];

    // var add_shoes = JSON.parse(localStorage.getItem("maxdata")) || [];
    // datamax_fashion.map(function(elem){

      
    //  var product_div = document.createElement("div");
       

    //     var img = document.createElement("img");
    //     img.src = elem.image;
    //     img.setAttribute("id","pro_image");

    //     var price = document.createElement("h4");
    //     price.innerHTML = elem.price;
    //     price.setAttribute("id","pro_price");

    //     var name = document.createElement("p");
    //     name.innerHTML = elem.pro_name;
    //     name.setAttribute("id","pro_name");
     
    //     product_div.append(img,price,name);
    //     over_layout.append(product_div);

    //     document.querySelector("#maindiv").append(product_div);
// });
var cartData = JSON.parse(localStorage.getItem("buy")) || []
datamax_fashion.map((el) => {
  let box = document.createElement('div');
  
    // Set Attribute -> { id, class }
    box.setAttribute('class','box');
  
    // Image
    let image = document.createElement('img');
    image.src = el.image;
    // image.setAttribute("class","img")

     // Price
     let price = document.createElement('h3');
     price.textContent = el.price;
  
    // Name
    let name = document.createElement('p');
    name.textContent = el.pro_name;
    // name.setAttribute('class','price')
    
    let overbox = document.createElement("div");
    overbox.className = "hoverlay";

    let btnbox = document.createElement("div");
    btnbox.className = "btnbox";

    let btn = document.createElement("button");
    btn.innerText = "Add to Basket";
    btn.className = "addbtn"
    btn.addEventListener("click",function(){
      addtocart(el);
    })
   
    let inputdiv = document.createElement("div");
    inputdiv.className = "innerdiv";
    inputdiv.className = "extra"

    let input1 = document.createElement("select");

    input1.className = "div1";

    let input2 = document.createElement("select");
 
    input2.className = "div2";
    
   inputdiv.append(input1,input2);


    btnbox.append(inputdiv,btn);
    overbox.append(btnbox);
    
    
    // Append
    box.append(image,price, name,overbox);
    document.getElementById("maindiv").append(box);
  });

  function addtocart(el){
    console.log(el);
    cartData.push(el);
localStorage.setItem("buy",JSON.stringify(cartData));
}

// let sorting=() =>{
//   let price = document.querySelector("#sorting").ariaValueMax;
//   // console.log(price);
//   if(price=="lh"){
//     cartData.sort((a,b) =>{
//       return a.price-b.price;
//     });
//     console.log(data);
//   }
// }
