import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import SearchBox from './components/SearchBox';
import TodoList from './components/TodoList';
let nextId = 1;

const App=()=> {
  const [item, setItem] = useState('')
  const [todos, setTodos] = useState([{
    id: nextId++, 
    item: 'yyyy', 
    isDone: false
  }])
  const [searchValue, setSearchValue] = useState('')

  const displayTodos = searchValue 
    ? todos.filter(todo => todo.item.indexOf(searchValue) !== -1)
    : todos;

  const addItem = () => {
    if (!item) return
    const newTodo = {
      id: nextId++,
      item: item,
      isDone: false
    }
    setTodos([
      ...todos,
      newTodo
    ])
    setItem('')
  }

  const deleteItem = id => {
    const newList = todos.filter(todo => todo.id !== id)
    setTodos(newList)
  }

  const handleChange = (id, e) => {
    const newList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: e.target.checked }
      } else {
        return todo
      }
    })
    setTodos(newList)
  }

  console.log('todos:', todos);

  return (
    <>
      <AddTodo item={item} setItem={setItem} addItem={addItem} />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList 
  todos={displayTodos} 
  onToggle={handleChange} 
  onDelete={deleteItem} 
/>
    </>
  )
}

export default App