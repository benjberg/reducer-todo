import React, {useState} from 'react';

 const TodoForm = props =>{
    console.log('formprops', props)
   const [newTitle,setNewTitle]= useState('')
    const handleChanges = e => {
    setNewTitle(e.target.value);}
    const submitHandler=e => {
      props.add(newTitle);
      e.preventDefault();
      }
    return(
       
        <div>
       <form  className='search'>
        
        <input
          type="text"
          name="task"
          value={newTitle}
          onChange={handleChanges}
        
        />
        <button onClick={submitHandler}>Add</button>
      </form>
      </div>
    )
}
export default TodoForm;