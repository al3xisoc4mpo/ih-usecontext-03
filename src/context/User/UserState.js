// ./src/context/Dogs/DogsState.js

// 1. IMPORTACIONES
import { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'

// 2. FUNCIÓN / COMPONENTE DE ESTADO GLOBAL 
const UserState = (props) => {

	// A. ESTADO INICIAL
	const initialState = {
		loggedIn: false,
		userTags: []
	}

	// B. GESTIÓN DE LAS FUNCIONES QUE CAMBIAN EL ESTADO INICIAL (REDUCERS)
	const [globalState, dispatch] = useReducer(UserReducer, initialState)

	// C. FUNCIONES API / SIDE EFFECT FUNCTIONS

	const changeStatus = () => {

		dispatch({ // EL OBJETO DENTRO DE DISPATCH SE LLAMA ACTION
			type: "CHANGE_STATUS",
			payload: !globalState.loggedIn
		})

	}


	// D. RETORNO
	return (
		<UserContext.Provider
			value={{
				loggedIn: globalState.loggedIn,
				userTags: globalState.userTags,
				changeStatus
			}}
		>

			{props.children}

		</UserContext.Provider>
	)

}
 


// 3. EXPORTACIÓN

export default UserState