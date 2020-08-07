import React from 'react';
import useLocalStorage from './useLocalStorage'; 
import useUpdateLogger from './useUpdateLogger'; 

export default function Name(){
    const [name, setName, removeKey, removeAll, getByIndex] = useLocalStorage('name', '')
    useUpdateLogger(getByIndex(0))
    return(
        <>
        <input
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <br />
        <button onClick={()=>{removeKey('name')}}>remove</button>
        <br />
        <button onClick={()=>{removeAll()}}>remove All</button>
        </>
    )
}