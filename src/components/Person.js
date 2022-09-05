import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default function Person() {

    const [person, setPerson] = useState({});
    const [newAge, setNewAge] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        sendPersonInfo(person);
        console.log(person);
    };

    const handleNameChange = (event) => {
        // person["name"] = event.target.value;
        setPerson({...person, name: event.target.value});
    }

    const handleAgeChange = (event) => {
        // person["age"] = event.target.value;
        setPerson({...person, age: event.target.value});
    }

    const handleGenderChange = (event) => {
        // person["gender"] = event.target.value;
        setPerson({...person, gender: event.target.value});

    }

    const sendPersonInfo = async () => {
     await axios.post(`${process.env.REACT_APP_SERVER}/person`, {person})
        .then(res => {
            console.log(res.data);
            setNewAge(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }


  return (
    <>
    <div >
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control data-testid='name-input' id="name" type="text"  placeholder="Enter Your Name" onChange={handleNameChange}  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>age</Form.Label>
        <Form.Control data-testid='age-input' id="age"  type="number" placeholder="Enter Your Age" onChange={handleAgeChange} required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        {/* <Form.Control   type="text" placeholder="Enter" /> */}
      <Form.Select data-testid='gender-select' id="gender" aria-label="Default select example" onChange={handleGenderChange}>
      <option>Choose Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other...</option>
    </Form.Select>
      </Form.Group>
      <Button data-testid='submit' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    <br></br><br></br>

    <div data-testid='personInfo'>
        
    
            <h3 >Name: {person.name}</h3>
            <h3>Age: {person.age}</h3>
            <h3>Gender: {person.gender}</h3>
        {newAge && <h3>New Age: {newAge}</h3>}
    </div>
    </>
  )
}
