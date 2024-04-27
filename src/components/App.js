// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/form" id="form-link">Form Layout</Link>
            </li>
            <li>
              <Link to="/form-ref" id="form-ref-link">Form with useRef</Link>
            </li>
            <li>
              <Link to="/form-state" id="form-state-link">Form with useState</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/form" element={<Form/>} />
        <Route path="/form-ref" element={<FormRef/>} />
        <Route path="/form-state" element={<FormState/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
