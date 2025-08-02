const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <input 
        type="checkbox" 
        checked={todo.isDone} 
        onChange={e => onToggle(todo.id, e)} 
      />
      <span className={todo.isDone ? 'done' : ''}>{todo.item}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  )
}

export default TodoItem