import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Jon Snow',
        bio: 'Knows nothing but leads bravely.',
        imgSrc: 'https://via.placeholder.com/200x250?text=Jon+Snow',
        profession: 'Lord Commander of the Night\'s Watch'
      },
      shows: false,
      mountedTime: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { Person, shows, mountedTime } = this.state;

    return (
      <div style={styles.app}>
        <button onClick={this.toggleShow} style={styles.button}>
          {shows ? 'Hide' : 'Show'} Profile
        </button>

        <p style={{ color: '#ccc' }}>Component mounted since: {mountedTime} seconds</p>

        {shows && (
          <div style={styles.card}>
            <img src={Person.imgSrc} alt={Person.fullName} style={styles.image} />
            <h2>{Person.fullName}</h2>
            <p><strong>Profession:</strong> {Person.profession}</p>
            <p><strong>Bio:</strong> {Person.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  app: {
    backgroundColor: '#1e1e1e',
    minHeight: '100vh',
    color: 'white',
    padding: '2rem',
    textAlign: 'center'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    marginBottom: '1rem',
    cursor: 'pointer'
  },
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: '8px',
    padding: '1.5rem',
    maxWidth: '300px',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(255,255,255,0.1)'
  },
  image: {
    width: '100%',
    borderRadius: '4px',
    marginBottom: '1rem'
  }
};

export default App;