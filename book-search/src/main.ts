console.log("ready");

type Book = {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  image: string;
  url: string;
};

type SearchResult = {
  status: string;
  total: string;
  books: Book[];
};
const formElt = document.getElementById("search-form") as HTMLFormElement;
const URL = "https://www.dbooks.org/api/search/";

formElt.addEventListener("submit", async (e) => {
  e.preventDefault();

  const bookListElt = document.getElementById("book-list") as HTMLUListElement;

  const form = e.target as HTMLFormElement;

  const formData = new FormData(form);
  const query = formData.get("query") as string;
  console.log("submit", query);

  const books = await fetchBooks(query);
  console.log("books", books);

  render(bookListElt, books);
});

async function fetchBooks(term: string): Promise<Book[]> {
  if (term.length === 0) return [];
  try {
    const res = await fetch(URL + term);
    if (!res.ok) {
      throw new Error(`StatusCode: ${res.status}`);
    }
    const data = (await res.json()) as SearchResult;
    console.log("data", data);
    return data.books.slice(0, 5);
  } catch (error) {
    console.error("Error during fetching", error);
    return [];
  }
}

function render(element: HTMLElement, data: Book[]) {
  console.log(document.body);
  if (data.length === 0) {
    return alert("Not Book Found")
  }
  const elements = data
    .map(
      (book) => `
        <li>${book.title} by ${book.authors.split(" ")[0]}</li>
        `,
    )
    .join("");

  element.innerHTML = elements;
}
