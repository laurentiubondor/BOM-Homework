console.log(window.location.href);

const container = document.getElementById("container")

const buton = document.createElement('button')
buton.innerText = "schimbaUrl"
buton.id = "btn"

container.appendChild(buton)

function schimbaUrl() {
    console.log("ceva")


    window.location.href = "https://google.com"




}

buton.addEventListener("click", schimbaUrl)


document.cookie = "username=Ion";
var x = document.cookie;
console.log(x)