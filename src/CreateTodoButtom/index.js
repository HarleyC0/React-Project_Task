//import react from "react";
//import { TodoContext } from "../TodoContext";
import './CreateTodoButtom.css';
import todoimg from "../img/todoimg.jpg";

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
            <img src={todoimg} alt="todos"/>
        </div>
    );
}

export { CreateTodoButtom};