import React from 'react';

// == Importing UUID 
import { v4 as uuidv4 } from 'uuid';

const Form = ({ 
    inputText, setInputText, todos, setTodos, setStatus,
}) => {

    // == EVENTS :
    // 1. Put the input value into the state
    const inputTextHandler = (evt) => {
        setInputText(evt.target.value);
    };

    // 2. Create a new todo and add it to the list of todos
    const submitTodoHandler = (evt) => {
        evt.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: uuidv4()}
        ]);
        setInputText('');
    };

    // 3. Filter the todo list
    const statusHandler = (evt) => {
        setStatus(evt.target.value);
    };

    return (
        <form>
            <input
                type="text"
                className="todo-input"
                onChange={inputTextHandler}
                value={inputText}
            />
            <button
                type="submit"
                className="todo-button"
                onClick={submitTodoHandler}
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select 
                name="todos" 
                className="filter-todo"
                onChange={statusHandler}
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;