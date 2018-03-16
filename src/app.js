import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCityDetails, clearCity } from './actions/action';
	
export class App extends Component {
	state = { city: 'Auckland' };
	
	componentDidMount() {
		this.updateWeatherDetails(this.state.city);
	}
	
	updateWeatherDetails = city => this.props.getCityDetails(city);
	
	
	render(){	
		console.log('test=',this.props.cityDetails);
		return (
			<div>
				<h1>Simple Weather App </h1>
				<strong> Input City/Town: </strong>
				<input
					type="text"
					value={this.state.city}
					onChange={ev => this.setState({ city: ev.target.value})}
					placeholder="Auckland"
				/>
				<button onClick={()=>this.updateWeatherDetails(this.state.city)}>
				Search City
				</button>
				<div className="container" align="left">
				<div className="heading">Today's Forecast for {this.state.city}</div>
				<div className="tempr">NOW {this.props.cityDetails.temp}</div>
				<div className="theRest">max {this.props.cityDetails.temp_max}</div>
				<div className="theRest">min {this.props.cityDetails.temp_min}</div>
				<div className="theRest">humidity {this.props.cityDetails.humidity}</div>
				<div className="theRest">pressure {this.props.cityDetails.pressure}</div>
				</div>
				
				
			
			
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => ({cityDetails: state.cityDetails});
const mapDispatchToProps = { getCityDetails, clearCity };
const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default AppContainer;