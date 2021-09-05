import React, { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  return(
    <div className="note-div">
      <form>
        <input 
          name="title" 
          onChange={handleChange}
          value={note.title} 
          placeholder="Title" 
        />
        <textarea 
          name="content"
          onChange={handleChange}
          value={note.content} 
          placeholder="Take a note..." 
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;