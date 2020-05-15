import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changableUrl = url;

  if(country){
    changableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changableUrl);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try{
    const { data } = await axios.get(`${url}/daily`);
    
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  }catch(error){
    console.log('Error');
  }
}

export const fetchCountries = async () =>{
  try{
    const {data:{ countries}} = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  }catch(error){
    console.log(error);
  }
}


export const fetchNepalOverallData = async ()=> {
  let url = `https://nepalcorona.info/api/v1/data/nepal`
  try{
    const { data:{
      tested_positive,
      recovered,
      deaths,
      tested_total,
      tested_negative,
      in_isolation,
      quarantined,
      tested_rdt,
      pending_result,
      updated_at,
    }} = await axios.get(`${url}`);

    return {
      confirmed: tested_positive,
      recovered,
      deaths,
      tested_total,
      tested_negative,
      in_isolation,
      quarantined,
      tested_rdt,
      pending_result,
      updated_at 
    }
    // console.log(data);
    // return modifiedData;
  }catch(error){
    console.log(error);
  }
}


export const fetchNepalData = async ()=> {
  let url = ' https://data.nepalcorona.info/api/v1'
  try{
    const response = await axios.get(`${url}/covid`);
    console.log(response);
  }catch(error){
    console.log(error);
  }
}