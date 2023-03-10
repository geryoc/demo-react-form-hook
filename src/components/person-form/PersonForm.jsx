import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { setFormValues } from '../../redux/actions/personFormActions';
import { default as options } from './personFormOptions';
import { SelectField } from './SelectField';
import { TextField } from './TextField';

export const PersonForm = () => {
  const dispatch = useDispatch();

  const reduxFormValues = useSelector((state) => state.personForm);

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const onSubmitForm = (data) => {
    console.log("Submit Form", data);
  };

  // Actualizar redux con los valores del state del formulario
  useEffect(() => {
    const subscription = watch((formValues) => dispatch(setFormValues(formValues)));
    return () => subscription.unsubscribe();
  }, [watch, dispatch]);

  useEffect(() => {
    // Inicializar el estado del formulario con los valores de redux
    reset(reduxFormValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <SelectField
            label={"G??nero"}
            error={errors.gender}
            register={register("gender", options.gender)}
            options={[
              { value: 1, text: "Masculino" },
              { value: 2, text: "Femenino" },
              { value: 3, text: "Otro" },
            ]}
          />
          <button type='submit' className='ui fluid button blue' style={{ marginTop: "1500px" }}>Guardar</button>
        </div>
      </form>
    </div>
  )
}
