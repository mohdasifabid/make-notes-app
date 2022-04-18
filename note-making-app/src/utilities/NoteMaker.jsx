import { useState } from "react";
import { useNote } from "../useNote";
import { v4 as uuid } from "uuid";
import "./NoteMaker.css";

export const NoteMaker = () => {
  const { state, dispatch } = useNote();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [label, setLabel] = useState("");

  const noteWithDetails = {
    id: uuid(),
    title: title,
    note: note,
    createdAt: new Date(),
    bgColor: "#fff",
    label: label,
  };

  const saveData = () => {
    if (title.length > 0 && note.length > 0) {
      dispatch({ type: "SAVE_DATA", payload: noteWithDetails });
      setTitle((titleInput.value = ""));
      setNote((noteInput.value = ""));
      setLabel((labelInput.value = ""));
    } else {
      alert("Title & Notes field are mandetory");
    }
  };

  return (
    <div className="inputs-container">
      <input
        autoComplete="off"
        id="titleInput"
        className="title-input inputs"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        autoComplete="off"
        id="noteInput"
        className="note-input inputs"
        placeholder="Take a note..."
        onChange={(e) => setNote(e.target.value)}
      />
      <input
        autoComplete="off"
        id="labelInput"
        className="label-input inputs"
        placeholder="Label"
        onChange={(e) => setLabel(e.target.value)}
      />
      <button className="note-maker-btn" onClick={saveData}>
        Save
      </button>
    </div>
  );
};
