
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

const gender = {
  required: 'El género es requerido',
  // validate: {
  //   required: (value, values) => {
  //     if (!value || value < 1) {
  //       return "El género es requerido";
  //     }
  //     return true;
  //   }
  // }
}

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
  document,
  gender,
};

export default personFormOptions;