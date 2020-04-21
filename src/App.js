import React from 'react';
import coronaImage from './images/corona-logo.png';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

import './App.css';

class App extends React.Component{
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });

  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <img src={coronaImage} className="img-logo"  alt="COVID-19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>

    )
  }
}

export default App;
