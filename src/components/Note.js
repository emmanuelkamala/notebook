import React from 'react';

function Note({note: {date, note, id, isImportant}, toggle_note}) {
  return (
    <div className="card mb-3 mr-4">
      <div className="card-header">{date}</div>
      <div className="card-body">{note}</div>
      <button className="btn" onClick={()=>toggle_note(id)}>{isImportant ? 'Remove from Important' : 'Add to important'}</button>
    </div>
  )
}

export default Note;
