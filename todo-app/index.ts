console.log("Hello via Bun!");
const inputEl = document.getElementById("todoInput") as HTMLInputElement;
const listElt = document.getElementById("todoList") as HTMLUListElement
const todos: string[] = [];

document.getElementById("addTodo")?.addEventListener("click", (e) => {
    console.log("click");
    console.log("input value", inputEl.value);
    todos.push(inputEl.value);
    console.log("todos", todos);
    if (todos.length > 0) {
        render(listElt, todos);
    }
});

listElt.addEventListener('click', (e) => {
    const ul = e.target as HTMLUListElement
    const li = ul.closest("li")
    console.log("li",li)
    const index = Number(li?.dataset.id)
    console.log("index",index)
    if(index){
        onDelete(index)
    }
})

function render(element: HTMLElement, data: string[]) {
  const elements = data
    .map(
      (todo, idx) => `
        <li data-id=${idx}>
        <input type="checkbox" id=${idx}>
            ${todo}
            <button>delete</button>
        </li>
        `,
    )
    .join("");
  element.innerHTML = elements;
}

function onDelete(idx: number) {
    const filteredTodos = todos.filter((_, index) => index !== idx)
    todos.length = 0
    todos.push(...filteredTodos)
    render(document.getElementById("todoList") as HTMLUListElement, filteredTodos)
}




