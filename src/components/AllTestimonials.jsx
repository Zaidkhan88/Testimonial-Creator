import React from 'react'
import { Input, Button } from './index'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function AllTestimonials() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const submit = (data) => {
    if (data.testlink) {
      navigate(`/Testimonials/${data.testlink}`)
    } else {
      console.log('Link is not provided')
    }
  }

  return (
    <div className="w-96 mx-auto p-4">
      <form onSubmit={handleSubmit(submit)}>
        <Input 
          label='Enter the link for all testimonials' 
          {...register('testlink', { required: "This field is required" })}
          className="mb-4"
        />
        {errors.testlink && <p className="text-red-500 text-sm">{errors.testlink.message}</p>}
        
        <Button 
          className="bg-blue text-white w-full py-2"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AllTestimonials
