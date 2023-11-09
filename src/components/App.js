import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  const [note, setNotes] = useState(notes);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const addNote = () => {
    if (newNote.title.trim() !== "" && newNote.content.trim() !== "") {
      const newNoteObject = {
        key: note.length + 1,
        title: newNote.title,
        content: newNote.content
      };
      setNotes([...note, newNoteObject]);
      setNewNote({ title: "", content: "" });
    }
  };

  const deleteNote = (key) => {
    setNotes(note.filter((note) => note.key !== key));
  };

  return (
    <div>
      <Header />
      <div className="note">
        <input
          type="text"
          placeholder="This is the note title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="This is the note content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button onClick={addNote}> Add</button>
      </div>

      {note.map((note) => (
        <Note
          key={note.key}
          title={note.title}
          content={note.content}
          onDelete={() => deleteNote(note.key)}
        />
      ))}

      <Footer />
    </div>
  );
}
export default App;
