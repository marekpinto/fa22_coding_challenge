import React, { useState } from "react";
import { addTask } from "../services/taskServices.js"
import { Button, Form } from "semantic-ui-react"

const CreateTask = () => {
  /* CREATE 'CreateTask' COMPONENT */
  const [task, setTask] = useState('');

  const makeTask = () => {
	  addTask(task);
  }

  return (
   <div>
    <p className='d-flex flex-column align-items-center pt-5'>
      Create Task Component
    </p>
      <Form className="create-task">
	  <Form.Field>
	    <label>Task Name</label>
	    <input placeholder='Task Name' onChange={(e) => setTask(e.target.value)}/>
	  </Form.Field>
	  <Button onClick={makeTask} type='submit'>CREATE</Button>
      </Form>
    </div>
  );
};

export default CreateTask;
