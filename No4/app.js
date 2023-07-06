const 찬란박스 = document.querySelector(".box");

/*


setInterval(()=>{
 if(찬란박스.style.backgroundColor === "blue"){
    찬란박스.style.backgroundColor = "red"
 } else if(찬란박스.style.backgroundColor === "red"){
    찬란박스.style.backgroundColor = "green"
 } else {
    찬란박스.style.backgroundColor = "blue"
 }
}, 1000);



*/

setInterval(() => {
    switch (찬란박스.style.backgroundColor) {
      case "blue":
        찬란박스.style.backgroundColor = "red";
        break;
      case "red":
        찬란박스.style.backgroundColor = "green";
        break;
      case "green":
        찬란박스.style.backgroundColor = "yellow";
        break;
      case "yellow":
        찬란박스.style.backgroundColor = "purple";
        break;
      case "purple":
        찬란박스.style.backgroundColor = "orange";
        break;
      case "orange":
        찬란박스.style.backgroundColor = "cyan";
        break;
      case "cyan":
        찬란박스.style.backgroundColor = "magenta";
        break;
      case "magenta":
        찬란박스.style.backgroundColor = "lime";
        break;
      case "lime":
        찬란박스.style.backgroundColor = "pink";
        break;
      default:
        찬란박스.style.backgroundColor = "blue";
        break;
    }
  }, 100);
  