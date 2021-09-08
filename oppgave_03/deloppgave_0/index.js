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

const oppgave_4_button = document.getElementById("write-list");

const printList = () => {

    const ul = document.getElementById("ul");
    
    // Tømmer lista i tilfellet flere trykk
    ul.innerHTML = "";
    myList.forEach(element => {
        ul.innerHTML += `<li>${element}</li>`;
    });
}

oppgave_4_button.addEventListener("click", printList);

// Oppgave 5
const selectElementType = document.getElementById("select");
const enterTextForElement = document.getElementById("text");
const parentForCreate = document.getElementById("placeholder");
const oppgave_5_button= document.getElementById("create");

const createElement = () => {
    const text = enterTextForElement.value;
    
    // Må ha tekst
    if(text.value === "") {
        alert("dust");
    }

    let node = document.createElement(selectElementType.value);
    node.innerHTML = text;
    
    return node;
}

const addElement = () => {
    parentForCreate.appendChild(createElement());
}

oppgave_5_button.addEventListener("click", addElement);

// Oppgave 6
const oppgave_6_button = document.getElementById("remove-li");
const list = document.getElementById("list");

const removeLastElement = () => {
    // Må gjøre det to ganger, veit ikke hvorfor ?!?
    // Kan være for å ta bort både start og slutt tag?
    list.removeChild(list.lastChild);
    list.removeChild(list.lastChild);
}

oppgave_6_button.addEventListener("click", removeLastElement);

// Oppgave 7
const nameInput = document.getElementById("name");
const oppgave_7_button = document.getElementById("order")

const changeButton = () => {

    // Mer enn 4 vil si når det har passert 5
    if (nameInput.value.length === 5){
        console.log("dust");
        oppgave_7_button.disabled = true;
    // 4 skal være lov, blir det mer igjen disables den
    } else if (nameInput.value.length === 4) {
        oppgave_7_button.disabled = false;
    }

}

nameInput.addEventListener("keyup", changeButton);

// Oppgave 8
