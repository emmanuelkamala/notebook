import Note from './Note'; 

function AllNotes({notes}) {
  console.log(notes);
  return (
    <div className="my-3">
      <h3>All Notes</h3>
      {
        notes.map(note => <Note key={note.id} note={note} />)
      }
    </div>
  )
}

export default AllNotes;
