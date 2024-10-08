export default function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.info = function() {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'}`
	}

	this.toggleRead = function() {
		this.read = !this.read;
	}
}