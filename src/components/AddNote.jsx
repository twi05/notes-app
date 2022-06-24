import React from "react";
import { useState } from "react";

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState("");
  const [wordsCount, setWordsCount]= useState(200);
  const handleChange = async(e) => {
      let content = e.target.value.length;
if(200 - content>=0)
{
   setNoteText(e.target.value);
    setWordsCount(200 - content);
}
  };
  const handleSaveClick =()=>{
    if(noteText.trim().length >0){

        handleAddNote(noteText);
        setNoteText("");
    }
    
  };
  return (
    <div className="note new">
      <textarea
        name=""
        id=""
        cols="10"
        rows="8"
        placeholder="Type to add note here"
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{wordsCount} Remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
