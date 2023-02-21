import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section className="sectionList">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };