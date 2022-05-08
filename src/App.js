import logo from './logo.svg';
import './App.css';


//BASIC ESSENTIALS REACT COMPONENTS

//
// function Header(props){
//     return (
//         <header>
//             <h1>{props.name}'s kitchen</h1>
//         </header>
//     )
//
// }
//
// function Main(props) {
//     return (
//         <section>
//             <p>We serve the most {props.adjective} food around</p>
//             <img src={logo} height={300} alt="image example"/>
//             <ul style={{textAlign: "left"}}>
//                 {props.dishes.map((dish) => (<li key={dish.id}> {dish.title}</li>))}
//
//             </ul>
//         </section>
//
//     );
// }
//
//
// const dishes = [
//     "mac and cheese",
//     "salmon",
//     "tofu with vegetables","minestrone"
// ]
//
// const dishesObjects = dishes.map((dish,i ) => ({id:i, title:dish}));
//
// function Footer(props){
//     return (
//         <footer>
//             <p>copyright {props.year}</p>
//         </footer>
//     )
// }
//
// function App() {
//     return (
//         <div className="App">
//             <Header name="Horacio"/>
//             <Main adjective="amazing dishes" dishes={dishesObjects}></Main>
//             <Footer year={new Date().getFullYear()}></Footer>
//         </div>
//     );
// }
//
// export default App;


// ENDS BASIC ESSENTIALS REACT COMPONENTS


//             --------------------  CONDITIONAL RENDERING  LESSON

function SecretComponent() {
    return (
        <h1>Secret information for authorized users only</h1>
    )
}

function RegulaComponent() {
    return (
        <h1>Everyone can see this component</h1>
    )
}

// function App(props) {
//
//     if (props.authorized) {
//         return <SecretComponent/>
//     } else {
//         return <RegulaComponent/>
//     }
// }

function App(props) {
    return (
        <>
            {props.authorized ? <SecretComponent/> : <RegulaComponent/>}
        </>
    )
}

export default App;
