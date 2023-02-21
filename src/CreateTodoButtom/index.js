import react from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButtom.css';

function CreateTodoButtom(props){

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return(
        <div className="createTodo">
            <h3>Create New Task</h3>
            <label>Task Name</label>
            <input id="taskName" type="text" placeholder="Learn React"/>
            <button
                onClick={onClickButton}
            >
                Create task
            </button>
            <img src="imgs/todoimg.jpg" alt="todos"/>
        </div>
    );
}

export { CreateTodoButtom};