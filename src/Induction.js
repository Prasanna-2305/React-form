import React, { useState } from 'react'
import Form from './Form'
import Sucess from './Sucess'
const Induction = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () =>{
    setFormIsSubmitted(true);
}
  return (
    <div>
        {!formIsSubmitted? (
            <Form submitForm = {submitForm} />
        ): (<Sucess />)}
    </div>
  )
}

export default Induction;