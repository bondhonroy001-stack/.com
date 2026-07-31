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

});// ===== ❤️ TAP HEART EFFECT =====

document.addEventListener("click", function (e) {

    // Button click করলে heart effect না
    if (e.target.closest("button")) return;

    const heart = document.createElement("span");

    const hearts = ["❤️", "💕", "💗", "💖", "💓"];
    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.className = "tapHeart";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1000);

});// ===== 🖼️ PHOTO FLIP CARDS =====

document.querySelectorAll(".flipCard").forEach(function(card) {

    card.addEventListener("click", function() {

        card.classList.toggle("flipped");

    });

});// ===== 🎵 MUSIC ON / OFF BUTTON =====

const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");

if (musicToggle && bgMusic) {

    function updateMusicButton() {

        if (bgMusic.paused) {
            musicIcon.textContent = "🔇";
        } else {
            musicIcon.textContent = "🎵";
        }

    }


    musicToggle.addEventListener("click", function (event) {

        event.stopPropagation();

        if (bgMusic.paused) {

            bgMusic.play()
                .then(function () {
                    updateMusicButton();
                })
                .catch(function () {
                    musicIcon.textContent = "🔇";
                });

        } else {

            bgMusic.pause();
            updateMusicButton();

        }

    });


    bgMusic.addEventListener("play", updateMusicButton);
    bgMusic.addEventListener("pause", updateMusicButton);

    updateMusicButton();
}// ===== 🌙 DAY / NIGHT MODE + ANIMATION =====

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function(event) {

        event.stopPropagation();

        const goingNight =
            !document.body.classList.contains("nightMode");


        // Create transition wave
        const wave = document.createElement("div");

        wave.className =
            "themeTransition " +
            (goingNight ? "toNight" : "toDay");


        // Start animation from button position
        const buttonRect =
            themeToggle.getBoundingClientRect();

        wave.style.left =
            (buttonRect.left + buttonRect.width / 2) + "px";

        wave.style.top =
            (buttonRect.top + buttonRect.height / 2) + "px";


        document.body.appendChild(wave);


        // Spin button
        themeToggle.classList.add("themeSpin");


        // Change theme during wave
        setTimeout(function() {

            document.body.classList.toggle("nightMode");

            themeToggle.textContent =
                goingNight ? "☀️" : "🌙";

        }, 300);


        // Clean animation
        setTimeout(function() {

            wave.remove();

            themeToggle.classList.remove("themeSpin");

        }, 800);

    });

}// ===== ❤️ SCROLL PROGRESS HEART =====

const heartProgressIcon =
    document.getElementById("heartProgressIcon");

const heartProgressFill =
    document.getElementById("heartProgressFill");


function updateHeartProgress() {

    if (!heartProgressIcon || !heartProgressFill) return;


    const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;


    const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    let progress = 0;

    if (scrollHeight > 0) {
        progress =
            (scrollTop / scrollHeight) * 100;
    }


    progress =
        Math.min(100, Math.max(0, progress));


    heartProgressIcon.style.top =
        progress + "%";

    heartProgressFill.style.height =
        progress + "%";


    if (progress >= 97) {

        heartProgressIcon.classList.add("finished");

    } else {

        heartProgressIcon.classList.remove("finished");

    }

}


window.addEventListener(
    "scroll",
    updateHeartProgress,
    { passive: true }
);


window.addEventListener(
    "resize",
    updateHeartProgress
);


updateHeartProgress();// =====================================
// ✨ SMOOTH SECTION REVEAL
// =====================================

const revealSections = document.querySelectorAll(
    ".letter, .final, .loveQuiz, .memoryJarSection, " +
    ".flipMemorySection, .holdHandSection, .secretSection"
);

revealSections.forEach(function(section) {
    section.classList.add("revealSection");
});


const revealObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealVisible");

                // Reveal only once
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
    }
);


revealSections.forEach(function(section) {
    revealObserver.observe(section);
});// =====================================
// 📸 PREMIUM PHOTO LIGHTBOX
// ONLY MEET PHOTOS
// =====================================

const photoLightbox =
    document.getElementById("photoLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");

const prevPhoto =
    document.getElementById("prevPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");

const photoCounter =
    document.getElementById("photoCounter");


// =====================================
// GET ONLY MEET PHOTOS
// =====================================

const lightboxPhotos = Array.from(
    document.querySelectorAll("img")
)
.filter(function(img) {

    return (
        !img.closest("#photoLightbox") &&
        img.src.toLowerCase().includes("meet")
    );

});


let currentPhotoIndex = 0;


// =====================================
// OPEN PHOTO
// =====================================

lightboxPhotos.forEach(function(img, index) {

    img.style.cursor = "zoom-in";

    img.addEventListener("click", function(e) {

        e.stopPropagation();

        currentPhotoIndex = index;

        showPhoto();

        if (photoLightbox) {

            photoLightbox.classList.add("show");

        }

        document.body.style.overflow = "hidden";

    });

});


// =====================================
// SHOW CURRENT PHOTO
// =====================================

function showPhoto() {

    if (!lightboxPhotos.length) return;

    const selectedPhoto =
        lightboxPhotos[currentPhotoIndex];

    if (lightboxImage) {
        lightboxImage.src =
            selectedPhoto.currentSrc ||
            selectedPhoto.src;
    }

    if (photoCounter) {
        photoCounter.textContent =
            (currentPhotoIndex + 1) +
            " / " +
            lightboxPhotos.length;
    }
}




// =====================================
// NEXT PHOTO
// =====================================

function showNextPhoto() {

    currentPhotoIndex++;


    if (
        currentPhotoIndex >=
        lightboxPhotos.length
    ) {

        currentPhotoIndex = 0;

    }


    showPhoto();

}


// =====================================
// PREVIOUS PHOTO
// =====================================

function showPreviousPhoto() {

    currentPhotoIndex--;


    if (currentPhotoIndex < 0) {

        currentPhotoIndex =
            lightboxPhotos.length - 1;

    }


    showPhoto();

}


// =====================================
// NEXT BUTTON
// =====================================

if (nextPhoto) {

    nextPhoto.addEventListener(
        "click",
        function(e) {

            e.stopPropagation();

            showNextPhoto();

        }
    );

}


// =====================================
// PREVIOUS BUTTON
// =====================================

if (prevPhoto) {

    prevPhoto.addEventListener(
        "click",
        function(e) {

            e.stopPropagation();

            showPreviousPhoto();

        }
    );

}


// =====================================
// CLOSE LIGHTBOX
// =====================================

function hidePhotoLightbox() {

    if (photoLightbox) {

        photoLightbox.classList.remove(
            "show"
        );

    }

    document.body.style.overflow = "";

}


// X BUTTON

if (closeLightbox) {

    closeLightbox.addEventListener(
        "click",
        function(e) {

            e.stopPropagation();

            hidePhotoLightbox();

        }
    );

}


// =====================================
// TAP OUTSIDE PHOTO = CLOSE
// =====================================

if (photoLightbox) {

    photoLightbox.addEventListener(
        "click",
        function(e) {

            if (e.target === photoLightbox) {

                hidePhotoLightbox();

            }

        }
    );

}


// =====================================
// 📱 SWIPE LEFT / RIGHT
// =====================================

let touchStartX = 0;
let touchEndX = 0;


if (photoLightbox) {

    photoLightbox.addEventListener(
        "touchstart",
        function(e) {

            touchStartX =
                e.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    photoLightbox.addEventListener(
        "touchend",
        function(e) {

            touchEndX =
                e.changedTouches[0].screenX;


            const distance =
                touchStartX - touchEndX;


            // Small movement ignore
            if (Math.abs(distance) < 50) {

                return;

            }


            // Swipe LEFT
            if (distance > 0) {

                showNextPhoto();

            }


            // Swipe RIGHT
            else {

                showPreviousPhoto();

            }

        },
        {
            passive: true
        }
    );

}


// =====================================
// 💻 KEYBOARD SUPPORT
// =====================================

document.addEventListener(
    "keydown",
    function(e) {

        if (
            !photoLightbox ||
            !photoLightbox.classList.contains("show")
        ) {

            return;

        }


        // RIGHT ARROW
        if (e.key === "ArrowRight") {

            showNextPhoto();

        }


        // LEFT ARROW
        if (e.key === "ArrowLeft") {

            showPreviousPhoto();

        }


        // ESC
        if (e.key === "Escape") {

            hidePhotoLightbox();

        }

    }
);// ==============================
// 💗 SECRET HEART — 3 TAP UNLOCK
// ==============================

const secretHeart =
    document.getElementById("secretHeart");

const secretHeartMessage =
    document.getElementById("secretHeartMessage");

let secretHeartTaps = 0;


secretHeart?.addEventListener("click", function(e) {

    e.stopPropagation();

    secretHeartTaps++;


    // Heart beat on every tap
    secretHeart.classList.remove("secretTap");

    void secretHeart.offsetWidth;

    secretHeart.classList.add("secretTap");


    // Vibrate slightly
    if (navigator.vibrate) {
        navigator.vibrate(40);
    }


    // 3 taps = unlock
    if (secretHeartTaps >= 3) {

        secretHeartMessage?.classList.add(
            "unlocked"
        );

        secretHeart.innerHTML = "♥";
        const hint = document.querySelector(".secretHeartHint");

if (hint) {
    hint.style.display = "none";
}

        secretHeartTaps = 0;


        if (navigator.vibrate) {
            navigator.vibrate([60, 50, 100]);
        }

    }

});// ==================================
// 🫶 HOLD MY HAND MAGIC
// ==================================

const holdBtn =
    document.getElementById("holdBtn");

const holdHandMagic =
    document.getElementById("holdHandMagic");


if (holdBtn && holdHandMagic) {

    holdBtn.addEventListener("click", function() {

        holdHandMagic.classList.add("active");

        // Change button text
        holdBtn.innerHTML = "I'm Holding Your Hand ❤️";

        // Small vibration
        if (navigator.vibrate) {
            navigator.vibrate([40, 40, 80]);
        }

    });

}// ===== PROFILE TYPEWRITER =====

// ==========================================
// ✨ PROFILE TYPEWRITER
// ==========================================

const coupleTyping = document.getElementById("coupleTyping");
const sinceTyping = document.getElementById("sinceTyping");
const dateTyping = document.getElementById("dateTyping");


function typeText(element, text, speed, callback) {

    if (!element) {
        if (callback) callback();
        return;
    }

    element.textContent = "";
    element.classList.add("typingActive");

    const letters = Array.from(text);
    let i = 0;

    function type() {

        if (i < letters.length) {

            element.textContent += letters[i];
            i++;

            setTimeout(type, speed);

        } else {

            element.classList.remove("typingActive");

            if (callback) {
                callback();
            }
        }
    }

    type();
}


// ==========================================
// START TYPEWRITER
// ==========================================

setTimeout(function () {

    // 1. Bondhon Payel
  typeText(
    coupleTyping,
    "Bondhon ♡ Payel",
    150,
    function () {

        coupleTyping.innerHTML =
            'Bondhon <span class="nameHeart">♡</span> Payel';

          

            setTimeout(function () {

                // 2. Together Since
                typeText(
                    sinceTyping,
                    "Together Since",
                    120,
                    function () {

                        setTimeout(function () {

                            // 3. Date & Time
                            typeText(
                                dateTyping,
                                "16 March 2025 • 8:32 PM",
                                100
                            );

                        }, 500);

                    }
                );

            }, 500);

        }
    );

}, 5000);
// =====================================

// ===== MEETING TIMELINE FINAL =====

const finalMeetingItems =
    document.querySelectorAll(".meetingItem");

let finalMeetingStarted = false;


function playMeetingTimeline() {

    if (finalMeetingStarted) return;

    finalMeetingStarted = true;


    finalMeetingItems.forEach(function(item, index) {

        const cardDelay = index * 1300;


        // Show card
        setTimeout(function() {

            item.classList.add("showMeeting");

        }, cardDelay);


        // Draw line AFTER card appears
        if (index < finalMeetingItems.length - 1) {

            setTimeout(function() {

                item.classList.add("drawLine");

            }, cardDelay + 700);

        }

    });

}


if (finalMeetingItems.length > 0) {

    const finalMeetingObserver =
        new IntersectionObserver(function(entries) {

            if (entries[0].isIntersecting) {

                playMeetingTimeline();

                finalMeetingObserver.disconnect();
            }

        }, {
            threshold: 0.15
        });


    finalMeetingObserver.observe(finalMeetingItems[0]);

}