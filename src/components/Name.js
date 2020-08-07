import React from 'react';
import useLocalStorage from './useLocalStorage'; 
import useUpdateLogger from './useUpdateLogger'; 
import useInputNumber from './useInput/useInputNumber'; 

export default function Name(){
    const [name, setName, removeKey, removeAll, getByIndex] = useLocalStorage('name', '')
    useUpdateLogger(getByIndex(0))
    const [age,bindAge,resetAge] = useInputNumber(0)
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
        <button onClick={removeAll}>remove All</button>
        <br />
        <input
          type="text"
          {...bindAge}
        />
        <br />
        <button onClick={resetAge}>reset</button>
        <br />
        <p>{age}</p>
        </>

    )
}