import data from '../src/questions.json'

describe("questions", () => {

	const questions = data.questinons

	it("should have questions 4 questions", () => {
		expect(questions.length).toBe(4)
	})

	it("should have 4 options per question", () => {
		// Tester alle spørsmål
		questions.forEach((question) => {
			expect(question.answers.length).toBe(4)
		})
	})

	if("should have a title", () => {
		questions.forEach((question) => {
			expect(question.title).toBeTruthy()
		})
	})

	it("should have 1 correct answer per question", () => {
		questions.forEach((question) => {

			let hasCorrect = false

			question.answers.forEach((option) => {
				if(option.correct){
					hasCorrect = true;
				}
			})

			expect(hasCorrect).toBeTruthy()
		})
	})
})