import React, { Component } from "react";
import {
   Cards,
   Charts,
   CountryPicker,
   Table
  } from '../../components';

import {fetchData} from '../../api';
import styles from './GlobalPage.module.css';

class GlobalPage extends Component{

  state = {
    data:{},
    country:''
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({data: fetchedData})
  }
  
  handleCountryChange = async (country)=>{
      const fetchedData = await fetchData(country); 
      // console.log(`handlechanged ${fetchedData}`);
      this.setState({data: fetchedData, country: country})
  }
  render(){
    const { data, country } = this.state;

  return (
    <div className={styles.container}>
      <h1>Global Corona Tracker</h1>
      <Table/>
      <Cards data={data} isGlobal= {true}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
    </div>
  );
  }
}


export default GlobalPage;
