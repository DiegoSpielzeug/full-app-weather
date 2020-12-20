import React from 'react';
import '../styles/main.css';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Week from './Week';
import Progressbar from './Progressbar';

const Main = ({dataApiWeek, dataApiDay,celciusOrFarenheit,setCelciusOrFarenheit}) => {

    if(Object.keys(dataApiWeek).length === 0 || Object.keys(dataApiDay).length === 0) return null;

    const {main, visibility,wind} = dataApiDay;
    const celcius = 273.15;
    const farenheit = 255.372;
    const handleClickCelcius = () => {
        setCelciusOrFarenheit(celcius);
     } 
    const handleClickFarenheit = () => {
        setCelciusOrFarenheit(farenheit);
    } 
    return (
        <div className="main">
            <div className="main_c_f">
                <p
                    className="main_celsius"
                    onClick={handleClickCelcius}
                >C°</p>
                <p 
                    className="main_fahrenheit"
                    onClick={handleClickFarenheit}
                >F°</p>
            </div>
            <Week
                dataApiWeek={dataApiWeek}
                celciusOrFarenheit={celciusOrFarenheit}
                setCelciusOrFarenheit={setCelciusOrFarenheit}
            />
            <h4 className="main_subtitle">Today's Heightlight</h4>
            <div className="main_info_first">
                <div className="main_info">
                    <p className="main_info_first_subtitle">Wind Status</p>
                    <p className="main_wind_mph">{wind.speed}<span>mph</span></p>
                    <div className="main_wind_direction">
                        <LabelImportantIcon/>
                        <p>WSB</p>
                    </div>
                </div>
                <div className="main_info">
                    <p className="main_info_first_subtitle">Humidity</p>
                    <p className="main_wind_mph">{main.humidity}<span>%</span></p>
                    <div className="main_progresBar">
                        <div className="main_progresBar_num">
                            <p>0%</p>
                            <p>50%</p>
                            <p>100%</p>
                        </div>
                        <Progressbar
                        bgcolor={"#FFEC65"}
                        completed={main.humidity}
                    />
                    </div>
                </div>
            </div>

            <div className="main_info_first">
                <div className="main_info">
                    <p className="main_info_first_subtitle">Visibility</p>
                    <p className="main_wind_mph">{visibility}<span>miles</span></p>
                </div>
                <div className="main_info">
                    <p className="main_info_first_subtitle">Air Pressure</p>
                    <p className="main_wind_mph">{main.pressure}<span>mb</span></p>
                </div>
            </div>
        </div>
    );
};

export default Main;