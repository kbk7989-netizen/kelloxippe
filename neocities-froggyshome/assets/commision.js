// 🌸 연꽃 슬롯
const lotusContainer = document.getElementById("lotus-container");
const slotText = document.getElementById("slot-text");

const totalSlots = 5;
const usedSlots = 2; // 나중에 DB로 불러올 값

function renderLotus() {
  lotusContainer.innerHTML = "";
  for (let i = 0; i < totalSlots; i++) {
    const lotus = document.createElement("div");
    lotus.classList.add("lotus");
    if (i < usedSlots) lotus.classList.add("filled");
    lotusContainer.appendChild(lotus);
  }
  slotText.textContent = `남은 슬롯: ${totalSlots - usedSlots} / ${totalSlots}`;
}

renderLotus();

// 🌸 타입 상세
const typeCards = document.querySelectorAll(".type-card");
const detailSection = document.getElementById("type-detail");
const detailTitle = document.getElementById("detail-title");
const detailDesc = document.getElementById("detail-description");
const applyBtn = document.getElementById("apply-type-btn");

const typeData = {
  1: { title: "기본 일러스트", desc: "단일 캐릭터 중심의 간단한 반신 일러스트입니다." },
  2: { title: "SD 캐릭터", desc: "귀엽고 동글한 스타일의 캐릭터 커미션입니다." },
  3: { title: "커플 일러스트", desc: "두 명 이상의 캐릭터를 함께 그려드립니다." },
  4: { title: "반신", desc: "허리까지 표현된 반신 일러스트입니다." },
  5: { title: "전신", desc: "전신 캐릭터 일러스트로 전체 구도가 포함됩니다." },
  6: { title: "배경 포함", desc: "배경이 포함된 완성형 커미션입니다." },
  7: { title: "상업용", desc: "상업적으로 사용할 수 있는 일러스트입니다." },
  8: { title: "기타 의뢰", desc: "위 타입에 해당하지 않는 맞춤 커미션입니다." },
};

typeCards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.type;
    detailTitle.textContent = typeData[id].title;
    detailDesc.textContent = typeData[id].desc;
    detailSection.classList.remove("hidden");
    applyBtn.classList.remove("hidden");
  });
});

// 마스터 로그인 체크
const isMaster = sessionStorage.getItem("isMaster") === "true";
if(isMaster){
  document.getElementById("admin-controls").classList.remove("hidden");
  document.getElementById("add-commission-type-btn").addEventListener("click", ()=>{
    alert("마스터 모드: 커미션 타입 추가/수정 폼 띄우기");
  });
}
