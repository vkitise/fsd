import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name:"", price:"", description:"" });

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(r => r.json())
      .then(setProducts);
  }, []);

  const add = e => {
    e.preventDefault();
    fetch("http://localhost:3001/products", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(form)
    })
    .then(r => r.json())
    .then(p => setProducts([...products, p]));
    
    setForm({ name:"", price:"", description:"" });
  };

  return (
    <Container>
      <h1 className="text-center my-4">Product List</h1>

      <Row>
        <Col lg={8}>
          <ListGroup>
            {products.map(p => (
              <ListGroup.Item key={p._id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.description}</Card.Text>
                    <b>${p.price}</b>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Body>
              <Form onSubmit={add}>
                <Form.Control name="name" value={form.name}
                  onChange={e=>setForm({...form,name:e.target.value})}
                  placeholder="Name" className="mb-2"/>

                <Form.Control name="price" type="number" value={form.price}
                  onChange={e=>setForm({...form,price:e.target.value})}
                  placeholder="Price" className="mb-2"/>

                <Form.Control as="textarea" name="description" value={form.description}
                  onChange={e=>setForm({...form,description:e.target.value})}
                  placeholder="Description" className="mb-2"/>

                <Button type="submit" className="w-100">Add</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}