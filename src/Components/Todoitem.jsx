function TodoItem({todoName,todoDate,deleteItem}){
 
  return <div className="container-item">
  <div className="myrow row">
  <div className="col-5 task">
    {todoName}
  </div>
  <div className="col-2 date">
    {todoDate}
  </div>
  <div className="col-2">
  <button type="button" className="mybtn btn btn-danger" onClick={()=>deleteItem(todoName)} >Delete</button>
  </div>
</div>
</div>
}

export default TodoItem;