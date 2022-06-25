import React, { useState, useEffect } from "react";
import NotesList from "./components/Notes_list";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const getNotes = () => {
    const date = new Date();
    let initialNotes = [
      {
        id: nanoid(),
        text: "Your first note.",
        date: date.toLocaleDateString(),
      },
    ];
    let savedNotes = JSON.parse(localStorage.getItem("react-notes-data"));
    console.log(savedNotes);
    if (savedNotes) {
      return savedNotes;
    } else {
      return initialNotes;
    }
  };

  const [notes, setNotes] = React.useState(getNotes());
  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem("react-notes-data"));

  //       console.log("saved notes" + JSON.stringify(savedNotes));
  //   if (savedNotes) {
  //     setNotes(savedNotes);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-data", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("darkMode", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    let theme = false;
    theme = localStorage.getItem("darkMode");
    console.log("THeme" + theme);
    setDarkMode(theme);
  },[]);

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
        <NotesList
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
