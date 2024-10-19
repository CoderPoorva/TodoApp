import TodoItem from "./Todoitem";

function TodoItems({todoItems,deleteItem}){
  return  <div>
    {todoItems.map(items=><TodoItem todoName={items.name} todoDate={items.dueDate} deleteItem={deleteItem}></TodoItem>)}
  </div>
  
}
export default TodoItems;