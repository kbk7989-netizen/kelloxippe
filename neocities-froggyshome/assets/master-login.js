const masterPassInput = document.getElementById("masterPass");
const form = document.getElementById("masterLoginForm");
const loginMsg = document.getElementById("loginMsg");

// 예시 마스터 번호
const MASTER_PASSWORD = "frog123";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = masterPassInput.value;
  if(val === MASTER_PASSWORD){
    // 세션 저장
    sessionStorage.setItem("isMaster", "true");
    loginMsg.style.color = "green";
    loginMsg.textContent = "로그인 성공! 커미션 페이지로 이동합니다...";
    setTimeout(()=>{ window.location.href = "commission.html"; }, 1000);
  } else {
    loginMsg.style.color = "red";
    loginMsg.textContent = "번호가 틀렸습니다.";
  }
});
