import React, { useEffect, useState } from 'react';
import './App.css';
import Aside from './components/Aside';
import Input from './components/Input';
import Main from './components/Main';

function App() {
  //animacion slider
  const [showInput, setShowInput] = useState(false);
  // guardamos la busqueda de laciudad en diferente state para que no se actualice cada vez qeua gregamos una letra al SEARCH
  const [saveCity, setSaveCity] = useState({
    city: 'london'
  });
  //realizamos la consulta al api? o nos esperamos
   const [consultarApi, setConsultarApi] = useState(false);
  //guardamos el resultado de la consulta de la api de la semana
  const [dataApiWeek, setDataApiWeek] = useState({
  });
  //guardamos el resultado de la constula de la api del clima del dia actual
  const [dataApiDay, setDataApiDay] = useState({
  });
  //animacion slider muestra el otro componente
  const handleClick = () => {
    setShowInput(!showInput);
  } 
  //consultar API
  useEffect( () => {
    // evitamos que se cargue la api cuando el usuario no agrega la ciudad
    if(Object.keys(saveCity).length === 0) return;
      // if(consultarApi){
      const obtenerBusqueda = async () => {
          const {city} = saveCity;
          const appiKey = '950568ddd39eb5c425cc70889b304a39';
          const urlWeek = `http://api.openweathermap.org/data/2.5/forecast?q=${city.toLowerCase()}&appid=${appiKey}`;
          const urlDay = `http://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${appiKey}`;
          let respuesta = await fetch(urlWeek);
          let respuesta2 = await fetch(urlDay);
          let dataWeek = await respuesta.json();
          let dataDay = await respuesta2.json();
          setDataApiWeek(dataWeek);
          setDataApiDay(dataDay);
        }
        obtenerBusqueda();
      // }   
  },[saveCity]);
  //temperature celcius or farenheit
  const [celciusOrFarenheit, setCelciusOrFarenheit] = useState(273.15);
  return (
    <div className="weather">
      <Aside
        dataApiDay={dataApiDay}
        showInput={showInput}
        dataApiWeek={dataApiWeek}
        celciusOrFarenheit={celciusOrFarenheit}
        handleClick={handleClick}
        setCelciusOrFarenheit={setCelciusOrFarenheit}
      />
      <Input
        setSaveCity={setSaveCity}
        // mostrarRes={mostrarRes}
        showInput={showInput}
        consultarApi={consultarApi}
        handleClick={handleClick}
        setConsultarApi={setConsultarApi}
      />
      <Main
        celciusOrFarenheit={celciusOrFarenheit}
        dataApiWeek={dataApiWeek}
        dataApiDay={dataApiDay}
        setCelciusOrFarenheit={setCelciusOrFarenheit}
      />
    </div>
  );
};

export default App;