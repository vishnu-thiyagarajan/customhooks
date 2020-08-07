import { useState } from 'react';

export default function useInput(initialValue, validate){
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState('');
  const reset = () => {
    setValue(initialValue)
    setError('')
  }
  const bind = {
      value,
      onChange: event=>{
        setError(validate(event.target.value))
        setValue(event.target.value)
      }
  }
  return [value, bind, reset, error]
}