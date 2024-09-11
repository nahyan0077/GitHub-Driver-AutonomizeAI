import React from 'react'
import './InputField.css'
import { InputFieldProps } from '../../../types/ui.types'




export const InputField: React.FC  <InputFieldProps> = ({type, placeholder, onChange, value, onKeyDown}) => {
  return (
    <>
      <input  className='input' type={type} placeholder={placeholder} onChange={onChange} value={value} onKeyDown={onKeyDown} />
    </>
  )
}