import { useState } from "react";
import { useEffect } from "react";
import { useNote } from "../useNote";
import "./NoteCard.css";
export const NoteCard = ({ item, type }) => {
  const { state, dispatch } = useNote();
  const [titleUpdate, setTitleUpdate] = useState(item.title);
  const [noteUpdate, setNoteUpdate] = useState(item.note);
  const [bgColor, setBgColor] = useState(item.bgColor);
  const [labelUpdate, setLabelUpdate] = useState(item.label);

  useEffect(() => {}, []);

  return (
    <div className="note-card-container" style={{ backgroundColor: bgColor }}>
      <div className="note-card-inputs-container">
        <input
          style={{ backgroundColor: bgColor }}
          className="note-card-items"
          value={titleUpdate}
          onChange={(e) => setTitleUpdate(e.target.value)}
          onBlur={() => {
            dispatch({
              type: "UPDATE_NOTE",
              payload: { ...item, title: titleUpdate, note: noteUpdate },
            });
          }}
        />
        <input
          style={{ backgroundColor: bgColor }}
          className="note-card-items"
          value={noteUpdate}
          onChange={(e) => setNoteUpdate(e.target.value)}
          onBlur={() =>
            dispatch({
              type: "UPDATE_NOTE",
              payload: { ...item, title: titleUpdate, note: noteUpdate },
            })
          }
        />
        <input
          style={{ backgroundColor: bgColor }}
          className="note-card-items"
          value={labelUpdate}
          onChange={(e) => setLabelUpdate(e.target.value)}
          onBlur={() =>
            dispatch({
              type: "UPDATE_NOTE",
              payload: { ...item, label: labelUpdate },
            })
          }
        />
      </div>
      {type === "pin" ? (
        <i
          class="note-card-pin-icon fa-solid fa-thumbtack"
          onClick={() =>
            dispatch({ type: "SET_UNPINNED_NOTES", payload: item })
          }
        ></i>
      ) : (
        <i
          class="note-card-pin-icon fa-solid fa-thumbtack"
          onClick={() => dispatch({ type: "SET_PINNED_NOTES", payload: item })}
        ></i>
      )}
      <div className="note-card-bottom">
        <p className="bottom-left-side">
          {new Date(item.createdAt).getHours()}:
          {new Date(item.createdAt).getMinutes()}
        </p>
        <div className="bottom-right-side">
          <input
            className="bottom-right-side-color-input"
            value={bgColor}
            type="color"
            onChange={(e) => setBgColor(e.target.value)}
            onBlur={() => {
              dispatch({
                type: "UPDATE_NOTE",
                payload: { ...item, bgColor },
              });
            }}
          />
          <i class="fa-solid fa-tag"></i>

          {type === "archived" ? (
            false
          ) : (
            <i
              class="note-card-icons fa-solid fa-box-archive"
              onClick={() =>
                dispatch({ type: "SET_ARCHIVED_NOTES", payload: item })
              }
            ></i>
          )}
          {type === "archived" && (
            <i
              class="note-card-icons fa-solid fa-trash-can"
              onClick={() =>
                dispatch({ type: "DELETE_NOTE_FROM_ARCHIVE", payload: item })
              }
            ></i>
          )}
          {type === "pin" && (
            <i
              class="note-card-icons fa-solid fa-trash-can"
              onClick={() =>
                dispatch({ type: "DELETE_NOTE_FROM_PINNED", payload: item })
              }
            ></i>
          )}
          {type === "normal" && (
            <i
              class="note-card-icons fa-solid fa-trash-can"
              onClick={() =>
                dispatch({
                  type: "DELETE_NOTE",
                  payload: item,
                })
              }
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};
