import React, { useEffect } from "react";
import { useState } from "react";
import CreateNotes from "../Modals/CreateNotes";
import NoteCard from "./NoteCard";

const NotesList = () => {
  const initialArr = localStorage.getItem("noteList")
    ? JSON.parse(localStorage.getItem("noteList"))
    : [];

  const [modal, setModal] = useState(false);
  const [notesList, setNotesList] = useState(initialArr);
  const [search, setSearch] = useState("");
  // console.log(search);

  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(notesList));
  }, [notesList]);

  const toggle = () => {
    setModal(!modal);
  };

  const saveNotes = (noteObj) => {
    let tempNoteList = notesList;
    tempNoteList.push(noteObj);
    localStorage.setItem("noteList", JSON.stringify(tempNoteList));
    setNotesList(tempNoteList);
    setModal(false);
  };

  const deleteNote = (index) => {
    console.log(index);
    let filterNotes = notesList.filter((value, i) => {
      console.log(value);
      console.log(i);
      return i !== index;
    });

    setNotesList(filterNotes);
  };

  const updateListArray = (obj, index) => {
    let tempList = notesList;
    tempList[index] = obj;
    localStorage.setItem("noteList", JSON.stringify(tempList));
    setNotesList(tempList);
    window.location.reload();
  };

  return (
    <>
      <div className="header text-center">
        <h3>Notes</h3>
        <button
          className="btn btn-primary rounded-circle mt-2"
          onClick={() => setModal(true)}
        >
          +
        </button>
        <div className="searchBox">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="task-container">
        {notesList &&
          notesList
            .filter((obj) => {
              return search.toLowerCase() === ""
                ? obj
                : obj.name.toLowerCase().includes(search);
            })
            .map((obj, index) => (
              <NoteCard
                noteObj={obj}
                key={index}
                index={index}
                deleteNote={deleteNote}
                updateListArray={updateListArray}
              />
            ))}
      </div>
      <CreateNotes toggle={toggle} modal={modal} saveNotes={saveNotes} />
    </>
  );
};

export default NotesList;
