const changeAuth = (isLoggedIn) => {
	return {
		type: 'CHANGE_AUTH',
		payload: isLoggedIn
	}
}

export default changeAuth;