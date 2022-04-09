import { useState, useEffect } from "react";
import { useNote } from "../useNote";
import "./NoteTakingInput.css";
import { NoteCard } from "./NoteCard";

export const NoteTakingInput = () => {
  const { state, dispatch } = useNote();
  const [newNote, setNewNote] = useState("");
  console.log("hey", state.notes);

  useEffect(() => {
    const getData = () => {
      const gotData = JSON.parse(localStorage.getItem("ourNotes"));
      dispatch({ type: "SET_NOTES", payload: gotData });
    };
    getData();
  }, []);

  return (
    <div className="note-taking-input-body">
      <div className="textarea-container">
        <textarea
          onChange={(e) => setNewNote(e.target.value)}
          className="note-taking-input"
        />
      </div>
      <button
        className="note-taking-body-btn"
        onClick={() => {
          dispatch({
            type: "SAVE_NOTE",
            payload: newNote,
          });
        }}
      >
        Save
      </button>
    </div>
  );
};
