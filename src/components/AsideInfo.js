import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import icons from './img';


const AsideInfo = ({dataApiDay,dataApiWeek,celciusOrFarenheit}) => {

    if(Object.keys(dataApiDay).length === 0 || Object.keys(dataApiWeek).length === 0) return null;

    const {name, main,weather, dt} = dataApiDay;
    
    function makeDate(days){
        let unix_timestamp = days
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        let date = new Date(unix_timestamp * 1000);
        // full date that we need in this case
        let DayNum = date.getDate();
        let makeDay = ["Sunday", "Monday", "Turday", "Wesdey", "Thursday", "Friday", "Saturday"];
        let day = makeDay[date.getDay()];
        let makeMonth = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = makeMonth[date.getMonth()];
        let fullDate = `${day} ${DayNum} ${month}`; 
    return fullDate;
   }
    function iconDay(inputIcon){
        let iconImg;
        switch (inputIcon) {
            case '01d': 
                iconImg = icons[0];
                break;
            case '01n':
                iconImg = icons[1];
                break;
            case '02d':
                iconImg = icons[2];
                break;
            case '02n': 
                iconImg = icons[3];
                break;
            case '03n':
                iconImg = icons[4];
                break;
            case '03d':
                iconImg = icons[5];
                break;
            case '04d': 
                iconImg = icons[6];
                break;
            case '04n': 
                iconImg = icons[7];
                break;
            case '09d':
                iconImg = icons[8];
                break;
            case '09n':
                iconImg = icons[9];
                break;
            case '10d': 
                iconImg = icons[10];
                break;
            case '10n':
                iconImg = icons[11];
                break;
            case '11d':
                iconImg = icons[12];
                break;
            case '11n': 
                iconImg = icons[13];
                break;
            case '13d': 
                iconImg = icons[14];
                break;
            case '13n':
                iconImg = icons[15];
                break;
            case '50d':
                iconImg = icons[16];
                break;
            case '50n': 
                iconImg = icons[17];
                break;
            default:
              iconImg = icons[3];
          }
          return iconImg;
    }
    return (
        <div className="aside_info">
        <div className="aside_weather_Principal"></div>
        <img src={iconDay(weather[0].icon)} alt="" />
        <p className="aside_grade">{Math.round(main.temp - celciusOrFarenheit)}<span>{(celciusOrFarenheit === 273.15) ? `°C` : `°F`}</span></p>
        <p className="aside_weather">{weather[0].main}</p>
        <div className="aside_date">
        <p className="aside_week">{makeDate(dt)}</p>
        </div>
        <div className="aside_location">
            <LocationOnIcon/>
            <p className="aside_places">{name}</p>
        </div>
    </div>
    );
};

export default AsideInfo;