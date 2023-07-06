console.log(document.querySelector("#abc"));



const text = document.querySelector("#abc");
text.style.color = "blue"


text.addEventListener("click", playpop);

function playpop() {
    text.innerText = "asshole"
}

