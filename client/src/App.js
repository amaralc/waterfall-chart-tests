import logo from './logo.svg';
import './App.css';
import api from './services/api'
import {useCallback, useEffect} from 'react'

function App() {

  // const fetchData = useCallback(async () => {
  //   const response = await api.get('/data');
  //   console.log(response.data);
  // },[])

  // useEffect(() => {
  //   fetchData();
  // },[fetchData])

  useEffect(() => {
    api.get('/data').then(response => {
      console.log(response.data)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
