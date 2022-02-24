// ./src/components/Main

import { useContext } from 'react'
import DogsContext from '../context/Dogs/DogsContext'
import UserContext from '../context/User/UserContext'

export default function Main (){

	const ctxDog = useContext(DogsContext)
    const ctxUser = useContext(UserContext)

	console.log(ctxDog)
    console.log(ctxUser)


	return (
		<>
			Área principal.
			<p>{ctxDog.hola}</p>
            <button onClick={ () => { ctxDog.changeName() } }>Cambiar nombre</button>
            <p>LoggedIn: {ctxUser.loggedIn.toString()}</p>
            <button onClick={ () => { ctxUser.changeStatus() } }>Cambiar estado</button>

		</>
	)
}