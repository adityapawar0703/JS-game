var page1 = document.querySelector("#page1")
var page2 = document.querySelector("#page2")
var page3 = document.querySelector("#page3")

var start = document.querySelector("#page1 button")

start.addEventListener("click",function(){
    page1.style.top = "-100vh";
    page2.style.top = "-100vh";
    page1.style.backgroundColor = "black"

})

var imglink = ""
var pg3imgdiv = document.querySelector("#imgdiv")
var character = document.querySelectorAll(".character")
character.forEach(function (elem) {
    elem.addEventListener("click", function () {
        page2.style.top = "-100vh";
        page3.style.top = "-200vh"
        // console.log(elem.childNodes)
    
         imglink = elem.childNodes[2].getAttribute("src")
        pg3imgdiv.innerHTML = `<img
   src="${imglink}" alt="">`
    })
})

var playground = document.querySelector("#playground")
function createimg(){
  var newimg = document.createElement("img")
  newimg.setAttribute("src",imglink)
  playground.appendChild(newimg)
  console.log(newimg)
  
}
createimg()