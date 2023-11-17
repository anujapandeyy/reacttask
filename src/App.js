import React, {useState} from 'react'
import './App.css';
import Addtask from './components/Addtask';
import TodoElements from './components/TodoElements'; 


function App() {
  const [ListTodo,setListTodo]=useState([]);
  let listInput= (AddText)=> {
    //to update the array
    setListTodo([...ListTodo,AddText]);

  }
  const deleteitem=(key)=> {
    //adding to a new list
    let newListTodo=[...ListTodo];
    //to remove
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="todoapp">
      
       <div className="center-container">
       <h1>TO DO LIST</h1>
       <br />
       <hr />
       <br />
       <Addtask listInput={listInput}/>

        {ListTodo.map((ListItem,i)=> {
        return (

          <TodoElements key={i} index={i} item={ListItem} itemDelete={deleteitem}/>
        )
        
      })}
      <TodoElements />
    </div>
    </div>
  );
}

export default App;
