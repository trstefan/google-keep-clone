import React from "react";

export const Note = ({ note }) => {
  return (
    <div className="note">
      <h1 className="text-blue-500 font-bold">{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
};
