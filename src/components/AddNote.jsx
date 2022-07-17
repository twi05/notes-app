import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AddNote = ({ handleAddNote, text_update, handleDeleteNote }) => {
  const [noteText, setNoteText] = useState(text_update);
  const [wordsCount, setWordsCount] = useState(200);

  const handleChange = async (e) => {
    let content = e.target.value.length;
    if (200 - content >= 0) {
      setNoteText(e.target.value);
      setWordsCount(200 - content);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
      setWordsCount(200);
    }
  };

  useEffect(() => {
    setNoteText(text_update);
    setWordsCount(200 - text_update.length)
  }, [text_update]);


  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add note here"
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{wordsCount} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
