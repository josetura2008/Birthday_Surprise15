
// WELCOME BUTTON
function openSurprise() {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
}

// OPEN LOVE LETTER
function openLetter() {
    const envelope = document.getElementById("envelope");
    const message = document.getElementById("messageBox");

    envelope.classList.add("open");

    setTimeout(() => {
        message.classList.add("show");

        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 500);
}

// CLOSE LOVE LETTER
function closeLetter() {
    document.getElementById("messageBox").classList.remove("show");
    document.getElementById("envelope").classList.remove("open");
}

// FINAL SURPRISE
function celebrate() {
    const finalMessage = document.getElementById("finalMessage");

    finalMessage.classList.add("show");

    finalMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    // Create celebration hearts
    for (let i = 0; i < 35; i++) {
        createHeart();
    }
}

// FLOATING HEARTS
function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("floating-heart");
    heart.innerHTML = ["❤", "♡", "💕", "💗"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

// AUTOMATIC FLOATING HEARTS
setInterval(createHeart, 700);

