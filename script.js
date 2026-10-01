const enterButton = document.getElementById("enterButton");
const openingScreen = document.getElementById("openingScreen");

if (enterButton && openingScreen) {

    enterButton.addEventListener("click", () => {

        openingScreen.classList.add("hidden");

        // Prevent the opening screen from staying in the way
        setTimeout(() => {
            openingScreen.style.display = "none";
        }, 1000);

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   PHOTO LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(
    ".gallery-item img, .full-photo img, .split-image img"
);

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");


galleryImages.forEach((image) => {

    image.style.cursor = "pointer";

    image.addEventListener("click", () => {

        if (!lightbox || !lightboxImage) {
            return;
        }

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Close lightbox */

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    });

}


/* Close lightbox by clicking outside image */

if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}



document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       OPENING SCREEN
    ====================================== */

    const openingScreen =
        document.getElementById("openingScreen");

    const enterButton =
        document.getElementById("enterButton");


    if (openingScreen && enterButton) {

        enterButton.addEventListener("click", function () {

            openingScreen.classList.add("hidden");

            // Remove it completely after the fade-out.
            setTimeout(function () {

                openingScreen.style.display = "none";

            }, 900);

        });

    }


    /* =====================================
       SCROLL REVEAL
    ====================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    } else {

        // Fallback for older browsers.

        revealElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }


    /* =====================================
       PHOTO LIGHTBOX
    ====================================== */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const closeLightbox =
        document.getElementById("closeLightbox");


    const photoImages =
        document.querySelectorAll(
            ".full-photo img, .gallery-item img, .split-image img"
        );


    photoImages.forEach(function (image) {

        image.addEventListener("click", function () {

            if (!lightbox || !lightboxImage) {
                return;
            }

            lightboxImage.src = image.src;

            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    /* Close lightbox button */

    if (closeLightbox) {

        closeLightbox.addEventListener(
            "click",
            function () {

                closePhotoLightbox();

            }
        );

    }


    /* Click outside photo */

    if (lightbox) {

        lightbox.addEventListener(
            "click",
            function (event) {

                if (event.target === lightbox) {

                    closePhotoLightbox();

                }

            }
        );

    }


    /* ESC key */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closePhotoLightbox();

            }

        }
    );


    function closePhotoLightbox() {

        if (!lightbox) {
            return;
        }

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }


    /* =====================================
       CLICK ANYWHERE → HEART
    ====================================== */

    document.addEventListener(
        "click",
        function (event) {

            /*
             * Don't create a floating heart when
             * clicking buttons or photographs.
             */

            if (
                event.target.closest("button") ||
                event.target.closest("img")
            ) {

                return;

            }

            createHeart(
                event.clientX,
                event.clientY
            );

        }
    );


    function createHeart(x, y) {

        const heart =
            document.createElement("div");

        heart.textContent = "❤️";

        heart.style.position = "fixed";

        heart.style.left = x + "px";

        heart.style.top = y + "px";

        heart.style.fontSize =
            (Math.random() * 15 + 15) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9998";

        heart.style.transform =
            "translate(-50%, -50%)";

        heart.style.transition =
            "transform 1.2s ease, opacity 1.2s ease";


        document.body.appendChild(heart);


        requestAnimationFrame(function () {

            heart.style.transform =
                "translate(-50%, -120px) scale(1.3)";

            heart.style.opacity = "0";

        });


        setTimeout(function () {

            heart.remove();

        }, 1200);

    }


    /* =====================================
       FINAL SURPRISE
    ====================================== */

    const surpriseButton =
        document.getElementById("surpriseButton");

    const surpriseMessage =
        document.getElementById("surpriseMessage");


    if (surpriseButton && surpriseMessage) {

        surpriseButton.addEventListener(
            "click",
            function () {

                surpriseMessage.classList.add("show");

                createHeartBurst();

            }
        );

    }


    /* =====================================
       HEART BURST
    ====================================== */

    function createHeartBurst() {

        const hearts = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💓"
        ];


        for (let i = 0; i < 25; i++) {

            const heart =
                document.createElement("div");

            heart.textContent =
                hearts[
                    Math.floor(
                        Math.random() * hearts.length
                    )
                ];


            heart.style.position = "fixed";

            heart.style.left = "50%";

            heart.style.top = "50%";

            heart.style.fontSize =
                (Math.random() * 20 + 15) + "px";

            heart.style.pointerEvents = "none";

            heart.style.zIndex = "10001";

            heart.style.transform =
                "translate(-50%, -50%)";

            heart.style.transition =
                "transform 1.5s ease-out, opacity 1.5s ease-out";


            document.body.appendChild(heart);


            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                Math.random() * 300 + 100;


            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;


            requestAnimationFrame(function () {

                heart.style.transform =
                    `translate(
                        calc(-50% + ${x}px),
                        calc(-50% + ${y}px)
                    )
                    rotate(${Math.random() * 360}deg)`;


                heart.style.opacity = "0";

            });


            setTimeout(function () {

                heart.remove();

            }, 1500);

        }

    }


    /* =====================================
       DEBUG MESSAGE
    ====================================== */

    console.log(
        "❤️ Birthday website loaded successfully."
    );

});

