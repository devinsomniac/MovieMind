import React, { useState } from 'react'
import bg from './assets/bg.jpg'

const App = () => {
  const [name,setName] = useState("")
  const [greeting,setGreeting] = useState("")
  const handleChange = (e) => {
      setName(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/greet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setGreeting(data.greeting);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};
  return (
    <div className='flex justify-center items-center App h-screen' style={{backgroundImage:`url(${bg})`, backgroundRepeat:"repeat" , backgroundSize:"contain"}}>
      <div className='flex flex-col text-center justify-center items-center'>
      <input
      value={name}
      onChange={handleChange}
      />
      <button
      onClick={handleSubmit} 
      className='bg-black text-white rounded-lg w-16'>
        Submit
      </button>
      <h1>{greeting}</h1>
      </div>
      
    </div>
  )
}

export default App