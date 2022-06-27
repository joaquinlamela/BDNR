import { useState } from 'react';

import Table from './components/Table';
import './App.css';
import axios from 'axios';

function App() {
  const [vehicleId, setVehicleId] = useState('') 
  const [data, setData] = useState([]);

  const [columns, setColumns] = useState(Array(6).fill(0).map((e,i) => ({
    Header: `Column ${i}`,
    accessor: `col${i}`
  })))
  

  const onClickHandler = async () => {
    const vehicleIdFilter = vehicleId ? {params: {'vehicle-id':vehicleId}} : null
    const {data:vehicleData} = await axios.get(process.env.REACT_APP_API_URL, vehicleIdFilter)
    if (vehicleData) {
      const vehicleColumns = Object.keys(vehicleData[0]).map((e)=>({
            Header: e,
            accessor: e,
      }))
      setColumns(vehicleColumns)
      setData(vehicleData)  
    }
  };

  return (
    <div className='container'>
      <header className='header'>
        <input type='text' placeholder='Insert vehicle id' onChange={({target:{value}})=>setVehicleId(value)} />
        <button type='button' onClick={onClickHandler}>search</button>
      </header>
      <div className='tableContainer'>
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
}

export default App;
