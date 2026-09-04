/* =========================================================
   MEMORY WORLD
========================================================= */

#memoryWorld {

    position: fixed;
    inset: 0;

    z-index: 120;

    overflow: hidden;

    background:
        radial-gradient(
            ellipse at 50% 42%,
            rgba(181, 18, 27, 0.16),
            transparent 42%
        ),
        radial-gradient(
            ellipse at 50% 100%,
            rgba(212, 175, 55, 0.10),
            transparent 55%
        ),
        linear-gradient(
            180deg,
            #01040A 0%,
            #061224 52%,
            #02050B 100%
        );

    opacity: 0;

    transform: scale(1.04);

    transition:
        opacity 1.5s ease,
        transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

#memoryWorld.visible {

    opacity: 1;

    transform: scale(1);
}


/* ATMOSPHERE */

.worldAtmosphere {

    position: absolute;

    width: 90vw;
    height: 90vw;

    max-width: 1100px;
    max-height: 1100px;

    left: 50%;
    top: 45%;

    transform: translate(-50%, -50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(181, 18, 27, 0.16),
            rgba(101, 6, 13, 0.07) 35%,
            transparent 70%
        );

    filter: blur(45px);

    animation:
        worldBreath 9s ease-in-out infinite;

    pointer-events: none;
}

@keyframes worldBreath {

    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.92);
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.08);
    }
}


/* STARS */

.worldStars {

    position: absolute;

    inset: 0;

    pointer-events: none;
}

.worldStar {

    position: absolute;

    width: var(--starSize);
    height: var(--starSize);

    border-radius: 50%;

    background: var(--gold-bright);

    opacity: var(--starOpacity);

    box-shadow:
        0 0 8px
        rgba(245, 215, 122, 0.5);

    animation:
        worldTwinkle
        4s ease-in-out infinite;
}

@keyframes worldTwinkle {

    0%,
    100% {
        transform: scale(1);
        opacity: var(--starOpacity);
    }

    50% {
        transform: scale(1.8);
        opacity: 0.8;
    }
}


/* HEADER */

.worldHeader {

    position: absolute;

    top: 0;
    left: 0;
    right: 0;

    z-index: 20;

    display: flex;

    justify-content: space-between;
    align-items: center;

    padding:
        30px
        clamp(25px, 5vw, 70px);

    pointer-events: none;
}

.worldChapter {

    display: block;

    font-size: 0.55rem;

    letter-spacing: 0.55em;

    color: var(--gold);

    margin-bottom: 7px;
}

.worldTitle {

    display: block;

    font-size: 0.65rem;

    letter-spacing: 0.35em;

    color: rgba(255,248,231,0.55);
}

.discoveryCounter {

    display: flex;

    align-items: baseline;

    gap: 5px;

    font-size: 0.55rem;

    letter-spacing: 0.15em;

    color:
        rgba(255,248,231,0.38);
}

.discoveryCounter strong {

    font-family:
        "Bodoni Moda",
        serif;

    font-size: 1.3rem;

    font-weight: 400;

    color: var(--gold-bright);
}


/* WORLD */

.world {

    position: absolute;

    inset: 0;

    overflow: hidden;

    perspective: 1000px;
}


/* MOON */

.moon {

    position: absolute;

    width: clamp(90px, 12vw, 170px);
    height: clamp(90px, 12vw, 170px);

    top: 16%;
    left: 50%;

    transform:
        translateX(-50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle at 35% 35%,
            var(--gold-white),
            var(--gold-bright) 28%,
            var(--gold) 55%,
            rgba(212,175,55,0.15) 72%,
            transparent 73%
        );

    filter:
        drop-shadow(
            0 0 35px
            rgba(245,215,122,0.22)
        );

    opacity: 0.65;

    pointer-events: none;
}


/* CENTRAL LIGHT */

.memoryLight {

    position: absolute;

    width: 35vw;
    height: 35vw;

    max-width: 500px;
    max-height: 500px;

    left: 50%;
    top: 57%;

    transform:
        translate(-50%, -50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(226,27,45,0.20),
            rgba(181,18,27,0.08) 40%,
            transparent 70%
        );

    filter: blur(35px);

    pointer-events: none;
}


/* GROUND */

.worldGround {

    position: absolute;

    left: -10%;
    right: -10%;

    bottom: -35%;

    height: 65%;

    border-radius: 50% 50% 0 0;

    background:
        radial-gradient(
            ellipse at center,
            rgba(181,18,27,0.16),
            rgba(7,20,38,0.8) 45%,
            #02050B 70%
        );

    border-top:
        1px solid
        rgba(212,175,55,0.08);

    box-shadow:
        0 -30px 100px
        rgba(181,18,27,0.08);

    pointer-events: none;
}


/* =========================================================
   WORLD OBJECTS
========================================================= */

.worldObject {

    position: absolute;

    z-index: 10;

    border: none;

    background: transparent;

    cursor: pointer;

    -webkit-tap-highlight-color: transparent;

    touch-action: manipulation;

    transition:
        transform 0.5s ease;
}

.worldObject::after {

    content: "";

    position: absolute;

    left: 50%;
    top: 50%;

    width: 80px;
    height: 80px;

    transform:
        translate(-50%, -50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(245,215,122,0.13),
            transparent 70%
        );

    opacity: 0;

    transition:
        opacity 0.4s ease;
}

.worldObject:hover::after,
.worldObject:focus-visible::after {

    opacity: 1;
}


/* FLOWER */

.flowerObject {

    left: 31%;
    bottom: 25%;

    width: 100px;
    height: 150px;
}

.flowerStem {

    position: absolute;

    width: 2px;
    height: 75px;

    left: 50%;
    bottom: 10px;

    transform:
        translateX(-50%)
        rotate(-4deg);

    background:
        linear-gradient(
            180deg,
            var(--gold),
            var(--crimson-deep)
        );

    box-shadow:
        0 0 8px
        rgba(212,175,55,0.18);
}

.flowerHead {

    position: absolute;

    left: 50%;
    top: 22px;

    transform:
        translateX(-50%);

    display: flex;

    align-items: center;
    justify-content: center;

    width: 55px;
    height: 55px;

    border-radius: 50%;

    color: var(--gold-white);

    font-size: 2rem;

    background:
        radial-gradient(
            circle,
            var(--crimson-bright),
            var(--crimson-deep) 65%,
            transparent 66%
        );

    filter:
        drop-shadow(
            0 0 16px
            rgba(226,27,45,0.4)
        );

    transition:
        transform 0.5s ease;
}

.flowerObject:hover .flowerHead {

    transform:
        translateX(-50%)
        scale(1.12)
        rotate(8deg);
}

.flowerGlow {

    position: absolute;

    left: 50%;
    top: 45px;

    width: 90px;
    height: 90px;

    transform:
        translate(-50%, -50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(226,27,45,0.2),
            transparent 70%
        );

    filter: blur(15px);
}


/* ENVELOPE */

.envelopeObject {

    right: 30%;
    bottom: 28%;

    width: 130px;
    height: 100px;
}

.envelope {

    position: absolute;

    width: 100px;
    height: 68px;

    left: 50%;
    top: 50%;

    transform:
        translate(-50%, -50%);

    background:
        linear-gradient(
            145deg,
            #e6c96c,
            #a9821e
        );

    border-radius: 4px;

    box-shadow:
        0 12px 35px
        rgba(0,0,0,0.35),
        0 0 25px
        rgba(212,175,55,0.14);

    transition:
        transform 0.5s ease;
}

.envelopeObject:hover .envelope {

    transform:
        translate(-50%, -50%)
        translateY(-6px)
        rotate(-2deg);
}

.envelopeFlap {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            135deg,
            #f5d77a,
            #b89028
        );

    clip-path:
        polygon(
            0 0,
            50% 58%,
            100% 0
        );
}

.envelopePaper {

    position: absolute;

    width: 35px;
    height: 45px;

    left: 50%;
    top: 50%;

    transform:
        translate(-50%, -25%);

    background:
        var(--white);

    box-shadow:
        0 2px 10px
        rgba(0,0,0,0.18);

    opacity: 0.8;
}

.envelopeGlow {

    position: absolute;

    left: 50%;
    top: 50%;

    width: 150px;
    height: 100px;

    transform:
        translate(-50%, -50%);

    background:
        radial-gradient(
            ellipse,
            rgba(212,175,55,0.16),
            transparent 70%
        );

    filter: blur(15px);
}


/* RELIC */

.relicObject {

    left: 50%;
    bottom: 19%;

    width: 100px;
    height: 100px;

    transform:
        translateX(-50%);
}

.relic {

    position: absolute;

    left: 50%;
    top: 50%;

    width: 65px;
    height: 65px;

    transform:
        translate(-50%, -50%)
        rotate(45deg);

    display: flex;

    align-items: center;
    justify-content: center;

    font-family:
        "Bodoni Moda",
        serif;

    font-size: 1.4rem;

    color: var(--midnight-dark);

    background:
        linear-gradient(
            135deg,
            var(--gold-white),
            var(--gold),
            #8c6b17
        );

    box-shadow:
        0 0 35px
        rgba(212,175,55,0.3);

    transition:
        transform 0.5s ease;
}

.relic::first-letter {

    transform:
        rotate(-45deg);
}

.relicObject:hover .relic {

    transform:
        translate(-50%, -50%)
        rotate(45deg)
        scale(1.1);
}

.relicHalo {

    position: absolute;

    left: 50%;
    top: 50%;

    width: 110px;
    height: 110px;

    transform:
        translate(-50%, -50%);

    border-radius: 50%;

    border:
        1px solid
        rgba(212,175,55,0.18);

    animation:
        relicPulse 3s ease-in-out infinite;
}

@keyframes relicPulse {

    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.9);

        opacity: 0.3;
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.08);

        opacity: 0.8;
    }
}


/* DISTANT LIGHT */

.distantObject {

    left: 50%;
    top: 31%;

    width: 50px;
    height: 50px;

    transform:
        translateX(-50%);
}

.distantObject span {

    position: absolute;

    width: 8px;
    height: 8px;

    left: 50%;
    top: 50%;

    transform:
        translate(-50%, -50%);

    border-radius: 50%;

    background:
        var(--gold-white);

    box-shadow:
        0 0 12px
        var(--gold-bright),
        0 0 35px
        rgba(245,215,122,0.5);

    animation:
        distantPulse 3s ease-in-out infinite;
}

@keyframes distantPulse {

    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.8);

        opacity: 0.45;
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.5);

        opacity: 1;
    }
}


/* OBJECT CLICK */

.objectActivated {

    animation:
        objectClick 0.7s ease;
}

@keyframes objectClick {

    0% {
        transform:
            scale(1);
    }

    35% {
        transform:
            scale(1.16);
    }

    100% {
        transform:
            scale(1);
    }
}

.relicObject.objectActivated {

    animation:
        relicClick 0.7s ease;
}

@keyframes relicClick {

    0% {
        transform:
            translateX(-50%)
            scale(1);
    }

    35% {
        transform:
            translateX(-50%)
            scale(1.18);
    }

    100% {
        transform:
            translateX(-50%)
            scale(1);
    }
}


/* =========================================================
   HINT
========================================================= */

.worldHint {

    position: absolute;

    z-index: 20;

    left: 50%;
    bottom: 7%;

    transform:
        translateX(-50%);

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 7px;

    text-align: center;

    pointer-events: none;

    animation:
        hintFade 2s ease 1.5s both;
}

.worldHint span:first-child {

    font-family:
        "Bodoni Moda",
        serif;

    font-size: 1rem;

    color:
        rgba(255,248,231,0.65);
}

.worldHint span:last-child {

    font-size: 0.55rem;

    letter-spacing: 0.35em;

    text-transform: uppercase;

    color:
        rgba(245,215,122,0.45);
}

@keyframes hintFade {

    from {
        opacity: 0;
        transform:
            translateX(-50%)
            translateY(12px);
    }

    to {
        opacity: 1;
        transform:
            translateX(-50%)
            translateY(0);
    }
}


/* =========================================================
   INTERACTION PANEL
========================================================= */

.interactionPanel {

    position: absolute;

    z-index: 50;

    left: 50%;
    top: 50%;

    width:
        min(88vw, 600px);

    max-height: 80vh;

    padding: 55px 45px;

    transform:
        translate(-50%, -45%)
        scale(0.94);

    opacity: 0;

    pointer-events: none;

    overflow: auto;

    text-align: center;

    background:
        linear-gradient(
            145deg,
            rgba(7,20,38,0.94),
            rgba(2,5,11,0.97)
        );

    border:
        1px solid
        rgba(212,175,55,0.2);

    box-shadow:
        0 30px 100px
        rgba(0,0,0,0.65),
        0 0 80px
        rgba(181,18,27,0.08);

    backdrop-filter:
        blur(25px);

    transition:
        opacity 0.5s ease,
        transform 0.6s cubic-bezier(0.16,1,0.3,1);
}

.interactionPanel.open {

    opacity: 1;

    transform:
        translate(-50%, -50%)
        scale(1);

    pointer-events: auto;
}

#closeInteraction {

    position: absolute;

    top: 15px;
    right: 20px;

    width: 35px;
    height: 35px;

    border: none;

    background: transparent;

    color:
        rgba(255,248,231,0.45);

    font-size: 1.7rem;

    cursor: pointer;

    transition:
        color 0.3s ease,
        transform 0.3s ease;
}

#closeInteraction:hover {

    color: var(--gold-bright);

    transform:
        rotate(90deg);
}

.interactionSymbol {

    font-family:
        "Bodoni Moda",
        serif;

    font-size: 2rem;

    color:
        var(--gold-bright);

    margin-bottom: 25px;

    text-shadow:
        0 0 25px
        rgba(245,215,122,0.25);
}

.interactionEyebrow {

    font-size: 0.55rem;

    letter-spacing: 0.5em;

    color:
        var(--gold);

    margin-bottom: 25px;
}

.interactionPanel h2 {

    font-family:
        "Bodoni Moda",
        serif;

    font-size:
        clamp(2rem, 5vw, 3.6rem);

    line-height: 1.08;

    font-weight: 400;

    color: var(--white);
}

.interactionLine {

    width: 55px;
    height: 1px;

    margin: 30px auto;

    background:
        linear-gradient(
            90deg,
            transparent,
            var(--gold),
            transparent
        );
}

.interactionPanel p:last-child {

    font-size: 0.78rem;

    line-height: 1.8;

    letter-spacing: 0.05em;

    color:
        rgba(255,248,231,0.45);
}


/* =========================================================
   DISCOVERY TOAST
========================================================= */

.discoveryToast {

    position: absolute;

    z-index: 70;

    left: 50%;
    top: 13%;

    transform:
        translate(-50%, -15px);

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 7px;

    opacity: 0;

    pointer-events: none;

    transition:
        opacity 0.5s ease,
        transform 0.6s ease;
}

.discoveryToast.show {

    opacity: 1;

    transform:
        translate(-50%, 0);
}

.toastEyebrow {

    font-size: 0.5rem;

    letter-spacing: 0.5em;

    color: var(--gold);

}

.toastText {

    font-family:
        "Bodoni Moda",
        serif;

    font-size: 1.05rem;

    color:
        var(--white);

    text-align: center;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 600px) {

    .worldHeader {

        padding:
            22px 20px;
    }

    .worldTitle {
        font-size: 0.55rem;
    }

    .discoveryCounter {
        font-size: 0.48rem;
    }

    .discoveryCounter strong {
        font-size: 1.05rem;
    }

    .moon {

        top: 14%;

        width: 85px;
        height: 85px;
    }

    .flowerObject {

        left: 16%;
        bottom: 24%;

        transform:
            scale(0.82);
    }

    .envelopeObject {

        right: 12%;
        bottom: 26%;

        transform:
            scale(0.78);
    }

    .relicObject {

        bottom: 17%;

        transform:
            translateX(-50%)
            scale(0.82);
    }

    .distantObject {

        top: 28%;
    }

    .interactionPanel {

        width: 90vw;

        padding:
            50px 25px
            40px;
    }

    .interactionPanel h2 {

        font-size:
            clamp(1.8rem, 9vw, 3rem);
    }

    .worldHint {

        bottom: 5%;
    }

    .worldHint span:first-child {

        font-size: 0.85rem;
    }
}


@media (min-width: 601px) and (max-width: 1024px) {

    .flowerObject {
        left: 23%;
    }

    .envelopeObject {
        right: 23%;
    }

    .relicObject {
        bottom: 20%;
    }
}


@media (prefers-reduced-motion: reduce) {

    #memoryWorld,
    .worldAtmosphere,
    .worldStar,
    .relicHalo,
    .distantObject span,
    .worldHint,
    .interactionPanel {

        animation: none !important;
        transition: none !important;
    }
}
