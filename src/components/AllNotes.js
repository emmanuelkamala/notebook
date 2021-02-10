import Note from './Note'; 

function AllNotes({notes, toggle_note}) {
  console.log(notes);
  return (
    <div className="my-3">
      <h3>All Notes</h3>
      {
        notes.map(note => <Note key={note.id} note={note} toggle_note={toggle_note} />)
      }
    </div>
  )
}

export default AllNotes;
