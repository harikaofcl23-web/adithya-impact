/* =========================
   ADITHYA IMPACT V2
   SCRIPT.JS
========================= */

/* -------------------------
   Animated Counter
------------------------- */

const counter = document.getElementById("counter");

let current = 0;
let target = 10001;

const counterInterval = setInterval(() => {

  current += 101;

  if(current >= target){
    current = target;
    clearInterval(counterInterval);
  }

  counter.innerText = current.toLocaleString();

}, 20);

/* -------------------------
   Scroll To Journey
------------------------- */

function scrollToJourney(){

  const section =
    document.getElementById("journey");

  section.scrollIntoView({
    behavior:"smooth"
  });

}

/* -------------------------
   Private Message Toggle
------------------------- */

function toggleMessage(){

  const message =
    document.getElementById(
      "privateMessage"
    );

  if(
    message.style.display === "block"
  ){

    message.style.display = "none";

  }else{

    message.style.display = "block";

    message.scrollIntoView({
      behavior:"smooth"
    });

  }

}

/* -------------------------
   Certificate Download
------------------------- */

function downloadCertificate(){

  const certificateContent = `
CERTIFICATE OF IMPACT

Presented To

ADITHYA SAI DUDUKU

For inspiring and educating
10,000+ professionals through
accessibility advocacy,
knowledge sharing,
and leadership.

Issued:
10 June 2026

Presented with admiration and pride

Harika ❤️
`;

  const blob = new Blob(
    [certificateContent],
    {type:"text/plain"}
  );

  const link =
    document.createElement("a");

  link.href =
    URL.createObjectURL(blob);

  link.download =
    "Adithya_Impact_Certificate.txt";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

}

/* -------------------------
   Confetti Celebration
------------------------- */

function createConfetti(){

  for(let i=0;i<120;i++){

    const confetti =
      document.createElement("div");

    confetti.classList.add(
      "confetti"
    );

    confetti.style.left =
      Math.random()*100 + "vw";

    confetti.style.animationDuration =
      (Math.random()*3 + 2) + "s";

    confetti.style.opacity =
      Math.random();

    confetti.style.background =
      [
        "#D4AF37",
        "#FFFFFF",
        "#FFD700"
      ][
        Math.floor(
          Math.random()*3
        )
      ];

    document.body.appendChild(
      confetti
    );

    setTimeout(() => {

      confetti.remove();

    }, 5000);

  }

}

/* -------------------------
   Celebration Trigger
------------------------- */

window.addEventListener(
  "load",
  () => {

    setTimeout(() => {

      createConfetti();

    }, 1200);

  }
);

/* -------------------------
   Fade In Animations
------------------------- */

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if(entry.isIntersecting){

          entry.target.classList.add(
            "show"
          );

        }

      });

    },

    {
      threshold:0.15
    }

  );

document
  .querySelectorAll(
    ".section, .certificate"
  )
  .forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

  });

/* -------------------------
   Luxury Hover Glow
------------------------- */

document
.querySelectorAll(
".stat-card, .cert-card"
)
.forEach(card => {

card.addEventListener(
"mouseenter",
() => {

card.style.boxShadow =
"0 0 30px rgba(212,175,55,.35)";

}
);

card.addEventListener(
"mouseleave",
() => {

card.style.boxShadow =
"none";

}
);

});

/* -------------------------
   Road To 100K Message
------------------------- */

document
.querySelectorAll(".milestone")
.forEach(item => {

item.addEventListener(
"click",
() => {

if(
item.innerText.includes("25K")
||
item.innerText.includes("50K")
||
item.innerText.includes("100K")
){

alert(
"🚀 Coming Soon...\n\nThe next milestone is waiting."
);

}

}
);

});

/* -------------------------
   Console Easter Egg
------------------------- */

console.log(`
🏆 ADITHYA IMPACT

10,001 Followers
10 June 2026

Built with admiration,
pride,
and a little bit of love.

— Harika ❤️
`);
