const AddTodo = ({ item, setItem, addItem }) => {
return (
    <div>
    <input 
        type="text" 
        id="todo-input"
        name="todo-input"
        value={item} 
        onChange={e => setItem(e.target.value)} 
        placeholder="新しいTodoを入力"
    />
    <button onClick={addItem}>追加</button>
    </div>
)
}

export default AddTodo