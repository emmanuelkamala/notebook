import React from 'react';

function Note({note: {date, note, id}, toggle_note}) {
  return (
    <div className="card mb-3">
      <div className="card-header">{date}</div>
      <div className="card-body">{note}</div>
      <button className="btn" onClick={()=>toggle_note(id)}>Add</button>
    </div>
  )
}

export default Note;
