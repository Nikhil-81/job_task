import logo from './logo.svg';
import './App.css';
import AllRouter from './rout/allrout';
import "./styles/global.css"
import NavBar from './component/navbr';
import Sidebar from './component/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div Style={"width:100vw;  background:#F5F5F5;"} >
        <NavBar/>
        <AllRouter/>
      </div>
    </div>
  );
}

export default App;
