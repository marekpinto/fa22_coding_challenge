import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react"
import { updateTask, deleteTask } from "../services/taskServices.js";

const Task = ({ task }) => {
  /* CREATE UPDATE OPERATION */
  const [newTask, setNewTask] = useState('');

  const updateData = () => {
	  updateTask(task.task, newTask);
   }
   const deleteData = () => {
	   deleteTask(task.task);
   }
  /* CREATE DELETE OPERATION*/

  return (
    <div className='pb-3 pt-1'>
      <p className='text-center'>{`${task.task}`}</p>
      <div>
	<Form className="update-task">
	  <Form.Field>
	    <label>New Task Name</label>
	    <input placeholder='New Task Name' onChange={(e) => setNewTask(e.target.value)}/>
	  </Form.Field>
	  <Button onClick={updateData} type='submit'>UPDATE</Button>
	  <Button onClick={deleteData} type='submit'>DELETE</Button>
	 </Form>
      </div>
    </div>
  );
};

export default Task;
