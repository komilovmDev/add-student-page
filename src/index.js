import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Demo from './demo';
import './style.css'


ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
      <Demo />
  </React.StrictMode>
);