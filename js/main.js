let cursor = document.querySelector("#cursor")
let body = document.querySelector("body")

document.addEventListener("mousemove", (event) => {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
})