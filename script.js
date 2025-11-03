const games = [
  { id: 1, name: "GTA V", price: 29.99, img: "https://i.imgur.com/WYz8GvM.jpeg" },
  { id: 2, name: "Call of Duty: MW3", price: 49.99, img: "https://i.imgur.com/3As4OBF.jpeg" },
  { id: 3, name: "Minecraft", price: 19.99, img: "https://i.imgur.com/Xp6xFZr.jpeg" },
  { id: 4, name: "FIFA 25", price: 59.99, img: "https://i.imgur.com/Zf0XbCu.jpeg" }
];

let cartCount = 0;

const gameList = document.getElementById("game-list");
const cartCountEl = document.getElementById("cart-count");

function renderGames() {
  games.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <img src="${game.img}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>$${game.price}</p>
      <button onclick="addToCart(${game.id})">Add to Cart</button>
    `;
    gameList.appendChild(card);
  });
}

function addToCart(id) {
  cartCount++;
  cartCountEl.textContent = cartCount;
  alert("Game added to cart!");
}

renderGames();
