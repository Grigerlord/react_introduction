import React from 'react';
import './TodoCounter.css'

function TodoCounter ({total, completed}) {



    return (

        <h2>Has completado {completed} de {total} TODOs, excelente</h2>

    )
}

export { TodoCounter }