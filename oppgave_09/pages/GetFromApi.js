import { useEffect, useState } from "react"

const GetFromApi = () => {
	const [questions, setQuestions] = useState([])

	const loadData = async () => {
		const response = await fetch ("api/pokemonQuiz")
	
		let temp = await response.text()
	
		setQuestions(temp)
		console.log(questions)
	}

	useEffect(() => {
		console.log("useEffect")
		loadData()
	}, [])

	return (
		<main>
			<h1>Oppgave 9</h1>

			<section>
				{JSON.stringify(questions)}
			</section>
		</main>
	)
}

export default GetFromApi