import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI (
    {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,}
) {
    return (
        <React.Fragment>
          <TodoCounter 
            total={totalTodos}
            completed={completedTodos}
          />

          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {loading && <p>Loading...</p>}
            {error && <p>Error... CALL 911!!!</p>}
            {(!loading && !searchedTodos.length) && <p>Create your first ToDo!!</p>}
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
          <CreateTodoButton />
        </React.Fragment>
    );
}


export { AppUI };