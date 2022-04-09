import { useNote } from "../useNote";
import { Footer } from "./Footer";
import "./LandingPage.css";
import { Navbar } from "./Navbar";
import { NoteCard } from "./NoteCard";
import { NoteMaker } from "./NoteMaker";

export const LandingPage = () => {
  const { state } = useNote();
  console.log(state.ourDataBase);
  return (
    <div>
      <Navbar />
      <div className="landing-page-body">
        <div className="landing-page-note-maker-container">
          <NoteMaker />
        </div>
        <div className="landing-page-pinned-notes-container">
          {state.ourPinnedNotes.map((item) => {
            return <NoteCard key={item.id} item={item} />;
          })}
        </div>
        <div className="landing-page-note-cards-container">
          {state.ourDataBase.map((item) => {
            return <NoteCard key={item.id} item={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
