import React from 'react';
import ReactDOM from 'react-dom/client';
import ComponentVsElement3 from './ComponentVsElement3';
// import ComponentVsElement from './ComponentVsElement';
// import ComponentVsElement2 from './ComponentVsElement2';
import UseStateApp from './UseStateApp';
import UseEffectApp from './UseEffectApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ComponentVsElement /> */}
    {/* <ComponentVsElement2 /> */}
    {/* <ComponentVsElement3 /> */}
    {/* <UseStateApp /> */}
    <UseEffectApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
