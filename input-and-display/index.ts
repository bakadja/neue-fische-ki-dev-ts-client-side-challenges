console.log("Hello via Bun!");

const nameInput = document.getElementById("nameInput") as HTMLInputElement
document.getElementById("submitBtn")?.addEventListener('click', (e) => {
    document.getElementById("displayName")!.textContent = nameInput.value
})