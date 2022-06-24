import React, { useState, useEffect } from "react";
import Notes_list from "./components/Notes_list";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      text: " This is my first note",
      date: "15/04/2014",
    },
    {
      id: nanoid(),
      text: " This is my second note",
      date: "15/04/2014",
    },
    {
      id: nanoid(),
      text: " This is my third note",
      date: "15/04/2014",
    },
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-data"));

        console.log("saved notes" + JSON.stringify(savedNotes));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}  `}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <Notes_list
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
