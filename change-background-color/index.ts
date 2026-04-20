console.log("Hello via Bun!");
document.getElementById("colorSelect")?.addEventListener("change", (e) => {
    const color = e.target as HTMLSelectElement
   console.log("color",color.value)
   document.getElementById("colorBox")!.style.backgroundColor = color.value
})