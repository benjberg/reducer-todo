import React, {useState, useReducer} from 'react';
import {reducer, initialState} from './reducers/reducer';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


function App() {
  const [state, dispatch]= useReducer(reducer, initialState);
  console.log(state);
  const addItem = itemName => {
    dispatch({type: 'add_item', payload: itemName})
  };
   const toggleTask = clickedItemId => {
    dispatch({type: 'toggle_status', payload: clickedItemId})
  }
  const clearItem = () => {
    dispatch({type:'remove_completed', payload: '' })
  }
  return (
    <div className="App">
     <h2> ToDo</h2>
     <TodoForm add={addItem} />
    
    <div>
    <TodoList todo={state} toggle={toggleTask} clear={clearItem}/>
    </div>
    </div>
  );
}

export default App;
