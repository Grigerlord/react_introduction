import React from 'react'
import './TodoSearch.css'

function TodoSearch () {

    const [searchValue, setSearchValue] = React.useState('') //Esta funcion nos permite observar el estado de nuestro componente <TodoSearch>. searchValue obtiene el estado inicial y setSearchValue es una funcion que guarda los cambios del estado

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return [
        <input
            className="TodoSearch"
            placeholder='Cebolla'
            value={searchValue}
            onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ]
}

export { TodoSearch }