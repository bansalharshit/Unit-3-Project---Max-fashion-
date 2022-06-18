
    let signup=()=>{
        event.preventDefault();
        let number=document.getElementById("mobile").value;
        if(number){
            alert("OTP has been sent to your Mobile number.")
            localStorage.setItem("userotp",number)
            window.location.href="otp.html"
        }


    }