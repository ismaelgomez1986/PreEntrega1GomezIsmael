import "./App.css";
import CartWidget from "./components/CartWidget";
import Clicker from "./components/Clicker";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import logoNavBar from "./img/logoNavBar.png";

function App() {
  return (
    <div className="App">
      <NavBar img={logoNavBar}>
        <CartWidget />
      </NavBar>
      <ItemListContainer greetings="Your best Chess Store" />
      <hr></hr>
      <Clicker></Clicker>
    </div>
  );
}

export default App;

