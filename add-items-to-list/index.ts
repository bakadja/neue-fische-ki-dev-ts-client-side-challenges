console.log("Hello via Bun!");

const itemInputElt = document.getElementById("itemInput") as HTMLInputElement
const itemListElt = document.getElementById("itemList") as HTMLUListElement

document.getElementById("addBtn")?.addEventListener('click', () => {
    const li = document.createElement('li')
    li.append(itemInputElt.value)
    itemListElt.append(li)
    itemInputElt.value = ""
} )