import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  
  const [name, setName] = useState('');
  axios.get('http://localhost:2500/dashboard')
  .then(response => {
    setName(response.data.message)
    console.log(name);
  })
  .catch(error => {
    // Handle errors
  });

  return (
    <div>
      <h1>Welcome back {name}</h1>
      <a href='/mark'>profile</a>
  </div>
  )
}

export default Dashboard;
