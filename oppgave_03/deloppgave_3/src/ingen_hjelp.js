import "./styles.css";

// TODO: Sett startverdien for de ulike tellerene du trenger for å ha kontroll på
// - antall feil
let errors = 0;
// - posisjonen til bokstaven du skal skrive
let position = 0;
// - ordet som skal vises
let index = 0;
// TODO: Lag en liste med ulike ord
const words = ["Hei", "på", "deg", "din", "ape"];
// TODO: Hent ut HTML #ider og knappen
const word = document.getElementById("word");
const letter = document.getElementById("letter");
const wrongs = document.getElementById("wrongs");
const button = document.querySelector("button");
// TODO: Lag en funksjon for å skrive ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
const printWord = () => {
  if (words[index]) {
    word.innerHTML = words[index];
  } else {
    word.innerHTML = "Det er tomt for ord";
  }
};
// TODO: Lag en funksjon som gjør at vi kan bytte ord. Må også oppdatere tellerene
const changeWord = () => {
  position = 0;
  index++;
  printWord();
};
// TODO: Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkLetter = (word, position, letter) => {
  return word[position] === letter;
};

// TODO: Lag en funksjon for å sjekke om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const wordIsCorrect = (word, index) => {
  return index === word.length;
};

// TODO: Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
const keysPressed = ({ key }) => {
  const word = words[index];

  if (checkLetter(word, position, key)) {
    position++;

    if (wordIsCorrect(word, position)) {
      changeWord();
    } else {
      errors++;
    }
  }

  updateUI(key);
};
// TODO: Lag en funksjon som kan brukes til å oppdatere grensesnittet
const updateUI = (key) => {
  wrongs.innerHTML = errors;
  printWord();
  letter.innerHTML = key;
};
// - Vise antall feil
// - Vise ordet vi skal skrive
// - Vise hvor langt vi har kommet (posisjonen) på det ordet vi skal skrive
// TODO: Lytt til keyup på window
window.addEventListener("keyup", keysPressed);
// TODO: Lytt til klikk på knappen. Klikket skal gjøre knappen "disabled" samt starte oppgaven
const start = () => {
  updateUI();
  button.disabled = "true";
};

button.addEventListener("click", start);
