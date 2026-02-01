const deckContainer = document.getElementById("deck-container");
let selectedCards = [];
let shuffledDeck = tarotDeck.sort(() => Math.random() - 0.5);

function renderDeck() {
    deckContainer.innerHTML = "";

    for (let i = 0; i < 6; i++) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.dataset.index = i;

        cardDiv.addEventListener("click", () => selectCard(cardDiv, i));
        deckContainer.appendChild(cardDiv);
    }
}

function selectCard(cardDiv, index) {
    if (selectedCards.length >= 3) return;
    if (cardDiv.classList.contains("selected")) return;

    cardDiv.classList.add("selected");
    playFlipSound();

    selectedCards.push({
        ...shuffledDeck[index],
        element: cardDiv
    });

    if (selectedCards.length === 3) {
        setTimeout(revealCards, 800);
    }
}

function revealCards() {
    selectedCards.forEach(card => {
        card.element.classList.add("revealed");
        card.element.style.backgroundImage = `url(${card.img})`;
    });

    sendResultToTelegram();
}

renderDeck();
