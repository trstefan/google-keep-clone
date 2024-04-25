"use client";
import { Header } from "@/components/Header";
import { NotesPanel } from "@/components/NotesPanel";
import { Note } from "@/components/Note";
import { useState } from "react";

export default function Home() {
  const [notes, setNewNotes] = useState([]);

  const addNote = (newNote) => {
    setNewNotes((prevItems) => {
      return [...prevItems, newNote];
    });
  };
  return (
    <main className="text-fuchsia-700">
      <Header />
      <NotesPanel addNote={addNote} />
      {notes.length == 0 ? (
        <h1> No notes</h1>
      ) : (
        notes.map((note, index) => <Note note={note} key={index} />)
      )}
    </main>
  );
}
