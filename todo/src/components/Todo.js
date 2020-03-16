import React from 'react';

const Todo = props => {
    console.log('props todo', props)
  return (
     
    <div
    onClick={() => props.toggleTask(props.task.id)}
    className={`item${props.task.completed ? ' completed' : ''}`}
    >
      <p>{props.task.item}</p>
      <p>completed: {props.task.completed ? 'true':'false'}</p>
    </div>
  );
};

export default Todo;