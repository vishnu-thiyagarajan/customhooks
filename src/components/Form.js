import React from 'react';
import useForm from './useForm'; 

function validate(values) {
    let errors = {};
    if (!values.name) {
    } else if (/\d/.test(values.name)) {
      errors.name = "Name is invalid";
    }
    if (!values.age) {
    } else if ( !(/^\d+$/.test(values.age)) || values.age > 150 || values.age < 1 ) {
      errors.age = "Age is Invalid";
    }
    return errors;
  }
export default function Form(){
    const [handleChange,
        handleSubmit,
        reset,
        values,
        errors] = useForm(()=>console.log(values), { name: "", age: "" },validate )
    return(
        <>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name</label>
          <div>
          <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
            {errors.name && <p>{errors.name}</p>}
          </div>
        </div>
        <div>
          <label>Age</label>
          <div>
          <input
          type="text"
          name="age"
          value={values.age}
          onChange={handleChange}
        />
            {errors.age && <p>{errors.age}</p>}
          </div>
        </div>
        <button onClick={reset}>reset</button>
        <button type="submit">Submit</button>
      </form>
    </>
    )
}