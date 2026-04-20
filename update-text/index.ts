console.log("Hello via Bun!");

const btn = document.getElementById("helloBtn") as HTMLButtonElement
const p = document.getElementById("output") as HTMLParagraphElement

btn.addEventListener('click', () => {
    p.textContent = "Hello from TypeScript!"
} )
