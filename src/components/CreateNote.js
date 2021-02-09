import { useState } from "react";

const CreateNote = () => {

  const [note, setNote] = useState('');

  return (
    <div>
      <form action="">
        <div className="form-group">
          <textarea 
            cols="3" 
            className="form-control" 
            placeholder="Write your dream note..." 
            value={note} 
            onChange={e =>setNote(e.target.value)} 
          />
          <button className="btn btn-success mt-3" type="submit">Add Note</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNote;
