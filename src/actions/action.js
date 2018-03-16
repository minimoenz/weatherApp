const API_KEY = 'd0eecd53953dcae67ddbf4ff9e91a5cb';

export const searchCity = cityDetails => ({
	type: 'SEARCH_CITY',
	cityDetails
	});
	
export const clearCity = () => ({type: 'CLEAR_CITY'});

export const getCityDetails = city => async dispatch => {
	try{
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`; //https://api.openweathermap.org/data/2.5/weather?q=hong%20kong&APPID=d0eecd53953dcae67ddbf4ff9e91a5cb
		const response = await fetch(url);
		const responseBody = await response.json();		  
		dispatch(searchCity(responseBody.main));		
		}
	catch(error){
		console.error(error);
		dispatch(clearCity());
	}
	};