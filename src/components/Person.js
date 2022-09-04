import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Person() {

    const [person, setPerson] = useState('');
    const [newAge, setNewAge] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        sendPersonInfo(person);
        console.log(person);
    }


    const handleNameChange = (event) => {
        setPerson({
            "name": event.target.value,
            "age": person.age,
            "gender": person.gender
        })
    }

    const handleAgeChange = (event) => {
        setPerson({
            "name": person.name,
            "age": event.target.value,
            "gender": person.gender
        })
    }

    const handleGenderChange = (event) => {
        setPerson({
            "name": person.name,
            "age": person.age,
            "gender": event.target.value
        })
    }

    const sendPersonInfo = async () => {
     await axios.post('http://localhost:3000/person', {person})
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
        <Form.Control id="name" type="text"  placeholder="Enter Your Name" onChange={handleNameChange}  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>age</Form.Label>
        <Form.Control id="age"  type="number" placeholder="Enter Your Age" onChange={handleAgeChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        {/* <Form.Control   type="text" placeholder="Enter" /> */}
      <Form.Select id="gender" aria-label="Default select example" onChange={handleGenderChange}>
      <option>Choose Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other...</option>
    </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    <br></br><br></br>

    <div>
        
        <h3>Name: {person.name}</h3>
        <h3>Age: {person.age}</h3>
        <h3>Gender: {person.gender}</h3>
        {newAge && <h3>New Age: {newAge}</h3>}
    </div>
    </>
  )
}
