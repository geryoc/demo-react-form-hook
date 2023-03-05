
const firstName = {
  required: 'El nombre es requerido'
};

const lastName = {
  required: 'El apellido es requerido'
};

const age = {
  required: 'La edad es requerida',
  min: {
    value: 18,
    message: 'Debe ser mayor de edad'
  }
};

const document = {
  required: 'El documento es requerido',
}

const personFormOptions = {
  firstName,
  lastName,
  age,
  document
};

export default personFormOptions;