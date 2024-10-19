import { useState } from'react';
function AddTodo({onNewItem}){

  const [todoName,setTodoName]=useState();
  const [dueDate,setDueDate]=useState();

  const handleNameChange=(event)=>{
   setTodoName(event.target.value); 
  };

  const handleDueDateChange=(event)=>{
    setDueDate(event.target.value);  
  };

  const handleAddButton=()=>{
    onNewItem(todoName,dueDate);
    setTodoName("");
    setDueDate("");  
  }

  return  <div className="container-add">
  <div className="myrow row">
    <div className="col-5">
      <input type="text" placeholder='enter task' value={todoName} required onChange={handleNameChange} />
    </div>
    <div className="col-2">
      <input type="date" value={dueDate}  required onChange={handleDueDateChange}/>
    </div>
    <div className="col-2">
    <button type="button" className="mybtn btn btn-success" onClick={handleAddButton}>Add</button>
    </div>
  </div>
  </div>
}
export default AddTodo;