import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const { inputValue } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState(inputValue);

    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <label>Write your new task</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe tu tarea"
            />
            <div>
                <button
                    className="TodoForm_Button TodoForm_Button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm_Button TodoForm_Button--add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
