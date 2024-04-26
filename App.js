import { useState } from 'react';
import "./App.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function App() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async(event) => {
    
    event.preventDefault();
    const response=await axios.post('http://localhost:2500/', {
      username: inputs.username,
      userpassword:inputs.password
    })
    
      if (response.data.message==='success') {
        navigate('/dashboard')
        } else 
        {
        navigate('/')
        }
      
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  return (
    <form onSubmit={handleSubmit}>
    <label>Enter your name:
    <input 
      type="text" 
      name="username" 
      value={inputs.username || ""} 
      onChange={handleChange}
    />
    </label>
    <label>Enter your password:
      <input 
        type="password" 
        name="password" 
        value={inputs.password || ""} 
        onChange={handleChange}
      />
      </label>
      <input type="submit" />
  </form>
  );
}

export default App;
