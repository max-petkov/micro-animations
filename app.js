function homeAnimation() {
  const home = document.querySelector(".home");
  const tl = gsap.timeline({
    defaults: { duration: 0.35, ease: "Power2.easeOut" },
  });

  gsap.set(".feather", { scale: 0, transformOrigin: "center" });
  home.addEventListener("click", function () {
    tl.fromTo(".home-svg", { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 });
    gsap.fromTo(
      ".feather",
      { y: -5, scale: 0 },
      { y: 20, scale: 2, duration: 2, stagger: 0.2 }
    );
    gsap.fromTo(".right-feather", { x: 0 }, { x: 5 });
  });
}

function notificationAnimation() {
  const notification = document.querySelector(".notifications");

  gsap.set(".bell", { transformOrigin: "top center" });
  gsap.set(".ringer", { transformOrigin: "top center" });
  gsap.set(".wave", { autoAlpha: 0, transformOrigin: "bottom" });

  notification.addEventListener("click", function () {
    gsap.fromTo(
      ".bell",
      { rotation: -5 },
      { rotation: 0, duration: 2, ease: "elastic.out(5, 0.2)" }
    );
    gsap.fromTo(
      ".ringer",
      { rotation: 3, x: -0.4 },
      { rotation: 0, x: 0, duration: 2, ease: "elastic.out(5, 0.2)" }
    );
    gsap.fromTo(
      ".wave",
      { scale: 0, autoAlpha: 1 },
      { scale: 1.3, autoAlpha: 0, duration: 1 }
    );
  });
}

function messageAnimation() {
  const message = document.querySelector(".messages");
  const tl = gsap.timeline({
    defaults: { duration: 0.35, ease: "Power2.easeOut" },
  });

  gsap.set(".flap", { transformOrigin: "top" });
  message.addEventListener("click", function () {
    tl.fromTo(".messages-svg", { scale: 1 }, { scale: 0.9 })
      .fromTo(".flap", { scale: 1 }, { scale: -1 }, "<50%")
      .fromTo(".messages-svg", { scale: 0.9 }, { scale: 1 }, "<50%")
      .fromTo(
        ".note",
        { autoAlpha: 1, y: 0 },
        { autoAlpha: 0, y: -40, duration: 0.7 }
      )
      .to(".flap", { scale: 1 }, "<75%");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  homeAnimation();
  notificationAnimation();
  messageAnimation();
});
