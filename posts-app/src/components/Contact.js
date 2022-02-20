import { Container, Button, Form, Row, Col } from "react-bootstrap";

import "../style.css";
import { useState, useEffect } from "react";
import Header from "./Header";

const Contact = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const mess = ` ${values.username} say  ${values.message}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const validate = () => {
    return (
      values.username !== "" &&
      values.phone !== "" &&
      values.email !== "" &&
      values.message !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate) {
      setIsSubmitting(true);
      setMessage( mess);  
    }
    setValues({ username: '', phone: '', email:'', message:''});
  };
  
  useEffect(() => {
    if (isSubmitting) {
      const timer = setTimeout(() => {
        setIsSubmitting(true);
        setMessage( mess);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitting, mess]);

  return (
    <div>
      <Header />

      <Container style={{ marginTop: "70px", width: "50%" }}>
        
        <fieldset>
          <legend>Contact form</legend>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-2"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Username
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="username"
                  value={values.username}
                  onChange={handleChange}
                  required
                  name="username"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Phone
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="0721..."
                  value={values.phone}
                  onChange={handleChange}
                  required
                  name="phone"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  name="email"
                />
              </Col>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={values.message}
                onChange={handleChange}
                required
                name="message"
              />
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Send a message</Button>
              </Col>
            </Form.Group>
          </Form>
        </fieldset>
        {isSubmitting && (
          <h3 style={{ color: "#990b27", fontStyle: "italic" }}>
           {message}
          </h3>
        )}
      </Container>
    </div>
  );
};
export default Contact;
/*useEffect(() => {
    if (isSubmitting) {
      setTimeout(() => {
        //setIsSubmitting(true);
        setMessage(mess)
      }, 1000);
    }
  }, [mess]);*/
