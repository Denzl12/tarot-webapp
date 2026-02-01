const tg = window.Telegram.WebApp;
tg.expand();

function sendResultToTelegram() {
    const result = selectedCards.map(card => ({
        name: card.name,
        image: card.img
    }));

    tg.sendData(JSON.stringify(result));
    setTimeout(() => tg.close(), 1200);
}
