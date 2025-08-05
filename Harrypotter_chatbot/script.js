function sendQuestion() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const reply = getBotReply(input);
    document.getElementById("botReply").innerText = reply;
}

function getBotReply(question) {
    const responses = {
        "who is harry potter": "Harry Potter is the Boy Who Lived, the main character in the wizarding world.",
        "who is hermione granger": "Hermione is one of Harry's best friends and the brightest witch of her age.",
        "who is ron weasley": "Ron is Harry's loyal best friend from the Weasley family.",
        "who is dumbledore": "Professor Dumbledore is the headmaster of Hogwarts.",
        "who is voldemort": "Voldemort is the dark wizard who tried to kill Harry and take over the wizarding world.",
        "who is deepak":"deepak is a good boy."
    };

    if (responses[question]) {
        return responses[question];
    } else {
        return "❌ Only Harry Potter questions are allowed!";
    }
}
