const Food = ({foods}) => {

	let counter = 0;
	return (
		<ul>
      {foods.map(food =>
        <li key={counter++}>{food}</li>
      )}
    </ul>
  )
}

export default Food