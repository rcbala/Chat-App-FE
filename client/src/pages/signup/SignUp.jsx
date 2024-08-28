import React, { useState } from 'react'
import './SignUp.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Spinner } from "react-bootstrap";

import { Link } from 'react-router-dom';
import GenderBox from './GenderBox';
import useSignup from '../../hooks/useSignUp';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading,signup }=useSignup()

  const handleCheckBoxChange = (gender) => {
    setInputs({...inputs,gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
    
  }
  return (
    <Container fluid className=" signUp-container">
      <div className="SignUp-div ">
        <h1 className="SignUp-h1-title">
          SignUp <span>Chat-App</span>
        </h1>
        <Form onSubmit={handleSubmit} >
          <Form.Group controlId="formFullname" className="mb-3">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Fullname"
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formpassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Label>ConfirmPassword</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter confirmpassword"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
             
            />
          </Form.Group>

          <GenderBox
            onCheckboxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />

          <div className="text-center mb-3">
            <Link to={"/login"} className="signUp-a-tag">
              Already have an account?
            </Link>
          </div>
          <div className="SignUp-Button">
            <Button variant="primary" type='submit' className="signUp-button-2" disabled={loading}>
             {loading? <Spinner animation="border" variant="light" role="status" />:"SignUp"}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default SignUp