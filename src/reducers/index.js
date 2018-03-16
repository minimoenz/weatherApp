import { combineReducers } from 'redux';

export const cityDetails = (state =[], action) => {
	switch(action.type){
		case 'SEARCH_CITY':
			return action.cityDetails;
		case 'CLEAR_CITY': 
			return [];
		default:
			return state;
	}
};

const reducers = combineReducers({cityDetails});
export default reducers;