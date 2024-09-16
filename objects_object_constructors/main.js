import Book from "./Book.js";

let library = [
    new Book('Wawata - Moon Dreaming', 'Dr Hinemoa Elder', 240, false),
    new Book('Waitohu', 'Dr Hinemoa Elder', 256, false),
    new Book('Ahora', 'Dr Hinemoa Elder', 240, false),
];

library.forEach((book) => {
    let bookDiv = document.createElement('div');
    bookDiv.innerText = book.info()
    bookDiv.classList.add('book-card')
    document.getElementById("books").append(bookDiv)
});