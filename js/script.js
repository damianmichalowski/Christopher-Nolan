console.log("Moja strona dla praktyki po 3 tygodniach nauki c :");
let button = document.querySelector(".button");
let themeName = document.querySelector(".themeName");
let body = document.querySelector(".body")

button.addEventListener("click", () => {
    body.classList.toggle("dark");


    if (body.classList.contains("dark")) {
        themeName.innerText = "Jasny";
    } else {
        themeName.innerText = "Ciemny";
    }
})


let butonBiggerLetters = document.querySelector(".buttonBiggerLetters")
let biggerLetters = document.querySelector("biggerLetters");
let all = document.querySelector(".all");
let sizeName = document.querySelector(".sizeName");

butonBiggerLetters.addEventListener("click", () => {
    all.classList.toggle("biggerLetters");

    if (all.classList.contains("biggerLetters")) {
        sizeName.innerText = "Zmniejsz";
    } else {
        sizeName.innerText = "Powiększ";
    }
})

let buttonFatterLetters = document.querySelector(".buttonFatterLetters");
let fatnessName = document.querySelector(".fatnessName");
let fatterLetters = document.querySelector(".fatterLetters");


buttonFatterLetters.addEventListener("click", () => {
    all.classList.toggle("fatterLetters");

    if (all.classList.contains("fatterLetters")) {
        fatnessName.innerText = "Odchudz";
    } else {
        fatnessName.innerText = "Pogrub";
    }
})