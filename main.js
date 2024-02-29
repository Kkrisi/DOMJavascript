

const azonElem = document.getElementById("azon")
const azonElem2 = document.querySelector("#azon")
console.log(azonElem)
console.log(typeof azonElem)


azonElem.innerHTML = "Alakul a js"


const kartyaElem = document.getElementsByClassName("kartya")
console.log(kartyaElem)

kartyaElem[1].innerHTML = "kukorica farm!!!!"



const kartyaElem2 = document.querySelector(".kartya")
console.log(kartyaElem2)

const kartyaElem3 = document.querySelectorAll(".kartya")
console.log(kartyaElem3)



kartyaElem[2].innerHTML += "<p>Milykeh Dzsekszon</P>"


const buttonElem = document.querySelectorAll("button")[0]
console.log(buttonElem)


buttonElem.addEventListener("click",gombrakattint)

//function gombrakattint(){
//    alert("JáÁÁÁÁÁÁÁÁÁááá, adjad neki fog meg gyer, gyere, gyere!")
//}

function gombrakattint(){
    kartyaElem3[0].innerHTML += kartyaElem3[3].innerHTML;
}