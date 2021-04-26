import React,{ useState } from 'react';
const From=({setInputText,todos,setTodos})=>{
    const inputTextHandler =(e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
      };
    const submitTodoHandler =(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText,completed:false, id:}
        ]);
    };
    return(
        <form>
                <input onChange={inputTextHandler} type="text" className="todo-input" />
                <button cnClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
    </form>
    );
}
export default From;