import React, { Fragment, useState } from 'react';
import Header from './Components/header';
import 'bulma/css/bulma.css'
import Formulario from './Components/formulario';
import ClimaResumen from './Components/climaResumen';

function App() {
  const handleOnChange = ((event) => {
    guardaBusqueda({
      ...busqueda,
      [event.target.name]: event.target.value
    });
  });
  
  const handleOnSubmit = (() => {
    const {ciudad, pais} = busqueda;

    const consultaAPI = async () =>{
      const appId = "a2cbe60392d15d4b65e088757c604c14";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

      const request = await fetch(url);

      const response =  await request.json();

      guardaBusqueda({
        ...busqueda,
        "main": response.main
      });
      console.log(response);
    };
    
    consultaAPI();
  });

  const [busqueda, guardaBusqueda] = useState({
    ciudad: "",
    pais: "",
    main: []
  });

  return (
    <Fragment>
      <Header titulo="Clima React App"/>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <Formulario 
              handleInputOnChange={handleOnChange} 
              busqueda={busqueda} 
              handleFormSubmit={handleOnSubmit}
              />
          </div>
          <div className="column">
            <ClimaResumen busqueda={busqueda}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
