const UpdateTasks = ({ updateData,updateDatas, changeTask, updateTask,changeDesc, updateDesc, cancelUpdate }) => {
  return(
    <>
      {/* Update Task */}
      <div className="row">
        <div className="col">
          <label for="input-field">Update Task To :</label>
          <div className="pastel-input">
          <input 
            value={ updateData && updateData.title }
            onChange={ (e) => changeTask(e)}
            className="form-control form-control-lg"
          />
          </div>

          <label for="input-field">Enter Your Description :</label>
            <div className="pastel-input">
                <input 
                value={updateDatas && updateDatas.desc}
                onChange={ (e) => changeDesc(e)}
                className="form-control form-control-lg"
                />
            </div>

          
        </div>
        <div className="col-auto">
          <button
            onClick={updateDesc}
            className="btn btn-lg btn-success mr-20"
          >Update</button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg btn-warning"
          >Cancel</button>
        </div>
      </div>
      <br />  
    </>
  )
}

export default UpdateTasks;