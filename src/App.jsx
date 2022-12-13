import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import NavBar from "./components/NavBar";
import logoNavBar from "./img/logoNavBar.png";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar img={logoNavBar}>
        </NavBar>
        <Routes>
          <Route path='/' element={ <ItemListContainer greetings={'Your best Sport Store!!'} /> } ></Route>
          <Route path='/item/:id' element={<ItemDetail/>} />
          <Route path='/category/:idCategories' element={<ItemListContainer greetings={'Your best Sport Store!!'}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
