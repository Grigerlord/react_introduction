import React from 'react'

import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI () {
    return (
        <> {/*Esto puede escribirse con <React.Fragment></React.Fragment> dentro*/}
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                    error,
                    loading,
                    searchedTodos,
                    completeTodo,
                    deleteTodo
                }) => (
                    <TodoList>

                        {error && <p>...HA OCURRIDO UN ERROR...</p>}
                        {loading && <p>CARGANDO...</p>}
                        {(!loading && !searchedTodos.length) && <p>Crea tu primer To Do!!</p>}

                        {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                        ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>


            <CreateTodoButton />
        </>
    )
}

export { AppUI }