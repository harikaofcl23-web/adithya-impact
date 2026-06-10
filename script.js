/* =========================
   GLOBAL STYLES
========================= */

:root{

--bg:#050505;
--bg2:#0f0f0f;
--card:#121212;

--gold:#d4af37;
--gold-light:#f4d77d;

--text:#ffffff;
--muted:#b7b7b7;

--shadow:
0 15px 40px rgba(0,0,0,.4);

}

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{

font-family:'Poppins',sans-serif;

background:var(--bg);

color:var(--text);

overflow-x:hidden;

line-height:1.7;

}

/* =========================
   HERO
========================= */

.hero{

position:relative;

height:100vh;

display:flex;

align-items:center;

justify-content:center;

overflow:hidden;

text-align:center;

}

.hero-image{

position:absolute;

width:100%;
height:100%;

object-fit:cover;

z-index:1;

}

.hero-overlay{

position:absolute;

inset:0;

background:
linear-gradient(
to bottom,
rgba(0,0,0,.55),
rgba(0,0,0,.8)
);

z-index:2;

}

.hero-content{

position:relative;

z-index:3;

padding:20px;

max-width:900px;

}

.badge{

display:inline-block;

padding:10px 18px;

border:1px solid var(--gold);

border-radius:40px;

color:var(--gold);

margin-bottom:20px;

font-size:.9rem;

backdrop-filter:blur(10px);

}

.hero h1{

font-size:4rem;

font-family:'Cormorant Garamond',serif;

letter-spacing:2px;

margin-bottom:10px;

}

.hero h2{

font-size:1.4rem;

font-weight:500;

margin-bottom:15px;

}

.hero-certs{

color:var(--gold);

margin-bottom:25px;

}

.hero-quote{

max-width:650px;

margin:auto;

color:#d8d8d8;

}

.counter-container{

margin-top:35px;

}

#counter{

font-size:5rem;

font-weight:700;

color:var(--gold);

}

/* =========================
   BUTTONS
========================= */

.primary-btn,
.secret-btn{

padding:14px 30px;

margin-top:25px;

border:none;

cursor:pointer;

border-radius:40px;

font-size:1rem;

font-weight:600;

transition:.3s;

}

.primary-btn{

background:var(--gold);

color:#111;

}

.primary-btn:hover{

transform:translateY(-4px);

box-shadow:
0 10px 25px rgba(212,175,55,.35);

}

.secret-btn{

background:transparent;

color:var(--gold);

border:1px solid var(--gold);

}

.secret-btn:hover{

background:var(--gold);

color:black;

}

/* =========================
   SECTIONS
========================= */

.section{

padding:100px 8%;

}

.section-title{

text-align:center;

font-size:2.5rem;

margin-bottom:50px;

font-family:'Cormorant Garamond',serif;

color:var(--gold);

}

/* =========================
   STATS
========================= */

.stats-grid{

display:grid;

grid-template-columns:
repeat(auto-fit,minmax(220px,1fr));

gap:25px;

}

.stat-card{

background:
rgba(255,255,255,.03);

border:1px solid rgba(212,175,55,.15);

padding:35px;

text-align:center;

border-radius:20px;

backdrop-filter:blur(12px);

transition:.3s;

}

.stat-card:hover{

transform:translateY(-8px);

border-color:var(--gold);

}

.stat-card h3{

font-size:2rem;

color:var(--gold);

margin-bottom:10px;

}

/* =========================
   SPLIT LAYOUT
========================= */

.split-layout{

display:grid;

grid-template-columns:
1fr 1fr;

gap:50px;

align-items:center;

}

.reverse{

direction:rtl;

}

.reverse *{

direction:ltr;

}

.image-side img{

width:100%;

border-radius:24px;

box-shadow:var(--shadow);

}

.content-side h2{

font-size:2.5rem;

margin-bottom:20px;

color:var(--gold);

font-family:'Cormorant Garamond',serif;

}

.content-side p{

margin-bottom:15px;

color:#d0d0d0;

}

/* =========================
   TIMELINE
========================= */

.timeline{

position:relative;

max-width:800px;

margin:auto;

}

.timeline::before{

content:"";

position:absolute;

left:50%;

width:2px;

height:100%;

background:var(--gold);

}

.timeline-item{

display:flex;

justify-content:space-between;

margin:40px 0;

position:relative;

}

.year{

background:var(--gold);

color:black;

padding:10px 16px;

border-radius:30px;

font-weight:700;

}

.timeline-content{

width:42%;

background:rgba(255,255,255,.03);

padding:20px;

border-radius:16px;

border:1px solid rgba(212,175,55,.15);

}

.timeline-content h3{

color:var(--gold);

margin-bottom:10px;

}

/* =========================
   CERTIFICATIONS
========================= */

.cert-grid{

display:grid;

grid-template-columns:
repeat(auto-fit,minmax(250px,1fr));

gap:30px;

}

.cert-card{

background:rgba(255,255,255,.03);

border-radius:20px;

overflow:hidden;

border:1px solid rgba(212,175,55,.15);

transition:.3s;

}

.cert-card:hover{

transform:translateY(-8px);

}

.cert-card img{

width:100%;

height:240px;

object-fit:cover;

}

.cert-card h3{

padding:20px;

text-align:center;

color:var(--gold);

}

/* =========================
   CERTIFICATE
========================= */

.certificate-section{

padding:100px 8%;

}

.certificate{

max-width:900px;

margin:auto;

padding:60px;

border:2px solid var(--gold);

background:
linear-gradient(
145deg,
#0c0c0c,
#171717
);

border-radius:30px;

text-align:center;

}

.certificate h4{

color:var(--gold);

font-size:1.5rem;

letter-spacing:3px;

margin-bottom:20px;

}

.certificate h1{

font-family:'Cormorant Garamond',serif;

font-size:3rem;

margin-bottom:25px;

}
function downloadCertificate(){
  alert("Certificate Download Clicked!");
}

.certificate-footer{

display:flex;

justify-content:space-between;

margin-top:40px;

padding-top:20px;

border-top:1px solid rgba(212,175,55,.2);

}

/* =========================
   ROADMAP
========================= */

.progress-wrapper{

max-width:900px;

margin:auto;

}

.progress-bar{

height:18px;

background:#222;

border-radius:30px;

overflow:hidden;

}

.progress-fill{

width:10%;

height:100%;

background:
linear-gradient(
90deg,
var(--gold),
var(--gold-light)
);

}

.milestones{

display:flex;

justify-content:space-between;

margin-top:25px;

gap:15px;

flex-wrap:wrap;

}

.milestone{

padding:15px 25px;

background:#111;

border-radius:14px;

border:1px solid rgba(212,175,55,.2);

}

.achieved{

background:var(--gold);

color:black;

}

/* =========================
   PRIVATE MESSAGE
========================= */

.center{

text-align:center;

}

.hidden-message{

max-width:700px;

margin:40px auto 0;

background:
rgba(255,255,255,.03);

padding:35px;

border-radius:24px;

display:none;

border:1px solid rgba(212,175,55,.15);

}

.hidden-message h2{

color:var(--gold);

margin-bottom:20px;

}

/* =========================
   FOOTER
========================= */

footer{

padding:60px 20px;

text-align:center;

color:#999;

border-top:
1px solid rgba(255,255,255,.05);

}

/* =========================
   MOBILE
========================= */

@media(max-width:768px){

.hero h1{
font-size:2.5rem;
}

.hero h2{
font-size:1rem;
}

#counter{
font-size:3rem;
}

.split-layout{
grid-template-columns:1fr;
}

.timeline::before{
display:none;
}

.timeline-item{
display:block;
}

.timeline-content{
width:100%;
margin-top:15px;
}

.certificate{
padding:30px;
}

.certificate-footer{
flex-direction:column;
gap:20px;
}

.section{
padding:70px 6%;
}

}

function launchConfetti() {

  const colors = [
    "#D4AF37", // gold
    "#FFD700",
    "#FFFFFF",
    "#0A66C2"
  ];

  for (let i = 0; i < 180; i++) {

    const confetti =
      document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left =
      Math.random() * 100 + "vw";

    confetti.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];

    confetti.style.animationDuration =
      (Math.random() * 3 + 2) + "s";

    confetti.style.opacity =
      Math.random();

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }

}
