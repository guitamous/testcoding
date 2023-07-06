const 박스 = document.querySelector(".box");
박스.addEventListener("click", 클릭펑션);

function 클릭펑션() {
  // 카운트다운 시작 시간
  let 시작시간 = 10;

  // 카운트다운 텍스트를 표시할 요소
  const 텍스트 = document.createElement("div");
  텍스트.textContent = 시작시간;
  박스.appendChild(텍스트);

  // 1초마다 카운트다운
  const 타이머 = setInterval(() => {
    시작시간--;
    텍스트.textContent = 시작시간;

    // 카운트다운 종료 시
    if (시작시간 === 0) {
      clearInterval(타이머);
      텍스트.textContent = "카운트다운 종료";
    }
  }, 1000);
}





setInterval(() => {
    시작시간--;
    텍스트.textContent = 시작시간;
}, 1000);