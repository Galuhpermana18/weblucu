const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const successScreen = document.getElementById("successScreen");
const successText = document.getElementById("successText");
const closeSuccess = document.getElementById("closeSuccess");
const messageBubble = document.getElementById("messageBubble");
const buttonArea = document.querySelector(".choice-box");

const noMessages = [
    "Yakin pilih No, Nike Nova Yani? 🥺",
    "Coba pikir lagi dong 😭",
    "Jangan gitu yaa 😔",
    "Kayaknya tombol Yes lebih cocok 😆",
    "Aku masih nunggu jawaban terbaikmu 😌"
];

let noIndex = 0;

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    const icons = ["💖", "💘", "💕", "💞", "💓"];
    heart.innerText = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = 18 + Math.random() * 22 + "px";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

function createSparkles(x, y) {
    for (let i = 0; i < 18; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = x + (Math.random() * 120 - 60) + "px";
        sparkle.style.top = y + (Math.random() * 80 - 40) + "px";
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1400);
    }
}

function moveNoButton() {
    const areaWidth = buttonArea.clientWidth;
    const areaHeight = buttonArea.clientHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = areaWidth - btnWidth;
    const maxY = areaHeight - btnHeight;

    const randomX = Math.floor(Math.random() * Math.max(maxX, 1));
    const randomY = Math.floor(Math.random() * Math.max(maxY, 1));

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto";
}

yesBtn.addEventListener("click", function () {
    const rect = yesBtn.getBoundingClientRect();

    messageBubble.innerHTML = `
    Kamu pilih Yes! Aku seneng banget 😍
    <span class="time">19.14</span>
  `;

    successText.textContent =
        "Makasih ya, Nike Nova Yani. Semoga ini jadi awal dari banyak cerita indah, tawa, dan kebahagiaan yang bisa kita jalanin bareng 💖";

    successScreen.style.display = "flex";

    createSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);

    for (let i = 0; i < 24; i++) {
        setTimeout(createHeart, i * 100);
    }
});

noBtn.addEventListener("mouseenter", function () {
    moveNoButton();
    messageBubble.innerHTML = `
    ${noMessages[noIndex % noMessages.length]}
    <span class="time">19.14</span>
  `;
    noIndex++;
});

noBtn.addEventListener("click", function () {
    moveNoButton();
    messageBubble.innerHTML = `
    ${noMessages[noIndex % noMessages.length]}
    <span class="time">19.14</span>
  `;
    noIndex++;
});

closeSuccess.addEventListener("click", function () {
    successScreen.style.display = "none";
});

setInterval(createHeart, 1800);