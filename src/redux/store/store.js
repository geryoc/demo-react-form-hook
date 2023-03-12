import { configureStore } from '@reduxjs/toolkit'
import personFormReducer from '../reducers/personFormReducer'

const store = configureStore({
  reducer: {
    personForm: personFormReducer,
  }
})

export default store