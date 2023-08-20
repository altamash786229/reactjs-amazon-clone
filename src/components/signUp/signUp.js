import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-50">
        <h2 className="mb-3">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mb-3">
            Submit
          </Button>
          <div>
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;
