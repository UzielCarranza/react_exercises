import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App authorized={true}/>
    </React.StrictMode>
);


//   --------------------- ARRAY DESTRUCTURING


//

function App2() {

    const [, , light] = [
        "boots",
        "tent",
        "headlamp",

    ]
}

const root2 = ReactDOM.createRoot(document.getElementById('array-destructuring'));
root2.render(
    <React.StrictMode>
        <App2/>
    </React.StrictMode>
);



