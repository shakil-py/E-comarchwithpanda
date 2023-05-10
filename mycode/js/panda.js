const h1tags = document.getElementsByTagName("h2")
for (tag of h1tags) {
    tag.style.color = "red"
}
document.getElementById("bagpack").style.backgroundColor = "lightgreen"

function clickhandel() {
    console.log("Hi I am Shakil Haque")
}
const classesbtn = document.getElementsByClassName("btn")
for (btn of classesbtn) {
    btn.addEventListener("click", function () {
        document.querySelector(".btn").parentNode.removeChild(document.querySelector(".btn"))
    })
}
document.getElementById("form").addEventListener("dblclick", function () {
    document.getElementById("form").style.backgroundColor = "red"
}
)
document.getElementById("exampleInputEmail1").addEventListener("keyup", function(){
    const text = document.getElementById("exampleInputEmail1").value
    console.log(text)
    if (text.includes("gmail")){
        document.getElementById("mail-submit").removeAttribute("disabled")
    }
}) 