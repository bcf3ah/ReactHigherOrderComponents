const changeAuth = (state = false, action) => {
	switch(action.type){
		case 'CHANGE_AUTH':
			return action.payload;
			break;
		default:
			return state;
	}
}

export default changeAuth;