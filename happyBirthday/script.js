/* =========================================
   FIREWORKS
========================================= */

const fireworksContainer =
    document.getElementById("fireworks");


const confettiContainer =
    document.getElementById("confetti");


/* =========================================
   RANDOM COLOR
========================================= */

function randomColor() {

    const colors = [

        "#ff4081",

        "#ffeb3b",

        "#00e676",

        "#40c4ff",

        "#e040fb",

        "#ff9800",

        "#ffffff"

    ];


    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];

}


/* =========================================
   CREATE FIREWORK
========================================= */

function createFirework() {

    if (!fireworksContainer)
        return;


    const centerX =
        Math.random() *
        window.innerWidth;


    const centerY =
        Math.random() *
        (window.innerHeight * 0.65);


    const particles =
        35;


    for (
        let i = 0;
        i < particles;
        i++
    ) {


        const particle =
            document.createElement(
                "div"
            );


        particle.classList.add(
            "firework"
        );


        particle.style.left =
            centerX + "px";


        particle.style.top =
            centerY + "px";


        const angle =
            (Math.PI * 2 * i)
            / particles;


        const distance =
            50 +
            Math.random() * 130;


        const x =
            Math.cos(angle)
            * distance;


        const y =
            Math.sin(angle)
            * distance;


        particle.style.setProperty(
            "--x",
            `${x}px`
        );


        particle.style.setProperty(
            "--y",
            `${y}px`
        );


        particle.style.background =
            randomColor();


        fireworksContainer.appendChild(
            particle
        );


        setTimeout(
            () => {
                particle.remove();
            },
            1400
        );

    }

}


/* =========================================
   AUTOMATIC FIREWORKS
========================================= */

if (fireworksContainer) {

    setInterval(
        createFirework,
        700
    );


    setTimeout(
        createFirework,
        300
    );


    setTimeout(
        createFirework,
        600
    );

}


/* =========================================
   CREATE CONFETTI
========================================= */

function createConfetti(
    amount = 80
) {

    if (!confettiContainer)
        return;


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        const piece =
            document.createElement(
                "div"
            );


        piece.classList.add(
            "confetti-piece"
        );


        piece.style.left =
            Math.random() * 100
            + "vw";


        piece.style.background =
            randomColor();


        piece.style.setProperty(
            "--duration",
            `${3 + Math.random() * 4}s`
        );


        piece.style.setProperty(
            "--move",
            `${-150 + Math.random() * 300}px`
        );


        piece.style.setProperty(
            "--rotation",
            `${Math.random() * 360}deg`
        );


        piece.style.width =
            `${5 + Math.random() * 10}px`;


        piece.style.height =
            `${8 + Math.random() * 15}px`;


        confettiContainer.appendChild(
            piece
        );


        setTimeout(
            () => {
                piece.remove();
            },
            8000
        );

    }

}


/* =========================================
   BIRTHDAY PAGE CONFETTI
========================================= */

if (
    document.body.classList.contains(
        "birthday-page"
    )
) {


    setTimeout(
        () => {

            createConfetti(100);

        },
        1000
    );


    setInterval(
        () => {

            createConfetti(30);

        },
        5000
    );

}


/* =========================================
   GO TO PARTY PAGE
========================================= */

function goToParty() {


    /* Celebration before page change */

    createConfetti(100);


    for (
        let i = 0;
        i < 4;
        i++
    ) {

        setTimeout(
            createFirework,
            i * 200
        );

    }


    /* Open second page */

    setTimeout(
        () => {

            window.location.href =
                "party.html";

        },
        900
    );

}


/* =========================================
   PARTY PAGE
========================================= */

let noClicks = 0;


/* =========================================
   NO BUTTON
========================================= */

function sayNo() {


    const yesBtn =
        document.getElementById(
            "yesBtn"
        );


    const noBtn =
        document.getElementById(
            "noBtn"
        );


    const hint =
        document.getElementById(
            "hint"
        );


    if (
        !yesBtn ||
        !noBtn
    )
        return;


    noClicks++;


    /* =====================================
       MAKE YES BIGGER
    ===================================== */

    const scale =
        1 +
        noClicks * 0.35;


    yesBtn.style.transform =
        `scale(${scale})`;


    yesBtn.style.fontSize =
        `${20 + noClicks * 3}px`;


    yesBtn.style.padding =
        `${18 + noClicks * 4}px
         ${35 + noClicks * 7}px`;


    /* =====================================
       MAKE NO SMALLER
    ===================================== */

    const noScale =
        Math.max(
            0.35,
            1 -
            noClicks * 0.12
        );


    noBtn.style.transform =
        `scale(${noScale})`;


    /* =====================================
       FUNNY TEXT
    ===================================== */

    const messages = [

        "Are you sure? 👀",

        "Think again! 😂",

        "Wrong answer! 😭",

        "The YES button is getting bigger...",

        "You can't escape the party! 😈",

        "JUST SAY YES! 🥳",

        "Look what you did! 😂",

        "Okay... YES is taking over! 🤣"

    ];


    hint.textContent =
        messages[
            Math.min(
                noClicks - 1,
                messages.length - 1
            )
        ];


    /* =====================================
       MOVE NO BUTTON
    ===================================== */

    const moveX =
        Math.random() * 60 - 30;


    const moveY =
        Math.random() * 40 - 20;


    noBtn.style.position =
        "relative";


    noBtn.style.left =
        `${moveX}px`;


    noBtn.style.top =
        `${moveY}px`;

}


/* =========================================
   YES BUTTON
========================================= */

function sayYes() {


    const celebration =
        document.getElementById(
            "celebration"
        );


    if (!celebration)
        return;


    /* =====================================
       SHOW SOLID FINAL SCREEN
    ===================================== */

    celebration.classList.add(
        "active"
    );


    /* =====================================
       HUGE CONFETTI
    ===================================== */

    createConfetti(250);


    /* =====================================
       FIREWORK BURST
    ===================================== */

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        setTimeout(
            createFirework,
            i * 180
        );

    }


    /* =====================================
       CONTINUOUS FIREWORKS
    ===================================== */

    setInterval(
        createFirework,
        800
    );


    /* =====================================
       CONTINUOUS CONFETTI
    ===================================== */

    setInterval(
        () => {

            createConfetti(50);

        },
        3000
    );

}