import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './views/Main';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element = {<Main/>} path = "/"/>

      </Routes>
    </div>
  );
}

export default App;
