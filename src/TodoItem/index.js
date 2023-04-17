//import react from "react";
import './TodoItem.css';
import x from "../img/x.png";
import cheque from "../img/cheque.png";


function TodoItem(props){

    return(
        <li className="item">
            <span className={`check ${props.completed && 'item-check--active'}`}
                onClick={props.onComplete}
            >
                <img src={cheque} alt='Ok'></img>
            </span>
            <p className={`${props.completed && 'item-p--completed'}`}>
                {props.text}
            </p>
            <span className="delete"
                onClick={props.onDelete}
            >
                <img src={x} alt='X'></img>
            </span>
        </li>
    );
    
}

export { TodoItem };