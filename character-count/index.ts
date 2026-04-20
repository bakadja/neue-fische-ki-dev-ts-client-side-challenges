console.log("Hello via Bun!");
const p = document.getElementById("charCount")
document.getElementById("textInput")?.addEventListener("input", (e) => {
    console.log((e.target as HTMLTextAreaElement).value)
    const length = (e.target as HTMLTextAreaElement).value.length
    p!.textContent = `${length} characters`
})