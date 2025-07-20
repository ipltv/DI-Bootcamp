import { useState } from 'react'
import './App.css'
import UniversalInput from './UniversalInput'

function App() {
  const [formData, setData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    restrictions: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e);

    if (type === 'checkbox') {
      setData(prev => {
        const newRestrictions = checked
          ? [...prev.restrictions, value]
          : prev.restrictions.filter(item => item !== value);

        return { ...prev, restrictions: newRestrictions };
      });
    } else {
      setData(prev => ({ ...prev, [name]: value }));
    }
  }

  const handleSubmit = () => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div className='form-root'>
        <h1>Sample form</h1>
        <form onSubmit={handleSubmit}>
          <UniversalInput
            id="firstName"
            placeholder="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleChange(e)}
          />
          <UniversalInput
            id="lastName"
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleChange(e)}
          />
          <UniversalInput
            id="age"
            placeholder="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={(e) => handleChange(e)}
          />

          <p>Gender:</p>
          <UniversalInput
            id="maleGender"
            label="Male"
            type="radio"
            name="gender"
            value="Male"
            onChange={(e) => handleChange(e)}
            checked={formData.gender === 'Male'}
          />
          <UniversalInput
            id="femaleGender"
            label="Female"
            type="radio"
            name="gender"
            value="Female"
            onChange={(e) => handleChange(e)}
            checked={formData.gender === 'Female'}
          />

          <p>Select your destination:</p>
          <select name="destination" value={formData.destination} onChange={(e) => handleChange(e)}>
            <option value="">Please choose a destination...</option>
            <option value="thailand">Thailand</option>
            <option value="japan">Japan</option>
            <option value="brazil">Brazil</option>
          </select>

          <p>Dietary restrictions:</p>
          <UniversalInput
            id="nutsFree"
            label="Nuts free"
            type="checkbox"
            name="restrictions"
            value="Nuts free"
            onChange={(e) => handleChange(e)}
            checked={formData.restrictions.includes('Nuts free')}
          />
          <UniversalInput
            id="lactoseFree"
            label="Lactose free"
            type="checkbox"
            name="restrictions"
            value="Lactose free"
            onChange={(e) => handleChange(e)}
            checked={formData.restrictions.includes('Lactose free')}
          />
          <UniversalInput
            id="vegan"
            label="Vegan"
            type="checkbox"
            name="restrictions"
            value="Vegan"
            onChange={(e) => handleChange(e)}
            checked={formData.restrictions.includes('Vegan')}
          />

          <UniversalInput type="submit" />
        </form>
      </div>

      <div className="summary">
        <h2>Entered information:</h2>
        <p><i>Your name:</i> {formData.firstName} {formData.lastName}</p>
        <p><i>Your age:</i> {formData.age}</p>
        <p><i>Your gender:</i> {formData.gender}</p>
        <p><i>Your destination:</i> {formData.destination}</p>
        <p><i>Your dietary restrictions:</i></p>
        <p>**Nuts free : {formData.restrictions.includes("Nuts free") ? "Yes" : "No"}</p>
        <p>**Lactose free : {formData.restrictions.includes("Lactose free") ? "Yes" : "No"}</p>
        <p>**Vegan meal : {formData.restrictions.includes("Vegan") ? "Yes" : "No"}</p>
      </div>
    </>
  );
}

export default App