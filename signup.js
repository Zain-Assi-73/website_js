var fname=document.getElementById("Fname")
var lname=document.getElementById("Lname")
var email=document.getElementById("email")
var pass=document.getElementById("password")
var btnSend=document.getElementById("send")

btnSend.addEventListener("click" , Send)

function Send(){
    if(fname.value===""||
        lname.value==="" ||
        email.value==="" ||
        pass.value==="")
    {
alert("Please fill all inputs")
    }
    else{
        localStorage.setItem("First Name" , fname.value)
        localStorage.setItem("Last Name" , lname.value)
        localStorage.setItem("Email" , email.value)
        localStorage.setItem("Password", pass.value)
        setTimeout(()=>{
            location="Login.html"
        },1000)
    }
}