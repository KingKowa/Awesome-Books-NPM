import removeme from './modules/remove.js';
import Book from './modules/booksclass.js';
import navlinks from './modules/navlinks.js';
import Mybooks from './modules/bklist.js';
import { DateTime } from './modules/luxon.js';



if (localStorage.getItem('books') !== null && localStorage.getItem('books') !== undefined) {
  Book.setBooks(JSON.parse(localStorage.getItem('books')));
}
const books = Book.getBooks();

Mybooks(books);

navlinks();

removeme(Book, Mybooks);

//const dateTime = document.querySelector('.current-date');
//dateTime.innerHTML = new Date().toLocaleDateString() + ',   ' + new Date().toLocaleTimeString();

document.querySelector('.current-date').innerHTML = DateTime.local();
