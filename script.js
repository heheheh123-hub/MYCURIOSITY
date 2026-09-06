const starsContainer = document.getElementById("stars");
const beginButton = document.getElementById("beginButton");

function createStars() {
    const amount = window.innerWidth < 600 ? 90 : 170;

    for (let i = 0; i < amount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

       star.style.left = (Math.random() * 100) + "%";
       star.style.top = (Math.random() * 100) + "%";
 
       const size = Math.random() * 2 + 1;
       star.style.width = size + "px";
       star.style.height = size + "px";

        star.style.setProperty(
            "--opacity",
            Math.random() * 0.7 + 0.2
        );

star.style.animationDelay = (Math.random() * 4) + "s";
        starsContainer.appendChild(star);
    }
}

createStars();

let experienceStarted = false;

beginButton.addEventListener("click", startExperience);

function startExperience() {

    console.log("BEGIN WAS CLICKED");

    if (experienceStarted) return;

    experienceStarted = true;

    beginButton.disabled = true;

    document.body.classList.add("experienceStarted");

    startOpeningSequence();
}

function startOpeningSequence() {

    setTimeout(() => {
        beginButton.classList.add("disappear");
    }, 0);

    setTimeout(() => {
        document.getElementById("number").classList.add("awakening");
    }, 500);

    setTimeout(() => {
        document.getElementById("stars").classList.add("pullStars");
    }, 1000);

    setTimeout(() => {
        document.getElementById("intro").classList.add("leave");
    }, 2300);

    setTimeout(() => {
        createFirstScene();
    }, 3900);
}

function createFirstScene() {

    const scene = document.createElement("section");

    scene.id = "firstScene";

    scene.innerHTML = `
        <div class="sceneGlow"></div>

        <div class="sceneContent">

            <p class="sceneEyebrow">WELCOME</p>

            <h1>
                I made something<br>
                for you.
            </h1>

            <div class="sceneLine"></div>

            <p class="sceneText">
                And you're going to have to<br>
                discover it yourself.
            </p>

            <button id="enterScene">
                CONTINUE
            </button>

        </div>
    `;

    document.body.appendChild(scene);

    requestAnimationFrame(() => {
        scene.classList.add("visible");
    });

    document
        .getElementById("enterScene")
        .addEventListener("click", enterFirstScene);
}

function enterFirstScene() {

    const scene = document.getElementById("firstScene");

    scene.classList.add("exit");

    setTimeout(() => {

        scene.remove();

        document.body.classList.add("sceneOneActive");

        createSceneOne();

    }, 1200);
}

function createSceneOne() {

    const sceneOne = document.createElement("main");

    sceneOne.id = "sceneOne";

    sceneOne.innerHTML = `

        <div class="forestWorld">

            <div class="forestSky"></div>

            <div class="forestMoon">
                <div class="moonGlow"></div>
            </div>

            <div class="mountains mountainBack"></div>
            <div class="mountains mountainFront"></div>

            <div class="forestStars"></div>

            <div class="forestFog fogBack"></div>
            <div class="forestFog fogMiddle"></div>
            <div class="forestFog fogFront"></div>

            <div class="treeLayer treeBack">
                <div class="tree tree1"></div>
                <div class="tree tree2"></div>
                <div class="tree tree3"></div>
                <div class="tree tree4"></div>
                <div class="tree tree5"></div>
                <div class="tree tree6"></div>
                <div class="tree tree7"></div>
                <div class="tree tree8"></div>
            </div>

            <div class="treeLayer treeMiddle">
                <div class="tree tree1"></div>
                <div class="tree tree2"></div>
                <div class="tree tree3"></div>
                <div class="tree tree4"></div>
                <div class="tree tree5"></div>
                <div class="tree tree6"></div>
            </div>

            <div class="treeLayer treeFront">
                <div class="tree tree1"></div>
                <div class="tree tree2"></div>
                <div class="tree tree3"></div>
                <div class="tree tree4"></div>
            </div>

            <div class="forestGround">

                <div class="groundMist"></div>

                <div class="forestPath">
                    <div class="pathLight"></div>
                </div>

            </div>

            <div class="memoryTree" id="memoryTree">

                <div class="treeTrunk"></div>

                <div class="treeBranch branch1"></div>
                <div class="treeBranch branch2"></div>
                <div class="treeBranch branch3"></div>

                <div class="treeCrown crown1"></div>
                <div class="treeCrown crown2"></div>
                <div class="treeCrown crown3"></div>

                <div class="treeLight light1"></div>
                <div class="treeLight light2"></div>
                <div class="treeLight light3"></div>
                <div class="treeLight light4"></div>
                <div class="treeLight light5"></div>

            </div>

            <div class="fireflies"></div>

            <div class="moonPond" id="moonPond">

                <div class="pondGlow"></div>

                <div class="pondReflection" id="pondLetters"></div>

                <div class="pondRipple ripple1"></div>
                <div class="pondRipple ripple2"></div>

            </div>

            <div class="forestDiscovery" id="forestDiscovery">

                <div class="discoveryCore"></div>
                <div class="discoveryOrbit"></div>

            </div>

            <div class="forestIntro">

                <span>CHAPTER I</span>

                <h1>The Forest</h1>

                <p>
                    Somewhere in here,<br>
                    something is waiting for you.
                </p>

            </div>

            <div class="forestCounter">

                <span>00</span>
                <small>/ 25</small>

            </div>

        </div>


        <!-- DISCOVERY 01 -->

        <div class="forestReveal" id="forestReveal">

            <div class="revealGlow"></div>

            <div class="forestRevealContent">

                <span>DISCOVERY 01 / 25</span>

                <div class="forestRevealLine"></div>

                <h2>The beginning.</h2>

                <p>
                    Every story has a first moment.
                </p>

                <button id="forestContinue">
                    CONTINUE
                </button>

            </div>

        </div>


        <!-- DISCOVERY 02 -->

        <div class="memoryReveal" id="memoryReveal">

            <div class="memoryRevealContent">

                <span>DISCOVERY 02 / 25</span>

                <div class="memoryRevealLine"></div>

                <div class="memoryPhotoPlaceholder">
                    AYAT
                </div>

                <h2>The first memory.</h2>

                <p>
                    Some moments deserve to be remembered forever.
                </p>

                <button id="memoryContinue">
                    CONTINUE
                </button>

            </div>

        </div>

    `;


    document.body.appendChild(sceneOne);


    createForestStars();

    createFireflies();


    requestAnimationFrame(() => {

        sceneOne.classList.add("visible");

        setTimeout(() => {

            sceneOne.classList.add("forestAwake");

        }, 500);

    });


    const discovery =
        document.getElementById("forestDiscovery");


    if (discovery) {

        discovery.addEventListener(
            "click",
            discoverForestMemory
        );

    }


    sceneOne.addEventListener(
        "pointermove",
        forestParallax
    );


    const forestContinue =
        document.getElementById("forestContinue");


    if (forestContinue) {

        forestContinue.onclick = function(event) {

            event.stopPropagation();

            const reveal =
                document.getElementById("forestReveal");

            if (reveal) {
                reveal.classList.remove("show");
            }

            console.log("DISCOVERY 01 CLOSED");

        };

    }

}

function createForestStars() {

    const container =
        document.querySelector(".forestStars");

    if (!container) return;


    for (let i = 0; i < 120; i++) {

        const star =
            document.createElement("span");

        star.classList.add("forestStar");


        star.style.left =
            (Math.random() * 100) + "%";


        star.style.top =
            (Math.random() * 65) + "%";


        const size =
            Math.random() * 2 + 0.5;


        star.style.width =
            size + "px";


        star.style.height =
            size + "px";


        star.style.animationDelay =
            (Math.random() * 5) + "s";


        container.appendChild(star);

    }

}


function createFireflies() {

    const container =
        document.querySelector(".fireflies");

    if (!container) return;


    for (let i = 0; i < 35; i++) {

        const fly =
            document.createElement("span");

        fly.classList.add("firefly");


        fly.style.left =
            (15 + Math.random() * 70) + "%";


        fly.style.top =
            (35 + Math.random() * 50) + "%";


        fly.style.animationDelay =
            (Math.random() * 6) + "s";


        fly.style.animationDuration =
            (4 + Math.random() * 5) + "s";


        container.appendChild(fly);

    }

}


function forestParallax(event) {

    const scene =
        document.getElementById("sceneOne");

    if (!scene) return;


    const x =
        event.clientX / window.innerWidth - 0.5;


    const y =
        event.clientY / window.innerHeight - 0.5;


    scene.style.setProperty(
        "--forest-x",
        x
    );


    scene.style.setProperty(
        "--forest-y",
        y
    );

}


function discoverForestMemory() {

    const discovery =
        document.getElementById("forestDiscovery");

    if (!discovery) return;

    if (discovery.classList.contains("discovered")) {
        return;
    }

    discovery.classList.add("discovered");


    /* UPDATE COUNTER */

    const counter =
        document.querySelector(".forestCounter span");

    if (counter) {
        counter.textContent = "01";
    }


    /* GET THE FOREST */

    const forest =
        document.querySelector(".forestWorld");


    /* GET THE TREE */

    const tree =
        document.getElementById("memoryTree");


    /* WAKE THE TREE */

    if (tree) {
        tree.classList.add("treeAwakened");
    }


    /* WAKE THE FOREST */

    if (forest) {
        forest.classList.add("forestReaction");
    }


    /* REVEAL THE POND */

    setTimeout(() => {

        if (forest) {
            forest.classList.add("pondRevealed");
        }

    }, 900);


    /* CREATE THE PARTICLE BURST */

    createMemoryParticles();


    /* SHOW DISCOVERY OVERLAY */

    setTimeout(() => {

        setupPondSymbols();

        const reveal =
            document.getElementById("forestReveal");

        if (reveal) {
            reveal.classList.add("show");
        }

    }, 2200);

}

function createMemoryParticles() {

    const world =
        document.querySelector(".forestWorld");

    if (!world) return;


    for (let i = 0; i < 70; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("memoryParticle");


        const startX =
            50 + (Math.random() * 14 - 7);

        const startY =
            52 + (Math.random() * 15 - 7);


        const endX =
            Math.random() * 100;

        const endY =
            Math.random() * 100;


        particle.style.left =
            startX + "%";

        particle.style.top =
            startY + "%";


        particle.style.setProperty(
            "--particle-x",
            (endX - startX) + "vw"
        );

        particle.style.setProperty(
            "--particle-y",
            (endY - startY) + "vh"
        );


        particle.style.animationDelay =
            (Math.random() * 0.8) + "s";


        particle.style.animationDuration =
            (1.2 + Math.random() * 1.4) + "s";


        world.appendChild(particle);


        setTimeout(() => {

            particle.remove();

        }, 3000);

    }

}

function setupWorldObject(id, number, title, text, extra) {

    const object = document.getElementById(id);

    if (!object) return;

    object.addEventListener("click", () => {

        const message = document.getElementById("objectMessage");

        message.querySelector(".messageNumber").textContent = number;
        message.querySelector("h2").textContent = title;
        message.querySelector("p").textContent = text + " " + extra;

        message.classList.add("show");

    });
}


function createWorldParticles() {

    const container = document.querySelector(".worldParticles");

    if (!container) return;

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("div");

        particle.classList.add("worldParticle");

        particle.style.left = (Math.random() * 100) + "%";
        particle.style.top = (Math.random() * 100) + "%";

        const size = Math.random() * 3 + 1;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.animationDelay =
            (Math.random() * 6) + "s";

        container.appendChild(particle);
    }


    document
        .getElementById("closeObject")
        .addEventListener("click", () => {

            document
                .getElementById("objectMessage")
                .classList.remove("show");

        });
}

let pondSequence = [];

const correctPondSequence = ["A", "Y", "A", "T"];

function setupPondSymbols() {

    const pondLetters = document.getElementById("pondLetters");

    if (!pondLetters) return;

    pondLetters.innerHTML = "";
    pondSequence = [];

    // Random letters
    const letters = [
        "Q","M","R","E","P","S","L","N",
        "O","K","D","F","G","H","B","C",
        "W","V","X","J"
    ];

    // Add the letters needed to spell AYAT
    letters.push("A", "Y", "A", "T");

    // Shuffle them
    letters.sort(() => Math.random() - 0.5);

    letters.forEach(function(letter, index) {

        const element = document.createElement("div");

        element.className = "pondLetter";
        element.textContent = letter;

        element.style.setProperty(
            "--letter-x",
            (20 + Math.random() * 60) + "%"
        );

        element.style.setProperty(
            "--letter-y",
            (25 + Math.random() * 45) + "%"
        );

        element.style.setProperty(
            "--letter-delay",
            (Math.random() * 2) + "s"
        );

        element.style.setProperty(
            "--letter-duration",
            (4 + Math.random() * 3) + "s"
        );

        element.dataset.letter = letter;

        element.addEventListener("click", function(event) {

            event.stopPropagation();

            const selectedLetter = element.dataset.letter;

            const currentStep = pondSequence.length;

            // Wrong letter
            if (
                selectedLetter !==
                correctPondSequence[currentStep]
            ) {

                element.classList.add("letterWrong");

                showPondMessage("Not quite...");

                setTimeout(function() {

                    element.classList.remove("letterWrong");

                    pondSequence = [];

                    document
                        .querySelectorAll(".pondLetter")
                        .forEach(function(other) {

                            other.classList.remove(
                                "letterActive"
                            );

                        });

                }, 800);

                return;
            }

            // Correct letter
            pondSequence.push(selectedLetter);

            element.classList.add("letterActive");

            createLetterRipple(element);

            // Completed AYAT
            if (
                pondSequence.length ===
                correctPondSequence.length
            ) {

                showPondMessage(
                    "The forest remembers."
                );

                console.log(
                    "POND PUZZLE COMPLETE — AYAT"
                );

                setTimeout(function() {

                    completePondPuzzle();

                }, 1800);

            }

        });

        pondLetters.appendChild(element);

    });

}


function createLetterRipple(letter) {

    const ripple =
        document.createElement("div");

    ripple.className = "letterRipple";

    ripple.style.left =
        letter.offsetLeft +
        letter.offsetWidth / 2 +
        "px";

    ripple.style.top =
        letter.offsetTop +
        letter.offsetHeight / 2 +
        "px";

    document
        .getElementById("pondLetters")
        .appendChild(ripple);

    setTimeout(function() {

        ripple.remove();

    }, 1000);

}


function completePondPuzzle() {

    const reveal =
        document.getElementById("forestReveal");

    if (reveal) {

        reveal.classList.remove("show");

    }

    const world =
        document.querySelector(".forestWorld");

    if (world) {

        world.classList.add(
            "memoryUnlocked"
        );

    }

    setTimeout(function() {

        const counter =
            document.querySelector(
                ".forestCounter span"
            );

        if (counter) {

            counter.textContent = "02";

        }

        const memoryReveal =
            document.getElementById(
                "memoryReveal"
            );

        if (memoryReveal) {

            memoryReveal.classList.add(
                "show"
            );

        }

        console.log(
            "DISCOVERY 02 UNLOCKED"
        );

    }, 1200);

}
