import { useEffect, useState } from "react"

const GetFromApi = () => {
	const [questions, setQuestions] = useState([])

	// Legger til hardkodet data
	const addData = async () => {
		const response = await fetch("api/pokemonQuiz", {
			method: "POST",
			body: JSON.stringify({
				question: "Hvem er den nyeste pokemonen?",
				answers: [
					{
						answer: "Cleaver",
						correct: true
					}, {
						answer: "Zoroa og Zoruark"
					}
				]
			})
		})

		const data = await response.text()

		console.log(data)

		setQuestions(data)
	}

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
			{// Data som legges til ved trykk på knappen er hardkodet
			}
			<button type="button" onClick={addData}>Legg til data</button>
		</main>
	)
}

export default GetFromApi