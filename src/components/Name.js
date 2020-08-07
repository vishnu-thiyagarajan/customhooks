import React from 'react';
import useLocalStorage from './useLocalStorage'; 
import useUpdateLogger from './useUpdateLogger'; 
import useDocumentTitle from './useDocumentTitle'; 
import useInputNumber from './useInput/useInputNumber'; 
import useInput from './useInput'; 

function validateMessage(value){
    if (value.length < 10) return "Message should be more than 10 characters"
}
export default function Name(){
    const [name, setName, removeKey, removeAll, getByIndex] = useLocalStorage('name', '')
    useUpdateLogger(getByIndex(0))
    const [age,bindAge,resetAge] = useInputNumber(0)
    const [message,bindMessage,resetMessage, error] = useInput('',validateMessage)
    useUpdateLogger(name)
    useDocumentTitle(name + age)
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
        <br />
        <textarea
          {...bindMessage}
        />
        <p>{error}</p>
        </>

    )
}