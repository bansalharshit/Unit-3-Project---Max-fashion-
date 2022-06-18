

let imgArr=["https://lmsin.net/cdn-cgi/image/w=1232,q=85,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner1-desktop-WMCOMMON-14JUNE2022.gif","https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner2-desktop-Men-08JUNE2022.jpg","https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner3-desktopp-Men-08JUNE2022.jpg","https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner4-desktopp-Men-08JUNE2022.jpg"];
let i=0;
let id;
let slideShow=(arr)=>{
    let first =arr[0];
    let img = document.createElement("img");
    img.src=first;
    document.querySelector("#slideShow").append(img);
    id = setInterval(function(){
        let url = arr[i];
            img.src=url;
            console.log(i);
            document.querySelector("#slideShow").append(img);
            i++;
            if(i=== arr.length)
            {
                i=0;
            }   
    },5000);
}
function main(){
    document.querySelector("#slideShow").value=null;
    slideShow(imgArr);
}
function clearInterval(){
    clearInterval(id);
}
// clearInterval(id);
main();

let gotomenproduct=()=>{
    window.location.href="mensproduct1.html";
}
