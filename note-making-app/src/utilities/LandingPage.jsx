import axios from "axios";
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
    const getNotes = async () => {
      const token = localStorage.getItem("encodedToken");
      const response = await axios.get("/api/notes", {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        dispatch({ type: "GET_NOTES", payload: response.data.notes });
      }
    };
    getNotes();
  }, []);

  const searchNoteFunction = (data, meter) => {
    if (meter && meter.length > 0) {
      return data.filter((item) =>
        item.title.toLowerCase().includes(meter.toLowerCase())
      );
    } else {
      return data;
    }
  };
  const filteredNotes = searchNoteFunction(state.notes, state.searchQuery);

  return (
    <div>
      <Navbar />
      <div className="landing-page-body">
        <div className="landing-page-note-maker-container">
          <NoteMaker />
        </div>
        {state.pinnedNotes.length > 0 && <h2>Pinned Notes</h2>}
        <div className="landing-page-pinned-notes-container">
          {state.pinnedNotes.map((item) => {
            return <NoteCard type="pin" key={item._id} item={item} />;
          })}
        </div>
        <div className="landing-page-note-cards-container">
          {filteredNotes.map((item) => {
            return <NoteCard item={item} key={item._id} type="newNote" />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
