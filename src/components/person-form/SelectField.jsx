import React from 'react'
import { FormError } from './FormError'

export const SelectField = ({ label, error, options, register, placeholder, ...props }) => {
  return (
    <div className="field">
      <label> {label} </label>
      <select className="ui simple dropdown selection" defaultValue={""} {...register} {...props}>
        <option value={""} disabled> {placeholder || "Seleccione una opción"} </option>
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}>
            {option.text}
          </option>))}
      </select>
      <FormError error={error} />
    </div>
  )
}
