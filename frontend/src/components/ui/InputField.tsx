import React from 'react'
import '../../css/input.css'
import { InputFieldProps } from '../../types/ui.types'




export const InputField: React.FC  <InputFieldProps> = ({type, placeholder, onChange, value}) => {
  return (
    <>
      <input  className='input' type={type} placeholder={placeholder} onChange={onChange} value={value} />
    </>
  )
}