let books = [];

const input = document.getElementById('bookInput');
const addBtn = document.getElementById('addBtn');
const bookList = document.getElementById('bookList');

function renderBooks() {
  bookList.innerHTML = '';
  if (books.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'No books yet.';
    bookList.appendChild(p);
    return;
  }
  books.forEach((book, idx) => {
    const li = document.createElement('li');
    li.textContent = `${idx + 1}. ${book}`;
    bookList.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if (!val) return alert('Enter a book name.');
  books.push(val);
  input.value = '';
  renderBooks();
});

renderBooks();
