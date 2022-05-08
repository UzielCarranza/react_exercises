import logo from './logo.svg';
import './App.css';


function Header(props){
    return (
        <header>
            <h1>{props.name}'s kitchen</h1>
        </header>
    )

}

function Main(props) {
    return (
        <section>
            <p>We serve the most {props.adjective} food around</p>
            <img src={logo} height={300} alt="image"/>
            <ul style={{textAlign: "left"}}>
                {props.dishes.map((dish) => (<li key={dish.id}> {dish.title}</li>))}

            </ul>
        </section>

    );
}


const dishes = [
    "mac and cheese",
    "salmon",
    "tofu with vegetables","minestrone"
]

const dishesObjects = dishes.map((dish,i ) => ({id:i, title:dish}));

function Footer(props){
    return (
        <footer>
            <p>copyright {props.year}</p>
        </footer>
    )
}

function App() {
    return (
        <div className="App">
            <Header name="Horacio"/>
            <Main adjective="amazing dishes" dishes={dishesObjects}></Main>
            <Footer year={new Date().getFullYear()}></Footer>
        </div>
    );
}

export default App;
