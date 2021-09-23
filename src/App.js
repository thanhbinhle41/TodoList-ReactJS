import { useState, useEffect } from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import AddToDo from './components/AddToDo/AddToDo'


function App() {
  var localStorageData = JSON.parse(localStorage.getItem('todos'))
  const [todos, setTodos] = useState(localStorageData === null ? [] : localStorageData);

  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [filterList, setFilterList] = useState(todos);


  const levelList = [
    'Nguy cấp' ,
    'Nhắc nhở',
    'Mai làm cũng được'
  ];


  useEffect(() => {
    setFilterList(todos)
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


 
  return (
    <>
      <div className="App">
        <h1>To Do List - Team Web D19</h1>
          <div className="container">
            
            {showAdd ? <AddToDo setNewTodos = {setTodos} todos = {todos} setShowAdd={setShowAdd} 
            showAdd={showAdd} setEditing={setEditing} editing={editing} levelList={levelList}
            setFilterList={setFilterList}> 
            </AddToDo> : null}
           
            <ToDoList setNewTodos = {setTodos}  todos = {todos} setShowAdd={setShowAdd} 
            showAdd={showAdd} setEditing={setEditing} levelList={levelList} 
            filterList={filterList} setFilterList={setFilterList}>
            </ToDoList>
          </div>
      </div>
     
    </>
  );
}

export default App;