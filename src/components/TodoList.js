import React from 'react';
import Todo from './Todo';






const TodoList = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {


    return (
        <div>
            <h2 className="text-right display-4">Soy TodoList</h2>

            {todos.length === 0
                ? (
                    <div className="alert alert-primary">
                        No hay tareasm por favor agraga una tarea
                    </div>
                )
                : (
                    todos.map(todo => (
                        <Todo
                            todo={todo}
                            key={todo.id}
                            todoDelete={todoDelete}
                            todoToogleCompleted={todoToogleCompleted}
                            setTodoEdit={setTodoEdit}
                        >
                        </Todo>
                    ))
                )

            }

        </div>
    );
}

export default TodoList;