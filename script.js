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

    loader.style.display = "none";
    mainPage.style.display = "flex";
    document.body.classList.add("giftOpened");

    updateCounter();

    // PLAY MUSIC
    if (bgMusic) {

        bgMusic.volume = 0.5;

        bgMusic.play().catch(function () {
            console.log("Music autoplay blocked");
        });
    }

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