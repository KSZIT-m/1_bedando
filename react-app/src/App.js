import { useState } from "react";

function App() {

  const [books, setBooks] = useState([
    { id: 1, title: "Matematika", subject: "Math", publisher: "Mozaik" },
    { id: 2, title: "Történelem", subject: "History", publisher: "OFI" },
    { id: 3, title: "Fizika", subject: "Physics", publisher: "Apáczai" }
  ]);

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [publisher, setPublisher] = useState("");

  const addBook = () => {
    if (!title || !subject || !publisher) {
      alert("Fill all fields!");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      subject,
      publisher
    };

    setBooks([...books, newBook]);

    setTitle("");
    setSubject("");
    setPublisher("");
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const editBook = (id) => {
    const newTitle = prompt("New title:");
    const newSubject = prompt("New subject:");
    const newPublisher = prompt("New publisher:");

    if (newTitle && newSubject && newPublisher) {
      setBooks(
        books.map(book =>
          book.id === id
            ? { ...book, title: newTitle, subject: newSubject, publisher: newPublisher }
            : book
        )
      );
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Book Management (React CRUD)</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />

      <input
        placeholder="Publisher"
        value={publisher}
        onChange={e => setPublisher(e.target.value)}
      />

      <button onClick={addBook}>Add</button>

      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} ({book.subject}) - {book.publisher}
            <button onClick={() => deleteBook(book.id)}>Delete</button>
            <button onClick={() => editBook(book.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;