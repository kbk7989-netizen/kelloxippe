const characterContainer = [
  { id: 1, name: "초록개구리", desc: "귀여운 개구리 캐릭터", img: "assets/char1.png" },
  { id: 2, name: "푸른용", desc: "작은 드래곤 캐릭터", img: "assets/char2.png" },
  { id: 3, name: "붉은돼지", desc: "작고 뚱뚱한 캐릭터", img: "assets/char3.png" },
];

const customRoom= [
  { name: "자관1", link: "https://example.com/char1" },
  { name: "자관2", link: "https://example.com/char2" },
  { name: "자관3", link: "https://example.com/char3" },
  { name: "자관4", link: "https://example.com/char4" },
];


const isMaster = true;

const characterContainer = document.querySelector("#character-cards");
characterCards.forEach(char => {
  const card = document.createElement("div");
  card.classList.add("my-character-card");
  card.innerHTML = `<a href="${char.link}" target="_blank">${char.name}</a>`;
  characterContainer.appendChild(card);
});

/* 자관 전용 방 렌더링 */
const customContainer = document.querySelector("#custom-room .card-grid");
customRoom.forEach(char => {
  const card = document.createElement("div");
  card.classList.add("my-character-card");
  card.innerHTML = `<a href="${char.link}" target="_blank">${char.name}</a>`;
  customContainer.appendChild(card);
});
// 마스터 모드
if(isMaster){
  document.getElementById("admin-controls").classList.remove("hidden");
  document.getElementById("add-character-btn").addEventListener("click", () => {
    alert("마스터 모드: 자캐 등록 / 글 올리듯 추가 기능 구현 필요");
  });
}

