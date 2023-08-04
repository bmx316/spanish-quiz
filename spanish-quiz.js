const phrases = {
    "How are you": "Como estas",
    "I'm fine, thank you": "Estoy bien, gracias",
    "Where is the bathroom": "Donde esta el bano",
    "I would like": "Me gustaria",
    "I'm hungry": "Tengo hambre",
    "I'm thirsty": "Tengo sed",
    "I'm tired": "Estoy cansado",
    "What time is it": "Que hora es",
    "Can you help me": "Puedes ayudarme",
    "I'm lost": "Estoy perdido",
    "What's your name": "Como te llamas",
    "My name is": "Me llamo",
    "Nice to meet you": "Mucho gusto",
    "Excuse me": "Perdon",
    "I don't understand": "No entiendo",
    "Please repeat": "Por favor repite",
    "Do you speak English": "Hablas ingles",
    "I don't speak Spanish very well": "No hablo espanol muy bien",
    "How much does it cost": "Cuanto cuesta",
    "Can I have the bill, please": "Puedo tener la cuenta, por favor",
    "Where can I find": "Donde puedo encontrar",
    "How do I get to": "Como llego a",
    "I need a doctor": "Necesito un doctor",
    "I'm sorry": "Lo siento",
    "Goodbye": "Adios",
    "Good morning": "Buenos dias",
    "Good afternoon": "Buenas tardes",
    "Good evening": "Buenas noches",
    "Yes": "Si",
    "No": "No",
    "Please": "Por favor",
    "Thank you": "Gracias",
    "You're welcome": "De nada",
    "I love you": "Te quiero",
    "Help": "Ayuda",
    "Stop": "Para",
    "I feel sick": "Me siento enfermo",
    "Call the police": "Llama a la policia",
    "Is it far": "Esta lejos",
    "Is it close": "Esta cerca",
    "Left": "Izquierda",
    "Right": "Derecha",
    "Straight ahead": "Todo recto",
    "I'm here for vacation": "Estoy aqui de vacaciones",
    "Can I have a menu, please": "Puedo tener un menu, por favor",
    "I don't eat meat": "No como carne",
    "Water, please": "Agua, por favor",
    "A table for two, please": "Una mesa para dos, por favor",
    "Is this seat taken": "Esta ocupado este asiento",
    "I'm allergic to": "Soy alergico a",
    "Do you have": "Tienes"
};


let currentPhrase = "";
let score = 0;

function newQuestion() {
    const keys = Object.keys(phrases);
    currentPhrase = keys[Math.floor(Math.random() * keys.length)];
    document.getElementById('question').innerText = currentPhrase;
    let dataList = document.getElementById('answers');
    dataList.innerHTML = '';
    Object.values(phrases).forEach(function(item) {
        let option = document.createElement('option');
        option.value = item;
        dataList.appendChild(option);
    });
}

document.getElementById('submit').addEventListener('click', function() {
    const answer = document.getElementById('answer').value;
    let result = document.getElementById('result');

    result.style.opacity = 1; // Reset the opacity

    if (answer.trim().toLowerCase() === phrases[currentPhrase].toLowerCase()) {
        result.innerText = "Correct!";
        result.className = 'mt-4 p-2 bg-green-200 text-green-700 alert-correct';
        score++;
    } else {
        result.innerText = `Wrong. The correct answer was ${phrases[currentPhrase]}`;
        result.className = 'mt-4 p-2 bg-red-200 text-red-700 alert-wrong';
    }
    document.getElementById('answer').value = '';

    setTimeout(function() {
        result.style.opacity = 0; // Fade out the result
    }, 2000);

    document.getElementById('score').innerText = `Score: ${score}`; // Update the score
    newQuestion();
});

newQuestion();
