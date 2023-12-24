import './App.css';
import NotesList from './components/NotesList/NotesList';
import Form from './components/Form/Form';
import { useEffect, useState } from "react"

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, [])

  const loadNotes = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/notes`)
      .then((res) => res.json())
      .then((json) => setNotes(json));
  }

  const onRemove = (id) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/notes/${id}`, {
      method: 'DELETE'
    }).then(() => {
        loadNotes();
      })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_BASE_URL}/notes`, {
      method: 'POST',
      body: JSON.stringify({
        id: 0,
        content: e.target[0].value
      })
    }).then(() => {
      loadNotes();
    })
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Notes</h1>
        <button className="refresh" type="button" onClick={() => loadNotes()}>refresh</button>
      </div>

      {
        notes.length > 0 
          ? <NotesList data={notes} onRemove={onRemove} /> 
          : <span>Записок пока что нет</span>
      }

      <Form onSubmit={onSubmit} />
    </div>
  );
}

export default App;
