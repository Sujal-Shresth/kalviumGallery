import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppClass from './AppClass.jsx'
import './index.css'
import data from "./components/DataComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App title="Kalvium Gallery using functionalComponent" data={data} />
    <AppClass title="Kalvium Gallery using classComponent" data={data} />
  </React.StrictMode>
);
