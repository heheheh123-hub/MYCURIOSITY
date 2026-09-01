/* ========================================
   BIRTHDAY EXPERIENCE
   ======================================== */

const starsContainer = document.getElementById("stars");
const beginButton = document.getElementById("beginButton");


/* ========================================
   STAR FIELD
   ======================================== */

function createStars() {

    const amount = window.innerWidth < 600 ? 90 : 170;

    for (let i = 0; i < amount; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        const x = Math.random() * 100;
        const y = Math.random() * 100;

        const size = Math.random() * 2 + 1;

        const opacity = Math.random() * 0.7 + 0.2;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.setProperty("--opacity", opacity);

        star.style.animationDelay =
            `${Math.random() * 4}s`;

        starsContainer.appendChild(star);
    }
}


/* ========================================
   START
   ======================================== */

createStars();


/* ========================================
   BEGIN EXPERIENCE
   ======================================== */

beginButton.addEventListener("click", () => {

    document.body.classList.add("experienceStarted");

    console.log("Birthday experience started.");

});
