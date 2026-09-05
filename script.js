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

        <div class="world">

            <div class="worldSky"></div>

            <div class="worldHaze"></div>

            <div class="worldStars"></div>

            <div class="worldMoon"></div>

            <div class="worldHorizon"></div>

            <div class="distantLight"></div>

            <div class="worldGround">

                <div class="pathGlow"></div>

                <div class="path"></div>

            </div>


            <div class="memoryFragment" id="firstFragment">

                <div class="fragmentCore"></div>

                <div class="fragmentRing"></div>

                <div class="fragmentDust"></div>

            </div>


            <div class="sceneInstruction">

                <span>✦</span>

                <p>Something is waiting for you.</p>

            </div>


            <div class="discoveryCounter">

                <span>00</span>

                <small>/ 25</small>

            </div>


            <div class="discoveryReveal" id="discoveryReveal">

                <div class="revealLight"></div>

                <div class="revealContent">

                    <span class="revealNumber">
                        DISCOVERY 01
                    </span>

                    <div class="revealLine"></div>

                    <h2>
                        The beginning.
                    </h2>

                    <p>
                        Every story has one.
                    </p>

                    <button id="continueDiscovery">
                        CONTINUE
                    </button>

                </div>

            </div>

        </div>

    `;

    document.body.appendChild(sceneOne);


    createWorldStars();


    requestAnimationFrame(() => {

        sceneOne.classList.add("visible");

        setTimeout(() => {

            sceneOne.classList.add("worldAwake");

        }, 700);

    });


    const fragment =
        document.getElementById("firstFragment");


    fragment.addEventListener("click", discoverFirstFragment);


    let pointerX = 0;
    let pointerY = 0;


    sceneOne.addEventListener("pointermove", (event) => {

        pointerX =
            (event.clientX / window.innerWidth - 0.5);

        pointerY =
            (event.clientY / window.innerHeight - 0.5);


        sceneOne.style.setProperty(
            "--mouse-x",
            pointerX
        );

        sceneOne.style.setProperty(
            "--mouse-y",
            pointerY
        );

    });


    document
        .getElementById("continueDiscovery")
        .addEventListener("click", () => {

            document
                .getElementById("discoveryReveal")
                .classList.remove("show");

        });

}


function createWorldStars() {

    const container =
        document.querySelector(".worldStars");

    if (!container) return;


    for (let i = 0; i < 150; i++) {

        const star =
            document.createElement("span");

        star.classList.add("worldStar");


        star.style.left =
            (Math.random() * 100) + "%";


        star.style.top =
            (Math.random() * 70) + "%";


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


function discoverFirstFragment() {

    const fragment =
        document.getElementById("firstFragment");


    if (fragment.classList.contains("discovered")) {
        return;
    }


    fragment.classList.add("discovered");


    document
        .querySelector(".discoveryCounter span")
        .textContent = "01";


    document
        .getElementById("sceneOne")
        .classList.add("firstDiscovery");


    setTimeout(() => {

        document
            .getElementById("discoveryReveal")
            .classList.add("show");

    }, 1100);

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
