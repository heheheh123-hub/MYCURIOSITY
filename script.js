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

        <div class="memoryWorld">

            <div class="worldGlow"></div>

            <div class="worldParticles"></div>

            <div class="worldTitle">
                <p>CHAPTER I</p>
                <h1>The Memory Room</h1>
                <span>Some things are meant to be discovered.</span>
            </div>


            <!-- WINDOW -->

            <div class="worldObject windowObject" id="windowObject">

                <div class="windowGlow"></div>

                <div class="windowFrame">

                    <div class="windowSky">
                        <div class="windowMoon"></div>
                        <div class="windowStar starA"></div>
                        <div class="windowStar starB"></div>
                        <div class="windowStar starC"></div>
                    </div>

                </div>

                <div class="objectLabel">
                    <span>?</span>
                    <p>THE FUTURE</p>
                </div>

            </div>


            <!-- BOOK -->

            <div class="worldObject bookObject" id="bookObject">

                <div class="book">

                    <div class="bookCover">
                        <span>MEMORIES</span>
                        <small>VOL. I</small>
                    </div>

                </div>

                <div class="objectLabel">
                    <span>01</span>
                    <p>MEMORIES</p>
                </div>

            </div>


            <!-- LETTER -->

            <div class="worldObject letterObject" id="letterObject">

                <div class="letterEnvelope">

                    <div class="envelopeFlap"></div>

                    <div class="letterSeal">
                        ♥
                    </div>

                </div>

                <div class="objectLabel">
                    <span>02</span>
                    <p>A LETTER</p>
                </div>

            </div>


            <!-- CANDLE -->

            <div class="worldObject candleObject" id="candleObject">

                <div class="candle">

                    <div class="flame"></div>

                </div>

                <div class="objectLabel">
                    <span>03</span>
                    <p>WORDS</p>
                </div>

            </div>


            <!-- LOCKED BOX -->

            <div class="worldObject boxObject" id="boxObject">

                <div class="mysteryBox">

                    <div class="boxLid"></div>
                    <div class="boxLock">✦</div>

                </div>

                <div class="objectLabel">
                    <span>?</span>
                    <p>LOCKED</p>
                </div>

            </div>


            <div class="worldHint">
                <span>✦</span>
                Explore.
            </div>

        </div>


        <!-- OBJECT MESSAGE -->

        <div id="objectMessage">

            <div class="messageInner">

                <span class="messageNumber"></span>

                <h2></h2>

                <p></p>

                <button id="closeObject">
                    RETURN
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(sceneOne);

    createWorldParticles();

    requestAnimationFrame(() => {
        sceneOne.classList.add("visible");
    });


    setupWorldObject(
        "bookObject",
        "01",
        "Memories",
        "A whole world made from little moments.",
        "This is where her memories will eventually live."
    );


    setupWorldObject(
        "letterObject",
        "02",
        "A Letter",
        "There are some things I could never fit into a conversation.",
        "This will eventually become one of the most important parts of the experience."
    );


    setupWorldObject(
        "candleObject",
        "03",
        "Words",
        "Things I love about you. Things you don't realise. Things I hope you never forget.",
        "This room is only the beginning."
    );


setupWorldObject(
    "boxObject",
    "?",
    "Something is locked.",
    "You probably shouldn't be able to open this yet.",
    "Maybe you'll figure it out later."
);


    setupWorldObject(
        "windowObject",
        "?",
        "The Future",
        "There are places in this world that don't exist yet.",
        "Some things have to wait until the right moment."
    );
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
