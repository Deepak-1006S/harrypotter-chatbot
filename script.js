const chatWindow = document.getElementById("chatWindow");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// -----------------------------
// 50+ HARRY POTTER DATABASE
// -----------------------------
const hpQA = [
  { q: "who is harry potter", a: "Harry Potter is the Boy Who Lived, famous for surviving Voldemort's attack as a baby." },
  { q: "who is voldemort", a: "Lord Voldemort is the most powerful dark wizard, originally Tom Riddle." },
  { q: "who is hermione granger", a: "Hermione Granger is one of Harry's best friends, known for her intelligence and loyalty." },
  { q: "who is ron weasley", a: "Ron Weasley is Harry's best friend from the Weasley family." },
  { q: "what is hogwarts", a: "Hogwarts is a school of witchcraft and wizardry located in Scotland." },
  { q: "who is dumbledore", a: "Albus Dumbledore is one of the greatest wizards and headmaster of Hogwarts." },
  { q: "what is expelliarmus", a: "Expelliarmus is a disarming spell used to knock an opponent's wand away." },
  { q: "what is avada kedavra", a: "Avada Kedavra is the killing curse, one of the unforgivable curses." },
  { q: "what is crucio", a: "Crucio is the Cruciatus Curse used to torture victims." },
  { q: "what is imperio", a: "Imperio is a curse that allows control over another person." },
  { q: "who is snape", a: "Severus Snape is a complex Hogwarts professor with a hidden heroic past." },
  { q: "who is draco malfoy", a: "Draco Malfoy is a Slytherin student and rival of Harry Potter." },
  { q: "what is slytherin", a: "Slytherin is one of Hogwarts houses, known for ambition and cunning." },
  { q: "what is gryffindor", a: "Gryffindor values bravery, courage, and determination." },
  { q: "what is hufflepuff", a: "Hufflepuff values loyalty, patience, and hard work." },
  { q: "what is ravenclaw", a: "Ravenclaw values intelligence, wisdom, and creativity." },
  { q: "who founded hogwarts", a: "Hogwarts was founded by four wizards: Godric Gryffindor, Salazar Slytherin, Helga Hufflepuff, and Rowena Ravenclaw." },
  { q: "what is platform 9 3/4", a: "Platform 9¾ is the hidden platform at King's Cross for the Hogwarts Express." },
  { q: "what is the golden snitch", a: "The Golden Snitch is a small flying ball in Quidditch worth 150 points." },
  { q: "what is quidditch", a: "Quidditch is a magical sport played on flying broomsticks." },
  { q: "who is hagrid", a: "Rubeus Hagrid is Hogwarts gamekeeper and Care of Magical Creatures professor." },
  { q: "who is sirius black", a: "Sirius Black is Harry's godfather and a member of the Order of the Phoenix." },
  { q: "what is patronus", a: "A Patronus is a protective spell that takes animal form." },
  { q: "what is dementor", a: "Dementors are dark creatures that drain happiness and soul energy." },
  { q: "who is bellatrix", a: "Bellatrix Lestrange is a loyal Death Eater of Voldemort." },
  { q: "what is horcrux", a: "A Horcrux is an object containing part of a dark wizard's soul." },
  { q: "how many horcruxes", a: "Voldemort created 7 Horcruxes (8 soul pieces including Harry unintentionally)." },
  { q: "what is elder wand", a: "The Elder Wand is the most powerful wand in wizarding history." },
  { q: "who owns elder wand", a: "The wand's ownership changes by defeating its previous master." },
  { q: "what is azkaban", a: "Azkaban is a wizard prison guarded by Dementors." },
  { q: "what is polyjuice potion", a: "A potion that allows you to take the form of someone else." },
  { q: "what is floo network", a: "A magical fireplace travel system using Floo powder." },
  { q: "what is apparate", a: "Apparition is magical teleportation used by witches and wizards." },
  { q: "what is owls in harry potter", a: "Owls are used as mail carriers in the wizarding world." },
  { q: "what is nifflers", a: "Nifflers are creatures attracted to shiny objects." },
  { q: "what is forbidden forest", a: "A dangerous forest near Hogwarts filled with magical creatures." },
  { q: "what is deathly hallows", a: "Three powerful magical objects: Elder Wand, Resurrection Stone, Invisibility Cloak." },
  { q: "who is luna lovegood", a: "Luna is a Ravenclaw student known for her quirky personality." },
  { q: "who is neville longbottom", a: "Neville is a brave Gryffindor who defeats Nagini." },
  { q: "what is basilisk", a: "A giant deadly serpent in the Chamber of Secrets." },
  { q: "what is chamber of secrets", a: "A hidden chamber in Hogwarts created by Salazar Slytherin." },
  { q: "what is marauder's map", a: "A magical map showing everyone inside Hogwarts." },
  { q: "who are marauders", a: "James Potter, Sirius Black, Remus Lupin, and Peter Pettigrew." },
  { q: "what is expecto patronum", a: "A spell used to summon a Patronus for protection." },
  { q: "what is leviosa", a: "Wingardium Leviosa makes objects levitate." },
  { q: "what is alohomora", a: "A spell used to unlock doors." },
  { q: "what is lumos", a: "A spell that produces light from a wand." },
  { q: "what is nox", a: "Turns off the light created by Lumos." },
  { q: "who kills voldemort", a: "Harry Potter defeats Voldemort in the Battle of Hogwarts." },
  { q: "final battle hogwarts", a: "The Battle of Hogwarts is the final fight between Voldemort and Harry's allies." }
];

// -----------------------------
// MESSAGE FUNCTIONS
// -----------------------------
function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.classList.add("msg", type);

    msg.innerHTML = `
        <div class="avatar">${type === "bot" ? "🧙‍♂️" : "🧑"}</div>
        <div class="bubble">${text}</div>
    `;

    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// -----------------------------
// BOT RESPONSE ENGINE
// -----------------------------
function getBotResponse(input) {
    input = input.toLowerCase().trim();

    for (let item of hpQA) {
        if (input.includes(item.q)) {
            return item.a;
        }
    }

    return "Sorry, I don't have knowledge about that spell or wizard yet. Try asking about Hogwarts, spells, or characters.";
}

// -----------------------------
// SEND MESSAGE
// -----------------------------
function sendMessage() {
    const text = userInput.value;
    if (!text) return;

    addMessage(text, "user");
    userInput.value = "";

    // typing delay (AI feel)
    setTimeout(() => {
        const reply = getBotResponse(text);
        addMessage(reply, "bot");
    }, 600);
}

// -----------------------------
// EVENTS
// -----------------------------
sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});
