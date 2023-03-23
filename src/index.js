import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import DataGridDemo from './DataGrid';
import Demo from './demo';
import './style.css'


ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
      <DataGridDemo />
  </React.StrictMode>
);