// src/App.jsx
import  { useState } from 'react';
import styles from './App.module.css'
function App() {
  const [formFields, setFormFields] = useState([
    { name: '', value: '', remarks: '' },
  ]);

  const handleFormChange = (index, event) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let newField = { name: '', value: '', remarks: '' };
    setFormFields([...formFields, newField]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formFields));
  };

  return (
    <div className={styles.container}>
    
      <form  className={styles.form} onSubmit={handleSubmit}>
        {formFields.map((form, index) => (
          <div className={styles.inp} key={index}>
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={event => handleFormChange(index, event)}
            />
            <input
              name="value"
              placeholder="Value"
              value={form.value}
              onChange={event => handleFormChange(index, event)}
            />
            <input
              name="remarks"
              placeholder="Remarks"
              value={form.remarks}
              onChange={event => handleFormChange(index, event)}
            />
            <button className={styles.btn3} type="button" onClick={() => removeFields(index)}>
              <img src=".img/icons8-delete.svg" alt="" />
            </button>
          </div>
        ))}
        <div className={styles.btnBox}>
        <button className={styles.btn1} type="button" onClick={addFields}>
          Add More
        </button>
        <button className={styles.btn2} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
