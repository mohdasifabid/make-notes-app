import { useNote } from "../useNote";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { NoteCard } from "./NoteCard";

export const ArchivePage = ({ item }) => {
  const { state } = useNote();
  return (
    <div>
      <Navbar />
      <div className="archive-page-body">
        <h1>Archived notes</h1>
        <div className="archived-notes-container">
          {state.ourArchivedNotes.map((item) => {
            return <NoteCard type="archived" item={item} key={item.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
