// PlayersList.js
import React from 'react';
import players from './players.js';
import Player from './player.js';
import { Container, Row, Col } from 'react-bootstrap';

const PlayersList = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center text-light">Team Players</h2>
            <Row className="justify-content-center">
                {players.map((player, index) => (
                    <Col key={index} md={6} lg={4}>
                        {/*Using the spread operator to pass props */}
                        <Player {...player} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PlayersList;
