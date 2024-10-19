import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import NoTask from "./Components/noTask";
import { useState } from'react';
import "./App.css";

function App() {

  const initialtodoItem=[];

 const [todoItem, setTodoItems]=useState(initialtodoItem);

 const handleNewItem=(itemName,itemDueDate)=>{
  const newItem=[...todoItem,{name:itemName,dueDate:itemDueDate}]; 
  setTodoItems(newItem);
  console.log(`new item added:${itemName} due date ${itemDueDate}`);
 };

 const deleteItem=(deleteTodoItem)=>{
   const updatedItems=todoItem.filter(item=>item.name!==deleteTodoItem);
   setTodoItems(updatedItems);
 }

  return (<center className="container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem} ></AddTodo>
        {todoItem.length ===0&&<NoTask/>}
       <TodoItems todoItems={todoItem} deleteItem={deleteItem}></TodoItems>
       
        </center>);
}

export default App
