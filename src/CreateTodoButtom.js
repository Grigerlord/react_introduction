import React from "react";
import './CreateTodoButtom.css'

function CreateTodoButtom () {

    const onClickButton = (msj) => {
        alert(msj)
    }

    return(

        <button
            className="CreateTodoButton"
            onClick={() => onClickButton('Aqui se deberia abrir el modal')}
        >
            +
        </button>

    );
}

export { CreateTodoButtom };