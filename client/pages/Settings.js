import React, { useState, useEffect } from 'react';
import './Pages.scss';

const Settings = () => {
  const [portNumber, setPortNumber] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setPortNumber(value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`/api/setPort`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({portNumber: portNumber}) 
    })
    console.log(portNumber);
    setPortNumber('');
  }

  return (
    <div className='settings'>
      <form className="form-container" onSubmit={ handleSubmit }>
        <label className='form-label'>Connect to the Kafka broker you want to listen to: </label>
        <input type='text' name='portNumber' value={ portNumber } onChange={ handleChange } className="form-input" placeholder="Enter port number..." />
        <button type='submit' className='btn-connect'>CONNECT</button>
      </form>
    </div>
  );
};

export default Settings;