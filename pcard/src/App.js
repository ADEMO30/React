import React from 'react';
import PlayersList from './PlayerList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '2rem' }}>
      <PlayersList />
    </div>
  );
}

export default App;
