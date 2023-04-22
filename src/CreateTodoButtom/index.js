import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButtom.css";
import todoimg from "../img/todoimg.jpg";

function CreateTodoButtom(props) {
    const { inputValue, setInputValue } = useContext(TodoContext);

    const onClickButton = () => {
        props.setOpenModal((prevState) => !prevState);
    };

    const onInputChange = (event) => {
        console.log(inputValue);
        setInputValue(event.target.value);
    };

    return (
        <div className="createTodo">
            <h3>Create New Task</h3>
            <label>Task Name</label>
            <input
                id="taskName"
                type="text"
                placeholder="Learn React"
                value={inputValue}
                onChange={onInputChange}
                autoComplete="off"
            />
            <button onClick={onClickButton}>Create task</button>
            <img src={todoimg} alt="todos" />
        </div>
    );
}

export { CreateTodoButtom };
