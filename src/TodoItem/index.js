import react from "react";
import './TodoItem.css';

function TodoItem(props){

    return(
        <li className="item">
            <span className={`check ${props.completed && 'item-check--active'}`}
                onClick={props.onComplete}
            >
                <img src="imgs/cheque.png"></img>
            </span>
            <p className={`${props.completed && 'item-p--completed'}`}>
                {props.text}
            </p>
            <span className="delete"
                onClick={props.onDelete}
            >
                <img src="imgs/x.png"></img>
            </span>
        </li>
    );
    
}

export { TodoItem };