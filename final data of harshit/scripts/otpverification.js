let optvalidation=()=>{

    event.preventDefault();
//     let otp=document.getElementById("otp").value;
// let firstname=document.getElementById("first-name").value;
var obj={
    firstname:document.getElementById("first-name").value,
    otp:document.getElementById("otp").value
}
localStorage.setItem("userinfo",JSON.stringify(obj))
    if(obj.otp==="409245")
    {
        
        alert("OTP Successful")
            
              
           
window.location.href="index.html"
    }
}