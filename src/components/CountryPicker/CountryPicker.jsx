import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl, StylesProvider} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from "../../api";

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setfetchedCountries] = useState([]);
    useEffect(()=> {
        const fetchApi = async() => {
            setfetchedCountries(await fetchCountries());
        }

        fetchApi();
    },[setfetchedCountries]);

    return(
        <div className={styles.container}>
            <FormControl>
                <NativeSelect defaultValue="" onChange={(e)=>{
                    handleCountryChange(e.target.value);
                }}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;