let inputadd = document.querySelector(".input-add")
let cardul = document.querySelector(".card-ul")
let name = document.getElementById("input-value").value;

let inneRhtml = `<li>
            ${name}
        </li>`;
inputadd.click() = function (){
    cardul.innerHTML=inneRhtml;
}