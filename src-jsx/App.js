import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';

import 'bootstrap/dist/css/bootstrap.min.css';

// Simple name and image
const firstName = "Zane"; // or "" to show fallback
const personalImage = "https://i.pravatar.cc/120?img=15";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        minHeight: '100vh',
        color: 'white',
        padding: '40px 0',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <Container className="d-flex flex-column align-items-center">
        <Card
          style={{
            width: '22rem',
            backgroundColor: '#2c2c2c',
            border: '1px solid #444',
            borderRadius: '10px',
            color: "white",
            boxShadow: '0 4px 12px rgba(58, 55, 55, 0.3)',
          }}
        >
          <Card.Body className="text-center">
            <div className="mb-3">
              <Image />
            </div>
            <Card.Title className="fs-4" >
              <Name />
            </Card.Title>
            <Card.Subtitle className="mb-2 ">
              <Price />
            </Card.Subtitle>
            <Card.Text className="text-light">
              <Description />
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="mt-4 text-center">
          <h4 style={{ color: '#aaa' }}>
            {firstName ? `Hello, ${firstName}` : 'Hello, there!'}
          </h4>

          {firstName && (
            <img
              src={personalImage}
              alt={`Profile of ${firstName}`}
              style={{
                marginTop: '1rem',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '2px solid ',
              }}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default App;
