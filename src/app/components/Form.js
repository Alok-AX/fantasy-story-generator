"use client"
import { useState } from 'react';
import styles from './Form.module.css';
const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    setting: '',
    creature: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', setting: '', creature: '' }); // Clear form fields
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input className='form-control' type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Fantasy Setting:
        <input className='form-control' type="text" name="setting" value={formData.setting} onChange={handleChange} required />
      </label>
      <label>
        Favorite Magical Creature/Element:
        <input className='form-control' type="text" name="creature" value={formData.creature} onChange={handleChange} required />
      </label>
      <button type="submit">Generate Story</button>
    </form>
  );
};

export default Form;
