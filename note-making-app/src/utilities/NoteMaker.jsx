import { useState, useEffect } from "react";
import { useNote } from "../useNote";
import { v4 as uuid } from "uuid";
import "./NoteMaker.css";

export const NoteMaker = () => {
  const { state, dispatch } = useNote();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const noteWithDetails = { id: uuid(), title: title, note: note };

  const setData = () => {
    dispatch({ type: "SET_DATA", payload: noteWithDetails });
  };

  useEffect(() => {
    const getData = () => {
      const gotData = JSON.parse(localStorage.getItem("ourDataBase"));
      dispatch({ type: "GET_DATA", payload: gotData });
    };
    getData();
  }, []);
  return (
    <div className="inputs-container">
      <input
        className="title-input inputs"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="note-input inputs"
        placeholder="Take a note..."
        onChange={(e) => setNote(e.target.value)}
      />
      <i class="pinned-icon fa-solid fa-thumbtack"></i>
      <button className="note-maker-btn" onClick={setData}>
        Save
      </button>
    </div>
  );
};

{
  /* <div>
        {state.ourDataBase.map((item) => {
          return <NoteCard item={item} key={item.id} />;
        })}
      </div> */
}
