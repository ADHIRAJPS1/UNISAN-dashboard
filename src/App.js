import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navigtion/sideNavBar";
import HomePage from "./Components/Homepage";
// import { Provider } from 'react-redux';
// import store from '../src/redux/actions/';

function App() {
  const abc = '';
  return (
    // <Provider store={abc}>
    <div className="App">
      <header className="App-header">
        <h2 align="center">THIS APPLICATION IS UNDER DEVELOPMENT</h2>
        <NavBar />
      </header> 
    </div>
    // </Provider>
  );
}

export default App;
