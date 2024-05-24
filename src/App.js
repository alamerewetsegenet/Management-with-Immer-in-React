import React from 'react';
import './App.css';
import ShoppingListWithImmer from './ShoppingListWithImmer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List App</h1>
      </header>
      <main>
        <ShoppingListWithImmer />
      </main>
    </div>
  );
}

export default App;
