import {useState} from 'react';
import AddToDo from './Component/Adding.js';
import ToDo from './Component/Do.js';
import UpdateTasks from './Component/Update.js';
import Alls from './Component/ForAll.js';

// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);
  
  const [all, setAll] = useState(false);
  const [choose_complete, setComplete] = useState(false);
  const [choose_incomplete, setIncomplete] = useState(false);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const [updateData, setUpdateData] = useState('');
  const [updateDatas,setUpdateDatas] = useState('');


  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  // Add task 
  ///////////////////////////
  const addTask = () => {
    if(newTask) {

      let num = toDo.length + 1; 
      let newEntry = { id: num, title: newTask,desc: newDesc,time: dateTime, status: false, chooseall: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  const addDesc = () => {

    if(newTask) {
      let num = toDo.length + 1000; 
      let newEntry = { id: num,title: newTask, desc: newDesc,time: dateTime, status: false }
      setToDo([...toDo, newEntry])
      setNewDesc('');
    }
    addTask();
  }

  // Delete task 
  ///////////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData('');
    setUpdateDatas('');
  }

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      time:dateTime,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // Update task
  ///////////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  const changeDesc = (e) => {
    let newEntry = {
      id: updateData.id,
      title: updateData.title,
      desc:e.target.value,
      time:dateTime,
      status: updateDatas.status ? true : false
    }
    setUpdateDatas(newEntry);
  }

  // Update task
  ///////////////////////////
  const updateDesc = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateDatas.id );
    let updatedObject = [...filterRecords, updateDatas]
    setToDo(updatedObject);
    console.log(updateDatas);
    setUpdateDatas('');

    // updateTask();
  }

  // const all = false;
  // const choose_complete = false;
  // const choose_incomplete = false;
  const pickAll = () => {
    setAll(!all);
  };

  const pickDone = () =>{
    setComplete(!choose_complete);
  };

  const pickUndone = () =>{
    setIncomplete(!choose_incomplete);
  }

  return (
    <div className="container App">

    <br /><br />
    <div className='Nama'>
      <h1>Andrean Hasan</h1>
      <h4>2501982550</h4>
      <h3>My ToDo List</h3>

    </div>
    
    <br /><br />

    {updateData && updateData ? (
      <UpdateTasks 
        updateData={updateData}
        updateDatas={updateDatas}
        changeTask={changeTask}
        updateTask={updateTask}
        changeDesc={changeDesc}
        updateDesc={updateDesc}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddToDo
        newTask = {newTask}
        setNewTask = {setNewTask}
        newDesc = {newDesc}
        setNewDesc = {setNewDesc}
        addTask = {addTask}
        addDesc = {addDesc}
      />
    )}

    <Alls 
      a = {pickAll}
      b = {pickDone}
      c = {pickUndone}
      />
    {/* Display ToDos */}

    {toDo && toDo.length ? '' : 'ADD NEW TASK :D'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
      aa = {all}
      b = {choose_complete}
      c = {choose_incomplete}
    />  

    </div>
  );
}

export default App;