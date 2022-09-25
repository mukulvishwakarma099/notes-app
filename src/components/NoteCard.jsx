import React, { useState } from "react";
import EditNotes from "../Modals/EditNotes";

const NoteCard = ({ noteObj, index, deleteNote, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateNote = (obj) => {
    updateListArray(obj, index)
  };
  return (
    <div className="me-5 card-wrapper">
      <div className="task-holder">
        <span className="card_header">{noteObj?.name}</span>
        <p className="card_desc ms-2 mt-2">{noteObj?.description}</p>
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit me-3 editBtn"
            onClick={() => setModal(true)}
          ></i>
          <i
            className="fas fa-trash-alt deleteBtn"
            onClick={() => deleteNote(index)}
          ></i>
        </div>
      </div>
      <EditNotes
        modal={modal}
        toggle={toggle}
        updateNote={updateNote}
        noteObj={noteObj}
      />
    </div>
  );
};

export default NoteCard;
