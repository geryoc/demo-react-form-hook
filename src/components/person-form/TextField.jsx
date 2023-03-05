import React from 'react'
import { FormError } from './FormError'

export const TextField = ({ label, error, register, ...props }) => {
  return (
    <div className="field">
      <label> {label} </label>
      <input type="text" {...register} {...props} />
      <FormError error={error} />
    </div>
  )
}
