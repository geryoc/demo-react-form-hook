import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { PersonForm } from './components/person-form/PersonForm';
import { setFormValues } from './redux/actions/personFormActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFormValues({
      firstName: "Initial first name",
      lastName: "Initial last name"
    }))
  }, [dispatch])

  return (
    <div className="App">
      <div>
        <PersonForm />
      </div>
    </div>
  );
}

export default App;
