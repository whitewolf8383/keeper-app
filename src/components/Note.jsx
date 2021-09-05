import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  function deleteNote() {
    props.onDelete(props.id);
  }

  return(
    <div className="note-div">
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      <button onClick={deleteNote}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;