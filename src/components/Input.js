import React, { useState, useEffect } from 'react';
import '../styles/input.css';
import SearchIcon from '@material-ui/icons/Search';


const Input = ({showInput,handleClick, setConsultarApi,setSaveCity}) => {
    const [error, setError] = useState(false);
    const [search, setSearch] = useState({
        city: ''
      });
    const {city} = search;
    const handleChange = e => {
        //actualizar el state
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        //validacion
        if(search.city.trim() === ''){
            setError(true);
            return;
        } else {
            setError(false);
            setConsultarApi(true);
            setSaveCity(search);
            setSearch({
                city: ''
            });
        }
    }
    return (
        <div className={showInput ? "input_component" : "input_component active"}>
            <form 
            className="input_header"
            onSubmit={handleSubmit}
            >
                <div className={error ? "input_search active" : "input_search"}>
                    <SearchIcon/>
                    <input 
                        type="text"
                        name="city" 
                        placeholder={error ?  "***ADD CITY NAME**" : "City Name"}
                        value={city}
                        onChange={handleChange}
                     />
                </div>
                <input
                    className="input_btn_search"
                    type="submit" 
                    value="search" 
                    onClick={handleClick}
                />
            </form>
            <div className="input_citys_default">
                <p className="city"
                   >London</p>
                <p className="city"
                    >Colima</p>
                <p className="city"
                    >Berlin</p>
            </div>
        </div>
    );
};
export default Input;