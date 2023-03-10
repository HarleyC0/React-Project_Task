import React from "react";
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input placeholder="Search..." className="inputSearch"
            onChange={onSearchValueChange}
            value={searchValue}
        />
    );
}

export { TodoSearch }; 