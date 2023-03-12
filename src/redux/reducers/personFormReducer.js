
const personFormReducer = (state = {}, action) => {
  switch (action.type) {
    case "personForm.setFormValues":
      return action.payload
    default:
      return state
  }
}

export default personFormReducer;