import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ toDo,markDone, setUpdateData, deleteTask,aa,b,c }) => {
  return(
    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.status}>
            <div className={aa ||(b && task.status)||(c && !task.status) ? 'choosed' : ''}>
            <div className='backs'>
            
            <div className="col taskBg">
              <div className={ task.status ? 'done' : '' }>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
              <div className="iconsWrap">
                <span title="Completed / Not Completed"
                  onClick={ (e) => markDone(task.id) }
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>

                {task.status ? null : (
                  <span title="Edit"
                    onClick={ () => setUpdateData({ 
                      id: task.id, 
                      status: task.status ? true : false
                    }) }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                )}

                <span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>
            
            
            <div className='Description'>
                <h1>Description:</h1>
                <h4>{task.desc}</h4>
                <div className='Date'>
                    <h5>Input date: {task.time}</h5>
                    <h5>Due date: 17/05/2023</h5>
                </div>

            </div>

            
            </div>
            </div>
          </React.Fragment>
        )
      })
      }  

    </>
  )
}

export default ToDo;