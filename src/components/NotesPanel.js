"use client";
import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

export const NotesPanel = ({ addNote }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    event.preventDefault();
    addNote(newNote);
    setIsExpanded(false);
    setNewNote({ title: "", content: "" });
  };

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <form className="relative w-[480px] p-[15px] rounded-md mx-auto my-30 md:my-20 bg-slate-200 shadow-sm">
        {isExpanded ? (
          <input
            onChange={handleChange}
            value={newNote.title}
            name="title"
            placeholder="Title"
            className="note-primary"
          />
        ) : null}
        <textarea
          className="note-primary"
          onChange={handleChange}
          onClick={expand}
          value={newNote.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        {isExpanded ? (
          <BsPlusCircleFill onClick={submitNote} className="btn" />
        ) : null}
      </form>
    </div>
  );
};
