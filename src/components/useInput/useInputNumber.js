import { useState } from 'react';

export default function useInput(initialValue){
  const [value, setValue] = useState(initialValue)
  const reset = () => setValue(initialValue)
  const bind = {
      value: value.toLocaleString(),
      onChange: event=>{
          const value = event.target.value.replace(/,/g, '')
          if (!isNaN(value)) setValue(Number(value))
      }
  }
  return [value, bind, reset]
}