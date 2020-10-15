import React, { Component } from 'react';
import {TextField, Button, Typography, Card, CardContent, AppBar, Toolbar} from '@material-ui/core'
import logo from './components/logo.png';
import './App.css';

const URL_PRIMARY = "https://maps.googleapis.com/maps/api/staticmap?center=";
const URL_SECONDARY = "&zoom=16&size=600x400&maptype=satellite&key=AIzaSyDWheQzX_fc2AHnCCZ1BN5T6f-DJ7ky3NQ";

// Long, Lat: 37.368510, -121.697141

class App extends Component {

  constructor() {
    super();
    this.state = {
      geopoint: "",
      search: "",
    };
  }

  handleGeopoint(value) {
    this.setState({
      geopoint: value
    });
  }

  handleSubmit() {
    this.setState({
      search: URL_PRIMARY + this.state.geopoint + URL_SECONDARY
    });
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar variant="dense">
            <img src={logo} className="App-logo" alt="logo"/>
            <Typography variant="h2" color="inherit">Vegetation Index Via Satellite Imagery</Typography>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <br/><br/><br/>
          <Card variant="outlined" elevation={3}>
            <CardContent style={{
            width: 800,
            height: 1200,
            marginTop: 60,
            marginBottom: 60,
            marginLeft: 100,
            marginRight: 100}}>
              <Typography variant="h6">
                This web application determines the vegetation (vitality) index at any given geo-point using 
                satellite imagery and a computer vision (CV) image processing algorithm. An index value will
                be returned to represent a scale from a greenness spectrum of the growing vegetation. The 
                higher the number on the vegetation index, the plant-life in that region tends to flourish 
                and have a higher density. On the contrary, lower indeces indicate plant-life that is 
                withering and/or very dry.<br/><br/><br/>
              </Typography>
              <Typography variant="h5">
                Start by inputting a geo-location in the formats specified below:<br/><br/>
              </Typography>
              <Typography variant="h6">
                1) Address: [street], [city], [state]<br/>2) Coordinate: [longitude], [latitude]<br/>
              </Typography>
              <br/><TextField id="outlined-basic" label="Location" variant="outlined" value={this.state.geopoint} onChange={e => this.handleGeopoint(e.target.value)}/>
              <br/><Button variant="contained" color="primary" onClick={() => this.handleSubmit()}>Submit</Button><br/><br/>
              <img src={this.state.search} alt="static_map"/>
            </CardContent>
          </Card>
          </header>
      </div>
    );
  }
}

export default App;
