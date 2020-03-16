import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  console.log('props todo', props)
  
  return (
    <div className="todo-list">
      {props.todo.map(item => (
        <Todo
          key={item.id}
          task={item}
          toggleTask={props.toggle}
        />
      ))}
      <button type='button' className="clear-btn" onClick={props.clear}>
        Clear task
      </button>
    </div>
  );
};

export default TodoList;