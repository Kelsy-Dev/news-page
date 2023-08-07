const menuBar = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const menuclose = document.querySelector(".menuclose");


menuBar.addEventListener("click", () => {
        console.log("working");
        navbar.classList.remove("hide")
})

menuclose.addEventListener("click", () => {
        navbar.classList.add("hide");
})
