// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Card } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const App = () => {
  const firstName = "Henry";

  return (
    <Container className="mt-5">
      <Card className="product-card">
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><Price /></Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>
          <Image />
        </Card.Body>
      </Card>
      <div className="mt-3 greeting">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="/assets/henry.jpg" alt="hello" width={500} />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </Container>
  );
};

export default App;
