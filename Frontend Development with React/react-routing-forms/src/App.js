import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Form from './components/Form';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/form">
                Form
              </Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/form"
              element={<Form />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;