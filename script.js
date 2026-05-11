async function loadGames() {
    const res = await fetch('games.json');
    const games = await res.json();

    const list = document.getElementById("gameList");
    const frame = document.getElementById("gameFrame");

    games.forEach(game => {
        const btn = document.createElement("button");
        btn.textContent = game.name;
        btn.className = "game-btn";

        btn.onclick = () => {
            frame.src = game.url;
        };

        list.appendChild(btn);
    });
}

loadGames();
