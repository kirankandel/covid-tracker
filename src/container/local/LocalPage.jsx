import React, { Component } from "react";
import {
   Cards,
   Charts,
   CountryPicker,
   Table
  } from '../../components';

import {fetchNepalOverallData, fetchNepalData} from '../../api';
import styles from './LocalPage.module.css';

class LocalPage extends Component{

  state = {
    overallData:{},
    data:{},
    country:''
  }
  async componentDidMount(){
    const fetchedOverallData = await fetchNepalOverallData();
    // const fetchedData = await fetchNepalData();
    const fetchedData = {};
    // console.log(fetchedData);
    console.log(fetchedOverallData);
    this.setState({data: fetchedData, overallData: fetchedOverallData});
  }
  
  // handleCountryChange = async (country)=>{
  //     const fetchedData = await fetchNepal(country); 
  //     // console.log(`handlechanged ${fetchedData}`);
  //     this.setState({data: fetchedData, country: country})
  // }
  render(){
    const { data, overallData, country } = this.state;

  return (
    <div className={styles.container}>
      <h1>Nepal Corona Tracker</h1>
      {/* <Table/> */}
      <Cards data={overallData} isGlobal={false}/>
      {/* <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/> */}
    </div>
  );
  }
}


export default LocalPage;
