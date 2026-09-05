```js
const starsContainer = document.getElementById("stars");
const beginButton = document.getElementById("beginButton");

function createStars() {
    const amount = window.innerWidth < 600 ? 90 : 170;

    for (let i = 0; i < amount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.setProperty(
            "--opacity",
            Math.random() * 0.7 + 0.2
        );

        star.style.animationDelay = `${Math.random() * 4}s`;

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
        <div class="sceneOneSky"></div>

        <div class="sceneOneContent">

            <p class="sceneOneLabel">
                CHAPTER I
            </p>

            <h1>
                Somewhere<br>
                between memory<br>
                and imagination.
            </h1>

            <p class="sceneOneHint">
                There's something here.
            </p>

            <button id="sceneOneStart">
                EXPLORE
            </button>

        </div>
    `;

    document.body.appendChild(sceneOne);

    requestAnimationFrame(() => {
        sceneOne.classList.add("visible");
    });

    document
        .getElementById("sceneOneStart")
        .addEventListener("click", () => {

            console.log("Scene One begins.");

            document
                .getElementById("sceneOneStart")
                .textContent = "COMING SOON";

        });
}

console.log("SCRIPT IS WORKING");
```
