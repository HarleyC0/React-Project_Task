import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from '../TodoError';
import { TodosLoading} from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
  <React.Fragment>
    <CreateTodoButtom 
      setOpenModal={setOpenModal}
    />

    <div className="divList">

      <TodoCounter/>
  
      <TodoSearch/>

      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

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

    </div>

    {!!openModal && (
      <Modal>
        <TodoForm />
      </Modal>
    )}
  
  </React.Fragment>
  );
}

export { AppUI };
