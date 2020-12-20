import React from 'react';
import AsideInfo from './AsideInfo';
import '../styles/aside.css';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

function aside({showInput, handleClick,dataApiDay,dataApiWeek,celciusOrFarenheit}) {

    return (
            <div className={showInput ? "aside active" : "aside"}>
                <div className="aside_button">
                    <p 
                        className="aside_search"
                        onClick={handleClick}
                    >search for places</p>
                    <LocationSearchingIcon
                        onClick={handleClick}
                    />
                </div>
                <AsideInfo
                    dataApiDay={dataApiDay}
                    dataApiWeek={dataApiWeek}
                    celciusOrFarenheit={celciusOrFarenheit}
                />
            </div>
        );
    }

export default aside;