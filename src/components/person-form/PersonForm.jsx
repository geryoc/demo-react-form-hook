import React from 'react'
import { useForm } from 'react-hook-form'
import { FormError } from './FormError';
import { default as options } from './personFormOptions';
import { TextField } from './TextField';

export const PersonForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitForm = (data) => {
    console.log("Submit Form", data);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <h1>Formulario Persona</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <TextField
            label={"Nombre"}
            error={errors.firstName}
            register={register("firstName", options.firstName)}
            placeholder={'Ingrese nombre...'}
          />
          <TextField
            label={"Apellido"}
            error={errors.lastName}
            register={register("lastName", options.lastName)}
            placeholder={'Ingrese apellido...'}
          />
          <TextField
            label={"Edad"}
            error={errors.age}
            register={register("age", options.age)}
            placeholder={'Ingrese edad...'}
          />
          <TextField
            label={"Documento"}
            error={errors.document}
            register={register("document", options.document)}
            placeholder={'Ingrese documento...'}
          />
          <button type='submit' className='ui fluid button blue' style={{ marginTop: "1500px" }}>Guardar</button>
        </div>
      </form>
    </div>
  )
}