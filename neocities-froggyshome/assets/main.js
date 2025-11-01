document.addEventListener("DOMContentLoaded", () => {
  const totalBubbles = 25;
  const body = document.body;

  for (let i = 0; i < totalBubbles; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 30 + 10; // 10~40px 크기
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.bottom = `${Math.random() * 20}px`;

    const delay = Math.random() * 10;
    const duration = 8 + Math.random() * 8;
    bubble.style.animationDelay = `${delay}s`;
    bubble.style.animationDuration = `${duration}s`;

    body.appendChild(bubble);
  }

  console.log("💧 Dynamic bubbles loaded!");
});

//커미션 페이지// 

const typeButtons = document.querySelectorAll(".type-btn");
const detailSection = document.getElementById("type-detail");
const detailTitle = document.getElementById("detail-title");
const detailDescription = document.getElementById("detail-description");
const applyBtn = document.getElementById("apply-type-btn");

const typeData = {
  1: { title: "기본 일러스트", desc: "단일 캐릭터 중심의 간단한 반신 일러스트입니다." },
  2: { title: "SD 캐릭터", desc: "귀여운 데포르메 스타일의 캐릭터 커미션입니다." },
  3: { title: "커플 일러스트", desc: "두 명 이상의 캐릭터를 함께 그려드립니다." },
  4: { title: "반신", desc: "허리까지 표현되는 반신 일러스트입니다." },
  5: { title: "전신", desc: "전신 캐릭터 일러스트로, 전체 구도가 들어갑니다." },
  6: { title: "배경 포함", desc: "배경이 포함된 완성형 커미션입니다." },
  7: { title: "상업용", desc: "상업적으로 사용할 수 있는 일러스트 커미션입니다." },
  8: { title: "기타 의뢰", desc: "위 타입에 해당하지 않는 맞춤 커미션입니다." },
};

typeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const typeId = btn.getAttribute("data-type");
    const data = typeData[typeId];

    detailTitle.textContent = data.title;
    detailDescription.textContent = data.desc;
    applyBtn.classList.remove("hidden");
    detailSection.classList.remove("hidden");
  });
});

// URL 파라미터에서 type 가져오기
const urlParams = new URLSearchParams(window.location.search);
const typeInput = document.getElementById("type");
typeInput.value = urlParams.get("type") || "알 수 없음";

// 폼 제출 예시 (나중에 DB 연동 가능)
const form = document.getElementById("commissionForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("커미션 신청이 완료되었습니다! 🐸💌");
  form.reset();
});


