import { useState, useEffect } from 'react';

function getSavedValue(key, initialValue){
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue
    if (savedValue instanceof Function) return initialValue()
    return initialValue
}

export default function useLocalStorage(key, initialValue){
  const [value, setValue] = useState(()=>{
      return getSavedValue(key, initialValue)
  })
  const removeKey = (key)=>localStorage.removeItem(key)
  const clearAll = (key)=>localStorage.clear()
  const getByIndex = (index)=>localStorage.key(index)
  useEffect(()=>{
      localStorage.setItem(key, JSON.stringify(value))
  }, [value,key])
  return [value, setValue, removeKey, clearAll, getByIndex]
}