
const AddToDo = ({ newTask, setNewTask,newDesc,setNewDesc, addDesc }) => {
    return(
      <>
        {/* Add Task */}
        <div className="row">
          <div className="col">
            <label for="input-field">Enter Your Task :</label>
            <div className="pastel-input">
                <input 
                value={newTask}
                onChange={ (e) => setNewTask(e.target.value)}
                className="form-control form-control-lg"
                />
            </div>
            <label for="input-field">Enter Your Description :</label>
            <div className="pastel-input">
                <input 
                value={newDesc}
                onChange={ (e) => setNewDesc(e.target.value)}
                className="form-control form-control-lg"
                />
            </div>
            
          </div>
          <div className="col-auto">
            <button
              onClick={addDesc}
              className="btn btn-lg btn-success"
            >Add Task</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
export default AddToDo;