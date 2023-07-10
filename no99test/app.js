const 박스 = document.querySelector("#box01");
const 버튼 = document.querySelector("#button");
const 초기위치 = parseInt(박스.style.left) || 0;
const 이동거리 = parseInt(박스.style.width) || 0;

버튼.addEventListener("click", function () {
  const 현재위치 = parseInt(박스.style.left) || 초기위치;
  const 새로운위치 = 현재위치 + 이동거리;
  박스.style.left = 새로운위치 + "px";

  if (새로운위치 >= 초기위치 + 250) {
    박스.style.left = 초기위치 + "px";
  }
});
