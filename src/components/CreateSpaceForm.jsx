import React,{useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPlus } from '@fortawesome/free-solid-svg-icons';
import appwriteService from '../appwrite/config'
import {Button,Input} from'../components/index'
import { useForm } from 'react-hook-form';
function CreateSpaceForm() {
  const {register,handleSubmit} = useForm()
  const [questions,setQuestion]= useState([
    'How has our product or service has helped you??',
    'Whats the best thing about product or service',
    'Share your exprience??'
    ])
  //   const [formData,setFormData]= useState({
  //     name:'',
  //     customMsg:'',
  //     quiz:questions
  // })
    const deleteQuestion=(index)=>{
      setQuestion(questions.filter((_,i)=>i!==index))
    }
    const [addMoreQuestion,setAddMoreQuestion] = useState(false)
    const [newQuestion,setNewQuestion] = useState('')
    const handleAddQuestion=()=>{
      if(newQuestion){
        setQuestion([...questions,newQuestion])
        setNewQuestion('')
        setAddMoreQuestion(false)
      }
       }
    const getUniqueLink = ()=>{
      const strr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
      let res=''
      while (res.length<14){
        let idx = Math.floor(Math.random()*strr.length)
        res+=strr[idx]
      }
      return res
    }
    
    const handleKeyPress = (e)=>{
      if(e.key==='Enter'){
        handleAddQuestion();
      }}
    const submit = async(data)=>{

      // console.log(finalformData,'formdata while submitting')
      const createdAt = new Date();
      const uniqueLink = getUniqueLink()
      const finalformData = {
        // uniqueLinkk,
        spaceName:data.spaceName,
        customMsg:data.custommsg,
        createdAt:createdAt.toISOString(),
        quiz:questions,
        
        
      };
      // const uniqueLink = finalformData.uniqueLinkk
      const spaceName = finalformData.spaceName
      const customMsg = finalformData.customMsg
      // const createdAt = 
      const quiz = finalformData.quiz
      // console.log(finalformData,'formdata while submitting')
      console.log("tring beforeee",uniqueLink,spaceName,customMsg,quiz,createdAt)
      try{
        const userForm = await appwriteService.createForm({uniqueLink,spaceName,customMsg,quiz,createdAt})
      }
      catch(error){
        console.log("Create Form Error",error)
      }

    }
  return (
    <>
      
      <div className="flex flex-col justify-center items-center mt-5">
  {/* Form Container */}
  <form
    className="mx-auto flex flex-col border border-gray-400 p-5 bg-blue-600 rounded-lg"
    style={{ width: '50%', maxWidth: '500px', minWidth: '400px' }}
    onSubmit={handleSubmit(submit)}
  >
    {/* Space Name Input */}
    <Input
      label="Space Name"
      type="text"
      className="bg-gray-800 text-white mb-4 px-3 py-2 rounded-md"
      {...register('spaceName', { required: true })}
    />

    {/* Custom Message Textarea */}
    <label
      htmlFor="custommsg"
      className="text-white font-semibold mb-2 block"
    >
      Your Custom Message
    </label>
    <textarea
      name="custommsg"
      rows={4}
      className="bg-gray-800 text-white p-3 rounded-md mb-4 w-full"
      {...register('custommsg')}
    ></textarea>

    {/* Questions List */}
    <ul className="flex flex-col gap-2">
      {questions.map((question, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-800 p-3 rounded-md"
        >
          <li className="text-white font-medium">
            {question}
          </li>
          <FontAwesomeIcon
            className="text-red-500 cursor-pointer"
            onClick={() => deleteQuestion(index)}
            icon={faTrash}
          />
        </div>
      ))}
    </ul>

    {/* Add More Question */}
    {addMoreQuestion && (
      <Input
        className="border border-gray-400 px-3 py-2 text-gray-900 rounded-md mt-4"
        placeholder="Enter your question"
        onChange={(e) => setNewQuestion(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    )}

    {/* Add Question Button */}
    <div className="flex items-center gap-2 mt-5 cursor-pointer">
      <FontAwesomeIcon
        className="text-green-500"
        icon={faPlus}
        onClick={() => setAddMoreQuestion(true)}
      />
      <span
        className="text-white font-semibold"
        onClick={() => setAddMoreQuestion(true)}
      >
        Add Question
      </span>
    </div>

    {/* Submit Button */}
    <Button
      type="submit"
      className="p-2 bg-teal-500 text-white font-semibold rounded-md mt-5 hover:bg-teal-600 transition"
    >
      Submit
    </Button>
  </form>
</div>

    </>
    )
}

export default CreateSpaceForm
