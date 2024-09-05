import React from 'react'
import '../css/input.css'

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} 


export const InputField: React.FC  <InputFieldProps> = ({type, placeholder, onChange}) => {
  return (
    <>
      <input  className='input' type={type} placeholder={placeholder} onChange={onChange} />
    </>
  )
}