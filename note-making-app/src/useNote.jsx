import { act } from "@testing-library/react";
import { createContext, useContext, useReducer } from "react";
const NoteContext = createContext();
const useNote = () => useContext(NoteContext);

const noteReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_DATA":
      const dbCopyToSaveData = [...state.dataBase];
      localStorage.setItem(
        "dataBase",
        JSON.stringify([...dbCopyToSaveData, action.payload])
      );
      return {
        ...state,
        dataBase: [...dbCopyToSaveData, action.payload],
      };
    case "GET_DATA":
      return {
        ...state,
        dataBase: action.payload,
      };
    case "SET_PINNED_NOTES":
      const indexOfPinnedNote = state.dataBase.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexOfPinnedNote !== -1) {
        return state.dataBase.splice(indexOfPinnedNote, 1);
      }

      return {
        ...state,
        ourPinnedNotes: [...state.ourPinnedNotes, action.payload],
      };
    case "SET_UNPINNED_NOTES":
      const ourPinnedNotesCopy = [...state.ourPinnedNotes];

      return {
        ...state,
        ourPinnedNotes: ourPinnedNotesCopy.filter(
          (item) => item.id !== action.payload.id
        ),
        dataBase: [...state.dataBase, action.payload],
      };
    case "DELETE_NOTE":
      const dbCopyToDeleteNote = [...state.dataBase];
      const indexOfDeletedNote = dbCopyToDeleteNote.findIndex(
        (item) => item.id === action.payload.id
      );

      if (indexOfDeletedNote !== -1) {
        dbCopyToDeleteNote.splice(indexOfDeletedNote, 1);
      }
      return {
        ...state,
        dataBase: dbCopyToDeleteNote,
      };
    case "DELETE_NOTE_FROM_ARCHIVE":
      const ourArchivedNotesCopyToDelete = [...state.ourArchivedNotes];

      return {
        ...state,
        ourArchivedNotes: ourArchivedNotesCopyToDelete.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "DELETE_NOTE_FROM_PINNED":
      const ourPinnedNotesCopyToDelete = [...state.ourPinnedNotes];
      return {
        ...state,
        ourPinnedNotes: ourPinnedNotesCopyToDelete.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "SET_ARCHIVED_NOTES":
      const ourDataBaseCopyForArchive = [...state.dataBase];

      return {
        ...state,
        ourArchivedNotes: [...state.ourArchivedNotes, action.payload],
        dataBase: ourDataBaseCopyForArchive.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "UPDATE_NOTE":
      console.log(action.payload);
      const copyForUpdate = [...state.dataBase];
      const indexOfUpdateNote = copyForUpdate.findIndex(
        (item) => item.id === action.payload.id
      );
      copyForUpdate[indexOfUpdateNote] = action.payload;
      return {
        ...state,
        database: copyForUpdate,
      };
    case "SEARCH_NOTE":
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      return state;
  }
};
const initialState = {
  dataBase: [],
  ourPinnedNotes: [],
  searchQuery: [],
  ourArchivedNotes: [],
  labels: [],
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
