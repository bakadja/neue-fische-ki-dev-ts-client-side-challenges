console.log("Hello via Bun!");
const p = document.getElementById("hiddenText")
let toggle = true
document.getElementById("toggleBtn")?.addEventListener('click', (e) => {

    console.log("toggle vor",toggle)
    if(p) {
        p.style.display = toggle ? "none" : "block"
        toggle = !toggle
    }
})