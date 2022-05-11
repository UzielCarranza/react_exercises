import React, {useEffect, useReducer, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import {Home, About, Contacts, Events} from "./pages";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App authorized={true}/>
    </React.StrictMode>
);


//   --------------------- ARRAY DESTRUCTURING


//

function App2() {
    const [emotion, setEmotion] = useState("");
    return (
        <>
            <h1>current emotion is {emotion}</h1>
            <button onClick={() => setEmotion("frustated")}> Frustate</button>
            <button onClick={() => setEmotion("happy")}> happy</button>

            <button onClick={() => setEmotion("sleeping")}> sleeping</button>

        </>
    )
}


function App3() {
    const [checked, toggle] = useReducer(
        (checked => !checked), false);


    return (
        <>
            <input type="checkbox" value={checked} onChange={toggle}/>
            <p>{checked ? "checked" : "not checked"}</p>
        </>
    )

}


// ASYNCRONOUS REACT


// https://api.github.com/users/UzielCarranza
function App4({login}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!login) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <pre>{JSON.stringify(error, null, 2)} < /pre>
    }

    if (!data) {
        return null;
    }

    return (
        <div>
            <h1>{data.name}</h1>
            <img src={data.avatar_url} alt={data.login} width={200} height={200}/>
        </div>
    )

}


const root2 = ReactDOM.createRoot(document.getElementById('use--effect'));
root2.render(
    <React.StrictMode>
        <App2/>
    </React.StrictMode>
);


const root3 = ReactDOM.createRoot(document.getElementById('reducer'));
root3.render(
    <React.StrictMode>
        <App3/>
    </React.StrictMode>
);

const root4 = ReactDOM.createRoot(document.getElementById('assynchronous-react'));
root4.render(
    <React.StrictMode>
        <App4 login={"UzielCarranza"}/>
    </React.StrictMode>
);


//   ROUTERS


function App5() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/contact" element={<Contacts/>}/>
            </Routes>
        </div>
    )

}

const root5 = ReactDOM.createRoot(document.getElementById('routers'));
root5.render(
    <Router>
        <App5/>
    </Router>
);

