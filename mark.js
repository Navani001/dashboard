import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
var text;
var listItems=[]
function MarkInputForm() {
  var name;
  
  const [values, setValues] = useState({
    subject: "",
    marks: 0,
  });
  const [list, setlist] = useState({});
  const [mark, setMark] = useState({});
  axios.get('http://localhost:2500/mark')
  .then(response => {
    console.log(response.data.message)
    var mar=response.data.message
   
     listItems=[]
    for(var i=0; i<mar.length; i++) {
        listItems.push(<tr><td key={i}>{mar[i].sub}</td><td key={i+1000}>{mar[i].mark}</td></tr> );
    }

    console.log("hi2",listItems)
    setlist(listItems)
    })

  .catch(error => {
    // Handle errors
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted values:", values);
    const response=axios.post('http://localhost:2500/mark', {
      sub: values.subject,
      ma:values.marks
    })
      axios.get('http://localhost:2500/mark')
  .then(response => {
    console.log(response.data.message)
    var mar=response.data.message
   
     listItems=[]
    for(var i=0; i<mar.length; i++) {
        listItems.push(<tr><td key={i}>{mar[i].sub}</td><td key={i+1000}>{mar[i].mark}</td></tr> );
    }

    console.log("hi2",listItems)
    setlist(listItems)
    })

  .catch(error => {
    // Handle errors
  });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Subject:
        <input
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Marks:
        <input
          type="text"
          name="marks"
          value={values.marks}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" >Submit</button>
    </form>
  );
}

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
      <h1>mark</h1>
      <a href='/dashboard'>Dashboard</a>
      <MarkInputForm/>
      <div id="marktable" >
      {
        listItems
      }
      </div>
  </div>
  )
}

export default Dashboard;
