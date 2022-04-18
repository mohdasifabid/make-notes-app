import { useNote } from "../useNote";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { NoteCard } from "./NoteCard";

export const LabelsPage = ({ item }) => {
  const { state } = useNote();
  return (
    <div>
      <Navbar />
      <div className="archive-page-body">
        <h1>Labelled notes</h1>
        <div className="archived-notes-container">
          {state.dataBase.map((item) => {
            return <NoteCard type="label" item={item} key={item.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
