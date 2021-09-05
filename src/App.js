
import './App.css';
import NavBar from './components/navBar';
import Footer from "./components/footer";
import QuantityPicker from'./components/quantityPicker';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
    
    <NavBar></NavBar>

    <div ClassName="container-fluid">

    <h1>online store!!!</h1>

    <QuantityPicker></QuantityPicker>
    </div>
    
    <Footer></Footer>

    </div>
  );
}

export default App;

