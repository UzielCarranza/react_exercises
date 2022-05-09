import React, {useEffect, useReducer, useState} from 'react';
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

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData);
    }, []);

    if (data) {
        return (
            <div>
                <h1>{data.name}</h1>
                <img src={data.avatar_url} alt={data.login} width={200} height={200}/>
            </div>
        )
    }


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

const root4 = ReactDOM.createRoot(document.getElementById('use--effect'));
root4.render(
    <React.StrictMode>
        <App4 login={"UzielCarranza"}/>
    </React.StrictMode>
);



