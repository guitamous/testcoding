function 박스생성(박스수) {
  for (let i = 0; i < 박스수; i++) {
    const 박스 = document.createElement("div");
    박스.innerText = "타이머";
    박스.classList = "box";
    박스.addEventListener("click", 카운트다운);
    document.body.appendChild(박스);

    const 인풋 = document.createElement("input");
    인풋.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        const 클릭된것 = this.previousSibling; // 이벤트가 발생한 인풋 요소의 이전 형제 요소(박스 요소)를 가져옵니다.
        카운트다운.call(클릭된것, event); // 클릭된것을 카운트다운 함수의 실행 문맥으로 설정하여 호출합니다.
      }
    });
    document.body.appendChild(인풋);
  }
}

function 카운트다운(event) {
  const 클릭된것 = this;
  const 인풋 = 클릭된것.nextSibling; // 클릭된 요소의 다음 형제 요소(인풋 요소)를 가져옵니다.
  const 입력값 = 인풋.value;
  
  let 카운트시간;
  let 카운트숫자;

  if (입력값.includes(":")) {
    const [분, 초] = 입력값.split(":").map(Number); // 입력값을 ":"를 기준으로 분과 초로 분리하고 숫자로 변환합니다.

    if (isNaN(분) || isNaN(초) || 초 >= 60) {
      alert("임마 입력을 똑바로 해야지~~");
      return;
    }

    카운트시간 = 분 * 60 + 초; // 분과 초를 초로 변환하여 카운트시간으로 설정합니다.
    카운트숫자 = 카운트시간;
  } else {
    const 입력초 = parseInt(입력값); // 입력값을 정수형으로 변환합니다.

    if (isNaN(입력초)) {
      alert("임마 입력을 똑바로 해야지~~");
      return;
    }

    카운트시간 = 입력초;
    카운트숫자 = 카운트시간;
  }
  
  클릭된것.removeEventListener("click", 카운트다운); // 클릭 이벤트 핸들러를 제거합니다.
  클릭된것.addEventListener("click", 중간초기화); // 클릭 이벤트 핸들러를 다시 등록합니다.
  클릭된것.innerText = formatTime(카운트숫자); // 시간 형식으로 변환된 카운트숫자를 표기합니다.
  클릭된것.style.backgroundColor = "green";
  인풋.disabled = true; // 인풋 요소를 비활성화하여 회색으로 변화시킵니다.
  
  const 타이머 = setInterval(() => {
    if (카운트숫자 === 1) {
      클릭된것.innerText = "끝!";
      클릭된것.style.backgroundColor = "gray";
      clearInterval(타이머);
      클릭된것.removeEventListener("click", 중간초기화); // 클릭 이벤트 핸들러를 제거합니다.
      클릭된것.addEventListener("click", 카운트다운); // 클릭 이벤트 핸들러를 다시 등록합니다.
      인풋.disabled = false; // 인풋 요소를 다시 활성화합니다.
    } else {
      클릭된것.style.color = "white";
      카운트숫자 = 카운트숫자 - 1;
      클릭된것.innerText = formatTime(카운트숫자); // 시간 형식으로 변환된 카운트숫자를 표기합니다.
    }
  }, 1000);

  function 중간초기화() {
    카운트숫자 = 카운트시간;
    클릭된것.innerText = formatTime(카운트숫자); // 시간 형식으로 변환된 카운트숫자를 표기합니다.
  }
}

function formatTime(초) {
  const 분 = Math.floor(초 / 60);
  const 남은초 = 초 % 60;
  return `${분}:${String(남은초).padStart(2, "0")}`;
}

박스생성(3);
