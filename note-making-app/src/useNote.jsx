import { createContext, useContext, useReducer } from "react";
const NoteContext = createContext();
const useNote = () => useContext(NoteContext);

const noteReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      localStorage.setItem(
        "ourDataBase",
        JSON.stringify([...state.ourDataBase, action.payload])
      );
      return {
        ...state,
        ourDataBase: [...state.ourDataBase, action.payload],
      };
    case "GET_DATA":
      return {
        ...state,
        ourDataBase: [...state.ourDataBase, action.payload],
      };
    case "SET_PINNED_NOTES":
      const indexOfPinnedNote = state.ourDataBase.indexOf(action.payload);
      if (indexOfPinnedNote !== -1) {
        return state.ourDataBase.splice(indexOfPinnedNote, 1);
      }

      return {
        ...state,
        ourPinnedNotes: [...state.ourPinnedNotes, action.payload],
      };
    case "DELETE_NOTE":
      const indexOfDeletedNote = state.ourDataBase.indexOf(action.payload);
      if (indexOfDeletedNote !== -1) {
        return state.ourDataBase.splice(indexOfDeletedNote, 1);
      }

      return {
        ...state,
        ourTrash: [...state.ourTrash, action.payload],
      };
    case "SET_IMPORTANT_NOTES":
      return {
        ...state,
        ourImpNotes: [...state.ourImpNotes, action.payload],
      };
    case "SET_REMINDER_NOTES":
      return {
        ...state,
        ourReminderNotes: [...state.ourReminderNotes, action.payload],
      };
    case "SET_ARCHIVED_NOTES":
      const indexOfArchivedNote = state.ourDataBase.indexOf(action.payload);
      if (indexOfArchivedNote !== -1) {
        return state.ourDataBase.splice(indexOfArchivedNote, 1);
      }
      return {
        ...state,
        ourArchivedNotes: [...state.ourArchivedNotes, action.payload],
      };
    default:
      return state;
  }
};
const initialState = {
  ourDataBase: [],
  ourPinnedNotes: [],
  ourTrash: [],
  ourImpNotes: [],
  ourReminderNotes: [],
  ourArchivedNotes: [],
};
const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialState);
  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteProvider, useNote };
