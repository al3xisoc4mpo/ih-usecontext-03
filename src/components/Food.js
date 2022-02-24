import React, { useState } from 'react'

export default function Food() {

	const [food, setFood] = useState({
		name: "",
		price: 0
	})

    const [list, setList] = useState([])

	const [error, setError] = useState("")

    const handleInput = (event) => {
        setFood({
            ...food,
            [event.target.name]: event.target.value
        })
      };

      const handleSubmit = (event) => {
        event.preventDefault()

        if(!food.name || !food.price) {
			setError("Existe un campo vacío. Por favor, verifica nuevamente.")
			return
		}

        setList([
			...list,
			food
		])

        setFood({
            name: "",
		    price: 0
        })

        setError("")

      };


  return (
	  <>
      <h1>Food Form</h1>
	  	<form onSubmit={ (event) => { handleSubmit(event) }}>
			<label>Nombre</label>
			<input 
				name="name"
                onChange={(event) => handleInput(event)}
			/>	  
			<label>Precio</label>
			<input 
				name="price"
                onChange={(event) => handleInput(event)}
			/>	

			<button type="submit">Crear alimento</button>  
		</form>

        <h1>List of Foods</h1>
        {
				list.length === 0 ? 
					<p>No hay comidas</p> 
				:
					list.map((element, index) => {
						return (
							<div key={index}>
								<p>Name: {element.name}</p>
								<p>Price: {element.price}</p>
							</div>
						)
					})
			}
	  </>
	

  )
}