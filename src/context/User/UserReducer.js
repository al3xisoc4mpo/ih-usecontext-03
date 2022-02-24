const reducer = (globalState, action) => {

	switch(action.type){
		case "CHANGE_STATUS":
			return {
				...globalState,
				loggedIn: action.payload
			}
		
		default:
			return globalState
	}


}


export default reducer