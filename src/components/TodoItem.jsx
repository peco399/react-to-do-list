const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.isDone} 
        onChange={e => onToggle(todo.id, e)} 
      />
      <span className={todo.isDone ? 'done' : ''}>{todo.item}</span>
      <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  )
}

export default TodoItem