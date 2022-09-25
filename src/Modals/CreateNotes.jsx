import React from "react";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateNotes = ({ toggle, modal, saveNotes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTitle(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    let noteObj = {};
    noteObj["name"] = title;
    noteObj["description"] = description;
    saveNotes(noteObj);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Note</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                name="taskName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-2">
              <label>Description</label>
              <textarea
                className="desc form-control"
                rows="5"
                value={description}
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateNotes;
