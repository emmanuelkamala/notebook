import React from 'react';

function Note({note: {date, note}}) {
  return (
    <div className="card mb-3">
      <div className="card-header">{date}</div>
      <div className="card-body">{note}</div>
      <button className="btn">Add</button>
    </div>
  )
}

export default Note;
