const questions = [
  {
    question: "Hva er nyeste pokemon typekombinasjon?",
    answers: [
      {
        answer: "Ingen nye typer er kommer",
      },
      {
        answer: "'Dragon/fairy",
      },
      {
        answer: "Ghost/Normal",
        correct: true,
      },
    ],
  },
  {
    question: "Hva er showdown?",
    answers: [
      {
        answer: "Kampsimulator",
        correct: true
      }, {
        answer: "Statestikk over mest brukte pokemon"
      }, {
        answer: "Neste generasjon pokemonspill"
      }
    ]
  }
]

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      questions.push(req.body)

      res.status(201)
      res.json({
        sucess:true,
        data: questions
      })

    case "GET":

			// Returnerer spørsmål på tilsvarende index
			if (req?.query?.id) {
				if (req.query.id >= questions.length){
					res.status(404)
					res.json({sucess: false,
										error: "indeksen er for stor"})
					res.end()
					return
				}
				res.status(200)
				res.json({sucess: true,
									data: questions[req.query.id]
				})
				res.end()
				return;
			}

			// Ingen parameter
      res.status(200)
      res.json({
          sucess: true,
          data: questions
        })
      break;

    default:
      return "dust"
  }
}
