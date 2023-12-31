import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function LoginPage() {
  return (
    <div className="main">
      <Form className="form">
        <div className="both">
          <div className="loginhere">
            <Form.Label>Login Here</Form.Label>
          </div>
          <div className="link">
            <Link to='/home' style={{color:'white', textDecoration:'none'}}>Home</Link>
          </div>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
