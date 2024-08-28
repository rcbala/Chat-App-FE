import React, { useState } from 'react'
import { Container, Form, Button, Card, Spinner } from "react-bootstrap";
import "./Login.css"
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';


const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const{loading,uselogin}=useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uselogin(username, password);

  }

  return (
    <Container fluid className=" login-container">
      <div className="login-card ">
        <h1 className="login-h1-title">
          Login <span>Chat-App</span>
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formpassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </Form.Group>
          <div className="text-center mb-3">
            <Link to={"/signup"} className="login-a-tag">
              {"Don't"} have an account?
            </Link>
          </div>
          <div className="login-Button">
            <Button
              variant="primary"
              type="submit"
              className="login-button-2"
              disabled={loading}
            >
              {loading ? (
                <Spinner animation="border" variant="light" role="status" />
              ) : (
                "LogIn"
              )}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default LogIn