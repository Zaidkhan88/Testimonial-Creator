import React from 'react'

function TestimonialForm() {
const {register,handleSubmit} = useForm()
const submitForm =()=>{
  
}
  return (
    <form onSubmit={handleSubmit(submitForm)}>
            <Input label='Enter the link' />
            <Button>Click here to give a testimonials</Button>
    </form>
  )
}

export default TestimonialForm
