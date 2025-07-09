var links1=document.getElementById("links-1")
var links2=document.getElementById("links-2")
var userName=document.getElementById("username")
var logOut=document.getElementById("logout")
var container = document.getElementById("container")
var data = JSON.parse(localStorage.getItem("Products"))
var total = document.getElementById("total")
var totalPrice = 0


if(localStorage.getItem("First Name")){
    links1.style.display="none" 
    links2.style.display="block" 
    userName.innerHTML = localStorage.getItem("First Name")
}

logOut.addEventListener("click" , Logout)
function Logout(){
    localStorage.clear()
    setTimeout(() =>{
        location = "Signup.html"
    },100)
}

function Draw(){
    var myData =data.map((e)=>{
totalPrice += +(e.price)
        return   `


                <div class="card over" style="width:250px ; margin:80px auto ; text-align:center ; background:none; border:2px solid #3674B5 "">
  <img class="card-img-top" src="${e.image}" alt="Card image">
  <div class="card-body">
    <h4 class="card-title">${e.title}</h4>
    <p class="card-text">${e.price} $</p>
    <a onclick=Delete(${e.id}) class="btn btn-outline-info">delete</a>
  </div>
</div>
          `

    })
container.innerHTML=myData
total.innerHTML= `<h2 style="color:#3674B5 ; margin-left:20px">Total Price: ${totalPrice}$</h2>`
}
Draw()


