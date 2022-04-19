import { useEffect } from "react";
import { useNote } from "../useNote";
import { Footer } from "./Footer";
import "./LandingPage.css";
import { Navbar } from "./Navbar";
import { NoteCard } from "./NoteCard";
import { NoteMaker } from "./NoteMaker";

export const LandingPage = () => {
  const { state, dispatch } = useNote();

  useEffect(() => {
    const getDataFunction = () => {
      const gotData = JSON.parse(localStorage.getItem("dataBase"))
        ? JSON.parse(localStorage.getItem("dataBase"))
        : [];
      dispatch({ type: "GET_DATA", payload: gotData });
    };
    getDataFunction();
  }, []);

  const searchNoteFunction = (data, meter) => {
    if (meter && meter.length > 0) {
      return data.filter((item) =>
        item.title.toLowerCase().includes(meter.toLowerCase())
      );
    }
    return data;
  };
  const searchedNote = searchNoteFunction(state.dataBase, state.searchQuery);
  return (
    <div>
      <Navbar />
      <div className="landing-page-body">
        <div className="landing-page-note-maker-container">
          <NoteMaker />
        </div>
        {state.ourPinnedNotes.length > 0 && <h2>Pinned Notes</h2>}
        <div className="landing-page-pinned-notes-container">
          {state.ourPinnedNotes.map((item) => {
            return <NoteCard type="pin" key={item.id} item={item} />;
          })}
        </div>
        {state.dataBase.length > 0 && <h2> Notes</h2>}
        <div className="landing-page-note-cards-container">
          {searchedNote.map((item) => {
            return <NoteCard item={item} id={item.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
