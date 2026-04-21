const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const successScreen = document.getElementById("successScreen");
const successText = document.getElementById("successText");
const closeSuccess = document.getElementById("closeSuccess");
const buttonArea = document.getElementById("buttonArea");

const noMessages = [
    "Yakin pilih No? 🥺",
    "Coba pikir lagi dong 😭",
    "Jangan gitu yaa 😔",
    "Kayaknya tombol Yes lebih bagus 😆",
    "Aku tunggu jawaban terbaikmu 😌"
];

let noIndex = 0;

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    const icons = ["💖", "💘", "💕", "💞", "💓"];
    heart.innerText = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = 18 + Math.random() * 24 + "px";
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
        sparkle.style.left = x + (Math.random() * 160 - 80) + "px";
        sparkle.style.top = y + (Math.random() * 120 - 60) + "px";
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1600);
    }
}

function moveNoButton() {
    const areaWidth = buttonArea.clientWidth;
    const areaHeight = buttonArea.clientHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = areaWidth - btnWidth;
    const maxY = areaHeight - btnHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto";
}

yesBtn.addEventListener("click", function () {
    const rect = yesBtn.getBoundingClientRect();

    message.textContent = "Kamu pilih Yes! Aku seneng banget 😍";
    successText.textContent =
        "Makasih udah pilih Yes. Semoga ini jadi awal dari banyak cerita indah yang kita buat bareng 💖";
    successScreen.style.display = "flex";

    createSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);

    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 120);
    }

    setTimeout(() => {
        alert("Yeaay! Makasih udah pilih Yes 💞");
    }, 300);
});

noBtn.addEventListener("click", function () {
    message.textContent = noMessages[noIndex % noMessages.length];
    noIndex++;
    moveNoButton();

    setTimeout(() => {
        alert("Kamu pilih No 😢 Tapi aku tetap berharap kamu berubah pikiran hehe");
    }, 200);
});

noBtn.addEventListener("mouseenter", function () {
    moveNoButton();
    message.textContent = noMessages[noIndex % noMessages.length];
    noIndex++;
});

closeSuccess.addEventListener("click", function () {
    successScreen.style.display = "none";
});

setInterval(createHeart, 1200);