import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core";
import InfoBox from './InfoBox';
import MapContainer from "./Map";
import './App.css';
import Table from "./Table";
import { sortData, prettyPrintStat } from "./util";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34, lng: -40 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const[casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
    });
  }, []);

  useEffect(() => {
    const getCountriesData = () => {
      fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }));
          let sortedData = sortData(data);
          setMapCountries(data);
          setCountries(countries);
          setTableData(sortedData);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;

    const url = countryCode === "worldwide" 
    ? "https://disease.sh/v3/covid-19/all"
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      setCountry(countryCode);
      setCountryInfo(data);
      if (countryCode != "worldwide") {
        setMapCenter({lat: data.countryInfo.lat, lng: data.countryInfo.long});
        console.log(mapCenter);
      }
      setMapZoom(4);
    });
  };

  return (
    <div className="app">
      <div className = "app__left">
        <div className="app__header">
        <h1> COVID-19 Tracker </h1>
          <FormControl className="app__dropdown">
            <Select variant = "outlined" onChange={onCountryChange} value = {country} >
            <MenuItem value = "worldwide">Worldwide</MenuItem>
              { countries.map(country => (
                  <MenuItem value = {country.value}>{country.name}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox 
          active={casesType === "cases"}
          onClick={e => setCasesType('cases')}
          title="Coronavirus Cases" 
          cases={prettyPrintStat(countryInfo.todayCases)} 
          total={prettyPrintStat(countryInfo.cases)}
          />
          <InfoBox
          active={casesType === "recovered"}
          onClick={e => setCasesType('recovered')}
          title="Recovered" 
          cases={prettyPrintStat(countryInfo.todayRecovered)} 
          total={prettyPrintStat(countryInfo.recovered)}
          />
          <InfoBox
          active={casesType === "deaths"}
          onClick={e => setCasesType('deaths')}
          title="Deaths" 
          cases={prettyPrintStat(countryInfo.todayDeaths)} 
          total={prettyPrintStat(countryInfo.deaths)}
          />
        </div>

        <MapContainer casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom}/>
        {console.log(mapCenter)}
        </div>
          <Card className="app__right">
            <CardContent>
              <h3>Live Cases by Country</h3>
              <Table countries={tableData} />
              <h3>Worldwide {casesType}</h3>
              <LineGraph casesType={casesType}/>
            </CardContent>
          </Card>
          
    </div>
  );
}

export default App;
