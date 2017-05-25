import React from 'react';
import { Link } from 'react-router-dom'

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
    </header>

    <main>
      {children}
    </main>
  </div>
)

export default App
