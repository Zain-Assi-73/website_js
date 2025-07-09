var email = document.getElementById("email")
var pass = document.getElementById("pass")
var btnSend = document.getElementById("send")

var emailStorage = localStorage.getItem("Email")
var passwordStorage = localStorage.getItem("Password")

btnSend.addEventListener("click" , Send)
function Send(){
    if(email.value == emailStorage && pass.value == passwordStorage){
        setTimeout(()=>{
            location="index.html"
        },100)
    }else{
        alert("email or password is invalid")
    }
}