import Note from './Note'; 

function ImportantNotes({notes, toggle_note}) {
  return (
    <div className="importantnotes">
      <h4>Important Notes</h4>
      <div className="row">
        {
          notes.filter(note => note.isImportant === true).map(note => <Note note={note} toggle_note={toggle_note} key={note.id} />)
        }
      </div>
    </div>
  )
}

export default ImportantNotes
