

var links1=document.getElementById("links-1")
var links2=document.getElementById("links-2")
var userName=document.getElementById("username")
var logOut=document.getElementById("logout")

var container=document.getElementById("container")
var cartIcon=document.getElementById("cart-icon")
var cart = document.getElementById("cart")
var cartDiv= document.querySelector("#cart div")
var count = document.getElementById("count")
var total = document.getElementById("total")
var totalPrice= 0


if(localStorage.getItem("First Name")){
    links1.style.display="none" 
    links2.style.display="block" 
    userName.innerHTML = localStorage.getItem("First Name")
}

logOut.addEventListener("click" , Logout)
function Logout(){
    localStorage.clear()
    setTimeout(() =>{
        location = "signup.html"
    },100)
}

var data=[
  {
    id:1,
    title:"Spider-Man 2",
    price:12,
    image:"img1.jpg"
  },

    {
    id:2,
    title:"Grand Theftauto V",
    price:23,
    image:"img2.jpg"
  },
    {
    id:3,
    title:"FiFa 25",
    price:15,
    image:"img3.jpg"
  },
    {
    id:4,
    title:"Call Of Duty MW",
    price:10,
    image:"img4.jpg"
  },
    {
    id:5,
    title:"God Of War Raganok",
    price:17,
    image:"img5.jpg"
  },
    {
    id:6,
    title:"Assassin Greed Mirage",
    price:8,
    image:"img6.jpg",
  }
]

function Draw(){
    var myData =data.map((e)=>{
        return `
                <div class="card over" style="width:250px ;margin:80px auto ; text-align:center ; background:none; border:2px solid #3674B5 ">
  <img class="card-img-top" src="${e.image}" alt="Card image">
  <div class="card-body">
    <h4 class="card-title">${e.title}</h4>
    <p class="card-text">${e.price} $</p>
    <a onclick=Addtocart(${e.id}) class="btn btn-outline-info">Add to Cart</a>
  </div>
</div>

          `
    })
container.innerHTML=myData
}
Draw()



cartIcon.addEventListener("click" , Open)
function Open(){
    if(cart.style.display="none"){
        cart.style.display="block"
    }else{
        cart.style.display="none"
    }
}
if(localStorage.getItem("Products")){
  var products = JSON.parse(localStorage.getItem("Products"))
}else{
  var products = []
}

count.style.display="block"
count.innerHTML=products.length
    products.map((item)=>{
       totalPrice += +(item.price) ;
         cartDiv.innerHTML +=`<span>${item.title} / </span> <span>${item.price}$</span> <br>`
          total.innerHTML = `<p>Total price: ${totalPrice} $</p>`

})
console.log(totalPrice);

function Addtocart(id){
if(localStorage.getItem("First Name")){
      cartDiv.innerHTML=""
    var addedProduct = data.find((item)=>{
        return(item.id == id)
    })
    products=[...products , addedProduct]
   
    products.map((item)=>{
         cartDiv.innerHTML +=`<p>${item.title}</p>`
})
}else{
  alert("Please Login To Add To Cart")
}
count.style.display="block"
count.innerHTML=products.length
    localStorage.setItem("Products" , JSON.stringify(products))
   

}