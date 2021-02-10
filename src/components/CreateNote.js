import { useState } from "react";

const CreateNote = ({createNote}) => {

  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      note,
      id: Math.floor(Math.random() * 1000),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false
    }
    
    createNote(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea 
            cols="3" 
            className="form-control" 
            placeholder="Write your dream note..." 
            value={note} 
            onChange={e =>setNote(e.target.value)} 
          />
          <button 
            className="btn btn-success mt-3" 
            type="submit" 
          >Add Note</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNote;
