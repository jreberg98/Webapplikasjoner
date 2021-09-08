// Oppgave 1
const oppgave_1_button = document.getElementById("remove-btn");

const removeText = () => {
    const text = document.getElementById("remove");
    text.style.display = "none";
}

oppgave_1_button.addEventListener("click", removeText);

// Oppgave 2
const oppgave_2_button = document.getElementById("change-btn");

const changeText = () => {
    const text = document.getElementById("change");
    text.innerHTML = "Heisannpådeg";
}

oppgave_2_button.addEventListener("click", changeText);

// Oppgave 3
const oppgave_3_input = document.getElementById("input");

const updateText = () => {
    document.getElementById("input-text").innerHTML = oppgave_3_input.value;
}

oppgave_3_input.addEventListener("keypress", updateText)

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
// Oppgave 5
// Oppgave 6
// Oppgave 7
// Oppgave 8
