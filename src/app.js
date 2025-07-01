import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Card } from 'react-bootstrap';

const app = () => {
    return (
        <React.Fragment>
            <div>    <Navbar bg="light">
                <Container>
                    <Navbar.Brand>My Navbar</Navbar.Brand>
                </Container>
            </Navbar>

                <Container className="my-4">
                    <h1>My Heading</h1>

                    <Card className="mb-3">
                        <Card.Body>Card 1 content</Card.Body>
                    </Card>

                    <Card className="mb-3">
                        <Card.Body>Card 2 content</Card.Body>
                    </Card>

                    <Card className="mb-3">
                        <Card.Body>Card 3 content</Card.Body>
                    </Card>
                </Container>



            </div>
        </React.Fragment >
    );
};
export default app;
