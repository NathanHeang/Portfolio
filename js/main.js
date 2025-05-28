let cursor = document.querySelector("#cursor")
let body = document.querySelector("body")

document.addEventListener("mousemove", (event) => {
    body.style.backgroundPositionX = event.pageX/-4 + "px";
    body.style.backgroundPositionY = event.pageY/-4 + "px";
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
})