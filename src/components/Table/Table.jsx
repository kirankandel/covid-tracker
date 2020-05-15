import React, {useState, useEffect} from 'react';
import styles from './Table.module.css';
import { fetchNepalData } from '../../api';

const Table = () =>{
    const [districtData, setdistrictData] = useState({});

    useEffect( ()=>{
        const fetchApi = async ()=>{
        setdistrictData(await fetchNepalData());
    }
    fetchApi()
    // console.log(`DistrictData: ${districtData}`);

    },[]);

return(
    <div className={styles.container}>
        
    </div>
)

}

export default Table;
 