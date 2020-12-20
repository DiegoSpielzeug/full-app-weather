import React from 'react';
import img from '../img/01d.png';
import '../styles/week.css';
import icons from './img';

const week = ({dataApiWeek,celciusOrFarenheit,setCelciusOrFarenheit}) => {
  const{list} = dataApiWeek;
   function makeDate(days){
        let unix_timestamp = days
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        let date = new Date(unix_timestamp * 1000);
        // full date that we need in this case
        let DayNum = date.getDate();
        let makeDay = ["Sun", "Mon", "Tu", "Wed", "Thu", "Fri", "Sa"];
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
            iconImg = icons[15];
            break;
        case '13n':
            iconImg = icons[16];
            break;
        case '50d':
            iconImg = icons[17];
            break;
        case '50n': 
            iconImg = icons[18];
            break;
        default:
          iconImg = icons[3];
      }
      return iconImg;
    }
    return (
        <div className="week">
            <div className="week_day">
                <p className="week_date">{makeDate(list[0].dt)}</p>
                <img src={iconDay(list[0].weather[0].icon)} alt="" />
                <div className="week_day_degrees">
                    <p className="week_day_max_degrees">{Math.round(list[0].main.temp_max - celciusOrFarenheit)}<span>{(celciusOrFarenheit === 273.15) ? `°C` : `°F`}</span></p>
                    <p className="week_day_min_degrees">{Math.round(list[0].main.temp_min - celciusOrFarenheit)}<span>{(celciusOrFarenheit === 273.15) ? `°C` : `°F`}</span></p>
                </div>
            </div>

            <div className="week_day">
                <p className="week_date">{makeDate(list[9].dt)}</p>
                <img src={iconDay(list[9].weather[0].icon)} alt="" />
                <div className="week_day_degrees">
                    <p className="week_day_max_degrees">{Math.round(list[9].main.temp_max - celciusOrFarenheit)}<span>{(celciusOrFarenheit === 273.15) ? `°C` : `°F`}</span></p>
                    <p className="week_day_min_degrees">{Math.round(list[9].main.temp_min - celciusOrFarenheit)}<span>{(celciusOrFarenheit === 273.15) ? `°C` : `°F`}</span></p>
                </div>
            </div>

            <div className="week_day">
                <p className="week_date">{makeDate(list[19].dt)}</p>
                <img src={iconDay(list[19].weather[0].icon)} alt="" />
                <div className="week_day_degrees">
                    <p className="week_day_max_degrees">{Math.round(list[19].main.temp_max - celciusOrFarenheit)}<span>{(celciusOrFarenheit === 273.15) ? `°C` : `°F`}</span></p>
                    <p className="week_day_min_degrees">{Math.round(list[19].main.temp_max - celciusOrFarenheit)}<span>{(celciusOrFarenheit === 273.15) ? `°C` : `°F`}</span></p>
                </div>
            </div>

            <div className="week_day">
                <p className="week_date">{makeDate(list[29].dt)}</p>
                <img src={iconDay(list[29].weather[0].icon)} alt="" />
                <div className="week_day_degrees">
                    <p className="week_day_max_degrees">{Math.round(list[29].main.temp_max - celciusOrFarenheit)}<span>{(celciusOrFarenheit === 273.15) ? `°C` : `°F`}</span></p>
                    <p className="week_day_min_degrees">{Math.round(list[29].main.temp_max - celciusOrFarenheit)}<span>{(celciusOrFarenheit === 273.15) ? `°C` : `°F`}</span></p>
                </div>
            </div>

            <div className="week_day">
                <p className="week_date">{makeDate(list[39].dt)}</p>
                <img src={iconDay(list[39].weather[0].icon)} alt="" />
                <div className="week_day_degrees">
                    <p className="week_day_max_degrees">{Math.round(list[39].main.temp_max - celciusOrFarenheit)}<span>{(celciusOrFarenheit === 273.15) ? `°C` : `°F`}</span></p>
                    <p className="week_day_min_degrees">{Math.round(list[39].main.temp_max - celciusOrFarenheit)}<span>{(celciusOrFarenheit === 273.15) ? `°C` : `°F`}</span></p>
                </div>
            </div>
        </div>
    );
};

export default week;