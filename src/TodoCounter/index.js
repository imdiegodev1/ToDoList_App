import React from 'react';
import './TodoCounter.css';



function TodoCounter(props) {

    const {total, completed} = props;

    return (
        <h2 className="TodoCounter">
          Has completado {completed} de {total} TODOS
        </h2>
    );
}


export { TodoCounter };