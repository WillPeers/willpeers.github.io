import React from 'react';
import List from './List';
import data from './data';
import './App.css';

function App() {
  return (
    <main>
      <section className="container">
        <h3>{data.Length} Birthdays Today</h3>
        <List people={data}/>
      </section>
    </main>
  );
}

export default App;
