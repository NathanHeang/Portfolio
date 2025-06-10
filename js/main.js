let cursor = document.querySelector("#cursor")
let body = document.querySelector("body")
let lastUpdated = document.querySelector("#lastUpdated")

/*lastUpdated.textContent = "// Last Updated " + document.lastModified + " //"*/

document.addEventListener("mousemove", (event) => {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
})