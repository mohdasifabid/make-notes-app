import { useNote } from "../useNote";
import "./NoteCard.css";
export const NoteCard = ({ item }) => {
  const { state, dispatch } = useNote();
  return (
    <div className="note-card-container">
      <p className="note-card-items"> {item.title}</p>
      <p className="note-card-items"> {item.note}</p>
      <i
        class="note-card-pin-icon fa-solid fa-thumbtack"
        onClick={() => dispatch({ type: "SET_PINNED_NOTES", payload: item })}
      ></i>
      <i
        class="note-card-icons fa-solid fa-star"
        onClick={() => dispatch({ type: "SET_IMPORTANT_NOTES", payload: item })}
      ></i>
      <i
        class="note-card-icons fa-solid fa-bell"
        onClick={() => dispatch({ type: "SET_REMINDER_NOTES", payload: item })}
      ></i>
      <i
        class="note-card-icons fa-solid fa-box-archive"
        onClick={() => dispatch({ type: "SET_ARCHIVED_NOTES", payload: item })}
      ></i>
      <i
        class="note-card-icons fa-solid fa-trash-can"
        onClick={() => dispatch({ type: "DELETE_NOTE", payload: item })}
      ></i>
    </div>
  );
};
