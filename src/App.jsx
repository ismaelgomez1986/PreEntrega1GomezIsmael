import "./App.css";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import logoNavBar from "./img/logoNavBar.png";

function App() {
  return (
    <div className="App">
      <NavBar img={logoNavBar}>
        <CartWidget />
      </NavBar>
      <hr></hr>
      <ItemListContainer greetings="Your best Chess Store" />
    </div>
  );
}

export default App;

