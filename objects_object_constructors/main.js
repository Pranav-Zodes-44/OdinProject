import Book from "./Book.js";

const dialog = document.getElementById("add-book-dialog");
const showButton = document.getElementById("add-btn");
const closeButton = document.getElementById("close-dialog-btn");
const form = document.getElementById("add-book-form");
const booksList = document.getElementById("books");


let library = [
	new Book('Wawata - Moon Dreaming', 'Dr Hinemoa Elder', 240, false),
	new Book('Waitohu', 'Dr Hinemoa Elder', 256, false),
	new Book('Ahora', 'Dr Hinemoa Elder', 240, false),
];

function addBookToDOM(book) {
	const bookIndex = library.indexOf(book)

	let bookContainer = document.createElement('div');
	bookContainer.id = `book-container-${bookIndex}`
	bookContainer.classList.add(`book-container`)
	
	let bookDiv = document.createElement('div');

	bookDiv.innerText = book.info()
	bookDiv.classList.add('book-card')

	bookDiv.id = `book-${bookIndex}`

	const deleteButton = createDeleteButton(bookIndex, bookContainer);
	const readButton = createReadButton(book, bookDiv, bookIndex);

	bookContainer.append(bookDiv)
	bookContainer.append(deleteButton);
	bookContainer.append(readButton);

	booksList.append(bookContainer)
}

function createDeleteButton(index, bookContainer) {
	let deleteButton = document.createElement('button');
	deleteButton.classList.add('book-icon');
	deleteButton.id = `delete-button-${index}`;
	deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
	deleteButton.addEventListener('click', () => {
		library.splice(index);
		deleteButton.remove();
		bookContainer.remove();
	})
	return deleteButton;
}

function createReadButton(book, bookDiv, index) {
	let readButton = document.createElement('button');
	readButton.classList.add('book-icon');
	readButton.id = `toggle-read-${index}`;
	readButton.innerHTML = '<i class="fa-solid fa-plus"></i>'
	readButton.addEventListener('click', () => {
		book.toggleRead();
		bookDiv.innerText = book.info();
	})
	return readButton;
}

function initLibrary() {
	library.forEach((book) => {
		addBookToDOM(book);
	});
}

function init() {
	initLibrary();

	// "Show the dialog" button opens the dialog modally
	showButton.addEventListener("click", () => {
		dialog.showModal();
	});
  
  	// "Close" button closes the dialog
	closeButton.addEventListener("click", () => {
		dialog.close();
	});

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		const bookTitle = formData.get('book-title');
		const bookAuthor = formData.get('book-author');
		const bookPages = formData.get('book-pages');

		addToLibrary(bookTitle, bookAuthor, bookPages);

		dialog.close();
		form.reset();
	})
}

function addToLibrary(title, author, pages) {
	const newBook = new Book(title, author, pages);
	library.push(newBook);
	addBookToDOM(newBook);
}

init();
