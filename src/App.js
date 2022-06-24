import React from 'react'
import Notes_list from './components/Notes_list'
import {nanoid} from 'nanoid';
const App = () => {
  const [notes,setNotes] = React.useState([
    {
      id:nanoid(),
      text: ' This is my first note',
      date: '15/04/2014'
    },
    {
      id:nanoid(),
      text: ' This is my second note',
      date: '15/04/2014'
    },
    {
      id:nanoid(),
      text: ' This is my third note',
      date: '15/04/2014'
    },
   
  ])

  const addNote=(text)=>{
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    setNotes([...notes, newNote]);
  }

  const deleteNote=(id)=>{
   
   const newNotes =  notes.filter((note)=>note.id !==id);
   setNotes(newNotes);
    
  }
  return (
    <div className='container'>
      <Notes_list notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>



    </div>
  )
}

export default App