import './App.css';
import api from './services/api'
import {useEffect, useState} from 'react'
import Plot from 'react-plotly.js';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    api.get('/data').then(response => {
      console.log(response.data);
      const zData = response.data.map(item => item.fft);
      const yData = response.data.map(item => item.datetime)
      const plotlyData = [{
        z: zData,
        y: yData,
        type: 'surface'
      }];
      
      setData(plotlyData);

      console.log(plotlyData);
    })
  },[])

  if(!data){
    return <p>Carregando...</p>
  }

  return (

    <div className="App">
      <div className="Chart">
        <Plot className="Chart"
          data={data}
          layout={ { title: 'Waterfall'} }
        />
      </div>        
    </div>
  );
}

export default App;
