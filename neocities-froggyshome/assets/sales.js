const salesCharacters = [
  { id: 1, name: "초록개구리", desc: "귀여운 개구리 캐릭터", img: "assets/char1.png", link: "https://example.com" },
  { id: 2, name: "푸른용", desc: "작은 드래곤 캐릭터", img: "assets/char2.png", link: "https://example.com" },
  { id: 3, name: "분홍토끼", desc: "핑크 토끼 캐릭터", img: "assets/char3.png", link: "https://example.com" },
];

const salesList = document.getElementById("sales-list");
salesCharacters.forEach(char => {
  const card = document.createElement("div");
  card.classList.add("sales-character-card");
  card.innerHTML = `
    <img src="${char.img}" alt="${char.name}">
    <h3>${char.name}</h3>
    <p>${char.desc}</p>
    <a href="${char.link}" target="_blank" class="trade-link">외부 거래 사이트로 이동 🐸💚</a>
  `;
  salesList.appendChild(card);
});

const isMaster = true;
if(isMaster) {
  document.getElementById("admin-controls").classList.remove("hidden");
  document.getElementById("add-character-btn").addEventListener("click", () => {
    alert("마스터 모드: 캐릭터 등록 폼 띄우기 (DB 연동 필요)");
  });
}
