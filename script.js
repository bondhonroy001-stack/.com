const loader = document.getElementById("loader");
const mainPage = document.getElementById("mainPage");
const startBtn = document.getElementById("startBtn");
const counter = document.getElementById("counter");
const bgMusic = document.getElementById("bgMusic");


// ===============================
// OPEN GIFT
// ===============================
mainPage.style.display = "none";

startBtn.addEventListener("click", function () {

    const miniIntro = document.getElementById("miniIntro");

    // প্রথম page hide
    loader.style.display = "none";
    mainPage.style.display = "none";

    // Intro show
    miniIntro.style.display = "flex";
    miniIntro.style.opacity = "1";

    // Music
    if (bgMusic) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(function () {
            console.log("Music autoplay blocked");
        });
    }

    // 3 sec intro
    setTimeout(function () {

        miniIntro.style.opacity = "0";

        // fade শেষ হলে main page
        setTimeout(function () {

            miniIntro.style.display = "none";

miniIntro.style.display = "none";

document.body.classList.add("giftOpened");
mainPage.style.display = "flex";

mainPage.scrollTop = 0;
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

updateCounter();

        }, 700);

    }, 3000);

});


// ===============================
// RELATIONSHIP TIMER
// ===============================

const startDate = new Date(
    2025,
    2,
    16,
    20,
    32,
    0
);


function updateCounter() {

    const now = new Date();

    const diff =
        now.getTime() -
        startDate.getTime();


    const days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        ) + 1;


    const hours =
        Math.floor(
            (diff /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (diff /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (diff / 1000) % 60
        );


    counter.innerHTML =
        `❤️ ${days} Days ${hours} Hours<br>
        ${minutes} Minutes ${seconds} Seconds ❤️`;
}


updateCounter();

setInterval(updateCounter, 1000);


// ===============================
// LETTER POPUP
// ===============================

const letterPopup =
    document.getElementById("letterPopup");

const openLetterBtn =
    document.getElementById("openLetterBtn");

const closeLetterBtn =
    document.getElementById("closeLetterBtn");


if (openLetterBtn && letterPopup) {

    openLetterBtn.addEventListener(
        "click",
        function () {

            letterPopup.style.display =
                "flex";

        }
    );

}


if (closeLetterBtn && letterPopup) {

    closeLetterBtn.addEventListener(
        "click",
        function () {

            letterPopup.style.display =
                "none";

        }
    );

}


// ===============================
// LOVE POPUP
// ===============================

const lovePopup =
    document.getElementById("lovePopup");

const openLoveBtn =
    document.getElementById("openLoveBtn");

const closeLoveBtn =
    document.getElementById("closeLoveBtn");


function showLove() {

    if (lovePopup) {

        lovePopup.style.display =
            "flex";

    }

}


if (openLoveBtn) {

    openLoveBtn.addEventListener(
        "click",
        showLove
    );

}


if (closeLoveBtn && lovePopup) {

    closeLoveBtn.addEventListener(
        "click",
        function () {

            lovePopup.style.display =
                "none";

        }
    );

}// ===============================
// LONG DISTANCE COUNTER
// ===============================

const distanceCounter =
    document.getElementById("distanceCounter");

const distanceStart =
    new Date(2026, 6, 19, 0, 0, 0);

function updateDistanceCounter() {

    if (!distanceCounter) return;

    const now = new Date();
    const diff = now - distanceStart;

    if (diff < 0) {
        distanceCounter.innerHTML =
            "Our next chapter begins soon ❤️";
        return;
    }

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (diff / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (diff / (1000 * 60)) % 60
    );

    distanceCounter.innerHTML =
        `🌙 ${days} Days Apart<br>
         ${hours} Hours ${minutes} Minutes ❤️`;
}

updateDistanceCounter();

setInterval(updateDistanceCounter, 60000);
// ===============================
// 🌙 GOOD NIGHT MODE
// ===============================

const nightModeBtn = document.getElementById("nightModeBtn");

if (nightModeBtn) {
    nightModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("nightMode");

        if (document.body.classList.contains("nightMode")) {
            nightModeBtn.textContent = "☀️";
        } else {
            nightModeBtn.textContent = "🌙";
        }

    });
}
// ===============================
// SECRET MESSAGE
// ===============================

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

let secretTimer;

function startSecretHold() {

    secretBtn.textContent = "Keep holding... 💗";

    secretTimer = setTimeout(function () {

        secretMessage.classList.add("showSecret");

        secretBtn.textContent = "Secret Unlocked ❤️";
        heartFireworks();

        if (navigator.vibrate) {
            navigator.vibrate(150);
        }

    }, 3000);
}

function stopSecretHold() {
    clearTimeout(secretTimer);

    if (!secretMessage.classList.contains("showSecret")) {
        secretBtn.textContent = "Hold for 3 seconds 🤫";
    }
}

secretBtn.addEventListener("touchstart", startSecretHold);
secretBtn.addEventListener("touchend", stopSecretHold);

secretBtn.addEventListener("mousedown", startSecretHold);
secretBtn.addEventListener("mouseup", stopSecretHold);
secretBtn.addEventListener("mouseleave", stopSecretHold);
function heartFireworks() {
    const hearts = ["❤️", "💖", "💕", "✨", "💗"];

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("span");

        heart.className = "fireworkHeart";
        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1800);
    }
}// ===============================
// ❤️ HEART TRAIL
// ===============================

const trailSymbols = ["♡", "💗", "✨", "💕"];

let lastTrailTime = 0;

function createTrailHeart(x, y) {

    const now = Date.now();

    // Too many hearts prevent করবে
    if (now - lastTrailTime < 80) return;

    lastTrailTime = now;

    const heart = document.createElement("span");

    heart.className = "trailHeart";

    heart.textContent =
        trailSymbols[
            Math.floor(Math.random() * trailSymbols.length)
        ];

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1000);
}


// MOBILE
document.addEventListener("touchmove", function (e) {

    const touch = e.touches[0];

    if (touch) {
        createTrailHeart(
            touch.clientX,
            touch.clientY
        );
    }

}, { passive: true });


// PC
document.addEventListener("mousemove", function (e) {

    createTrailHeart(
        e.clientX,
        e.clientY
    );

});// ===============================
// 🫶 HOLD MY HAND
// ===============================

const holdHandBtn =
    document.getElementById("holdHandBtn");

const holdHandSection =
    document.querySelector(".holdHandSection");

const handMessage =
    document.getElementById("handMessage");

let handTimer;


function startHoldingHands() {

    holdHandSection.classList.add("holding");

    holdHandBtn.textContent =
        "Don't let go... 🥹❤️";

    handTimer = setTimeout(function () {

        document.getElementById("leftHand").textContent = "❤️";
        document.getElementById("rightHand").textContent = "❤️";

        handMessage.style.display = "block";

        holdHandBtn.textContent =
            "Always Together ❤️";

        if (navigator.vibrate) {
            navigator.vibrate(120);
        }

    }, 2000);
}


function stopHoldingHands() {

    clearTimeout(handTimer);

    if (handMessage.style.display !== "block") {

        holdHandSection.classList.remove("holding");

        holdHandBtn.textContent =
            "Hold My Hand ❤️";
    }
}


// MOBILE

holdHandBtn.addEventListener(
    "touchstart",
    function(e) {
        e.preventDefault();
        startHoldingHands();
    }
);

holdHandBtn.addEventListener(
    "touchend",
    stopHoldingHands
);

holdHandBtn.addEventListener(
    "touchcancel",
    stopHoldingHands
);


// PC

holdHandBtn.addEventListener(
    "mousedown",
    startHoldingHands
);

holdHandBtn.addEventListener(
    "mouseup",
    stopHoldingHands
);

holdHandBtn.addEventListener(
    "mouseleave",
    stopHoldingHands
);
// ===============================
// 🧩 OUR LITTLE QUIZ
// ===============================

const quizQuestions =
    document.querySelectorAll(".quizQuestion");

const quizResult =
    document.getElementById("quizResult");

let answeredQuestions = 0;
let correctAnswers = 0;

quizQuestions.forEach(function(question) {

    const options =
        question.querySelectorAll(".quizOption");

    options.forEach(function(option) {

        option.addEventListener("click", function() {

            // Already answered
            if (question.dataset.answered === "true") {
                return;
            }

            question.dataset.answered = "true";
            answeredQuestions++;

            if (option.dataset.correct === "true") {

                option.classList.add("correct");
                option.textContent += " ✓";

                correctAnswers++;

            } else {

                option.classList.add("wrong");
                option.textContent += " ✕";

                const correct =
                    question.querySelector(
                        '[data-correct="true"]'
                    );

                correct.classList.add("correct");
            }

            // All questions answered
            if (answeredQuestions === quizQuestions.length) {

                quizResult.style.display = "block";

                if (correctAnswers === 3) {
                    quizResult.innerHTML =
                        "3/3 ❤️ You really know our story! 🥹";
                }

                else if (correctAnswers === 2) {
                    quizResult.innerHTML =
                        "2/3 💗 Almost perfect!";
                }

                else {
                    quizResult.innerHTML =
                        correctAnswers +
                        "/3 💕 You owe me a rematch 😌";
                }
            }
        });
    });
});
// ===============================
// 🫙 MEMORY JAR
// ===============================

const memoryJar =
    document.getElementById("memoryJar");

const jarMessage =
    document.getElementById("jarMessage");


const jarMemories = [

    "🌹 Our first meet — 25 May 2025.",

    "💗 Every little moment with you became a memory.",

    "🌙 Even distance can't erase what we've shared.",

    "💕 16 March 2025 • 8:32 PM — where our story began.",

    "🥹 Some days become special simply because you were there.",

    "✨ If I could keep our memories somewhere forever, I'd keep them all here.",

    "❤️ No matter how many memories we make, I'll always want one more with you."

];


memoryJar.addEventListener("click", function () {

    memoryJar.classList.remove("jarShake");

    void memoryJar.offsetWidth;

    memoryJar.classList.add("jarShake");


    const randomMemory =
        jarMemories[
            Math.floor(
                Math.random() * jarMemories.length
            )
        ];


    setTimeout(function () {

        jarMessage.style.opacity = "0";

        setTimeout(function () {

            jarMessage.textContent = randomMemory;
            jarMessage.style.opacity = "1";

        }, 180);

    }, 250);

});