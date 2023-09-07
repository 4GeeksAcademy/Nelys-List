import React, { useState } from "react";


const List = () => {
     const [inputValue, setInputValue] = useState('');
     const [listTodos, setListTodos] = useState ([]);

    const onChangeFunction = (e) => {
        setInputValue(e.target.value)
    }
	return (
		<div className="fondo container">
            <h1>Tareas que hacer:</h1>
            <ul className="list-group">
                <li className="list-group-item"><input type="text" onChange={onChangeFunction} placeholder="Escribir las tareas a realizar" value={inputValue} onKeyDown={(e)=>{
                    if(e.key === "Enter" && inputValue != ""){
                        setListTodos(listTodos.concat(inputValue))
                        setInputValue('')
                    } 
                    
                }}/></li>
                {listTodos.map((items,index) =>              
                <li className="list-group-item">{items} <i class="fa-solid fa-trash" onClick={()=>setListTodos(listTodos.filter((t,currentValue)=> index != currentValue))}></i></li>)} 
            </ul>
            <div className="items">{listTodos.length} items</div>    
                       
        </div>
	);
};

export default List;
