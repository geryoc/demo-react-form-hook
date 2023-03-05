
const firstName = {
  required: 'El nombre es requerido'
};

const lastName = {
  required: 'El apellido es requerido'
};

const age = {
  required: 'La edad es requerida',
  min: {
    value: 15,
    message: 'Debe ser mayor de 15 años'
  }
};

const document = {
  validate: {
    requeridoSiEsMayor: (value, values) => {
      let result = true;
      if (!!values.age && values.age >= 18 && !value) {
        result = "Si es mayor de edad, debe ingresar documento";
      }
      return result;
    }
  }
}

const personFormOptions = {
  firstName,
  lastName,
  age,
  document
};

export default personFormOptions;