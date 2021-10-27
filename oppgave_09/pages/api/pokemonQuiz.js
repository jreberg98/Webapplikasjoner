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
    question: "Hvor er showdown?",
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
      res.status(201)
      res.json({
        
      })

    case "GET":
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
