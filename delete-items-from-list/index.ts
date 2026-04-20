console.log("Hello via Bun!");

console.log("Hello via Bun!");

const itemInputElt = document.getElementById("itemInput") as HTMLInputElement;
const itemListElt = document.getElementById("itemList") as HTMLUListElement;

document.getElementById("addBtn")?.addEventListener("click", () => {
  const li = document.createElement("li");
  const btn = document.createElement("button");

  btn.append("Delete");
  btn.style.marginLeft = ".5em";
  btn.style.marginTop = ".5em";

  li.append(itemInputElt.value);
  li.append(btn);
  itemListElt.append(li);
  itemInputElt.value = "";

  btn.addEventListener("click", () => {
    //console.log("li", li);
    li.remove();
  });
});
