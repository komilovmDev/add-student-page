import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import DataGrid from './DataGrid';
import WorkInfo from './WorkerInfo';


ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
      <WorkInfo />
  </React.StrictMode>
);