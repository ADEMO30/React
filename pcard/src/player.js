import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card style={styles.card}>
            <Card.Img variant="top" src={imageUrl} alt={name} style={styles.image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Team:</strong> {team}<br />
                    <strong>Nationality:</strong> {nationality}<br />
                    <strong>Jersey Number:</strong> {jerseyNumber}<br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

const styles = {
    card: {
        width: '18rem',
        backgroundColor: '#1e1e1e',
        color: 'white',
        margin: '1rem',
        border: '1px solid #333'
    },
    image: {
        height: '300px',
        objectFit: 'cover'
    }
};

Player.defaultProps = {
    name: 'Unknown Player',
    team: 'Unknown Team',
    nationality: 'N/A',
    jerseyNumber: 0,
    age: 'N/A',
    imageUrl: 'https://via.placeholder.com/250x300?text=Player'
};

Player.propTypes = {
    name: PropTypes.string,
    team: PropTypes.string,
    nationality: PropTypes.string,
    jerseyNumber: PropTypes.number,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imageUrl: PropTypes.string
};

export default Player;
