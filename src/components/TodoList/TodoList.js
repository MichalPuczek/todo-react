import React from 'react';

// Importing COMPONENTS
import Todo from '../Todo/Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {



    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map((todo) => {
                        return (
                            <Todo
                                key={todo.id}
                                text={todo.text}
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default TodoList;