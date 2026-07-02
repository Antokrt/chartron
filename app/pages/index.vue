<template>
  <!-- ── HERO ──────────────────────────────────────────────── -->
  <section class="hero">
    <div class="hero-bg" />
    <div class="hero-content">
      <p class="label hero-label">14 rue Notre-Dame · Bordeaux</p>
      <h1 class="hero-title">
        Au cœur des<br>
        <span class="script-accent">Chartrons</span>
      </h1>
      <p class="hero-subtitle">
        Une table où le vin raconte l'histoire de l'assiette.
      </p>
      <a href="#" class="btn btn-light hero-cta">Réserver une table</a>
    </div>
    <div class="hero-scroll">
      <span class="label" style="color: rgba(184,153,106,0.5)">Découvrir</span>
      <div class="scroll-line" />
    </div>
  </section>

  <!-- ── INTRODUCTION ──────────────────────────────────────── -->
  <section class="section-light intro-section">
    <div class="container-narrow" style="text-align: center">
      <div class="ornament"><div class="ornament-diamond" /></div>
      <p class="label" style="display:block; margin-bottom: 1.5rem">Le restaurant</p>
      <p class="intro-body">
        Née en 2019 dans une ancienne échoppe du quartier négociant, La Table des Chartrons
        réunit une cuisine de marché et une cave 100&nbsp;% bordelaise dans un cadre aux
        pierres apparentes et au parquet ancien.
      </p>
      <p class="intro-slogan">"Le vin, la table, et le temps de vivre."</p>
      <a href="#" class="btn btn-dark" style="margin-top: 2.5rem">
        Notre histoire
      </a>
    </div>
  </section>

  <!-- ── APERÇU CARTE ──────────────────────────────────────── -->
  <section class="section-dark carte-section">
    <div class="container">
      <div class="carte-header">
        <p class="label" style="display:block; margin-bottom: 1rem">La Carte · Printemps–Été</p>
        <h2 class="carte-title">
          Une cuisine de saison,<br>
          <span class="script-accent" style="font-size: clamp(2.2rem,4vw,3.2rem)">pensée pour le verre.</span>
        </h2>
        <div class="ornament carte-ornament"><div class="ornament-diamond" /></div>
      </div>

      <div class="plats-grid">
        <div v-for="plat in platsVedette" :key="plat.nom" class="plat-card">
          <img :src="plat.img" :alt="plat.alt" class="plat-img" />
          <div class="plat-info">
            <p class="plat-cat">{{ plat.cat }}</p>
            <h3 class="plat-nom">{{ plat.nom }}</h3>
            <p class="plat-desc">{{ plat.desc }}</p>
            <p class="plat-prix">{{ plat.prix }}</p>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 5rem">
        <a href="#" class="btn btn-light">Voir la carte complète</a>
      </div>
    </div>
  </section>

  <!-- ── CAVE TEASER ───────────────────────────────────────── -->
  <section class="section-cream cave-section">
    <div class="container cave-inner">
      <div class="cave-text">
        <p class="label" style="display:block; margin-bottom: 1rem">La Cave</p>
        <h2 class="cave-title">
          120<strong class="cave-plus">+</strong> vins,<br>
          <span class="script-accent" style="font-size: clamp(2.2rem,4vw,3.5rem)">une région,</span>
          une passion.
        </h2>
        <p class="cave-body">
          Plus de 120 références bordelaises sélectionnées par Camille Roy directement
          auprès des vignerons. Pessac-Léognan, Saint-Émilion Grand Cru, Margaux — et
          chaque samedi, un producteur présente sa bouteille en salle.
        </p>
        <a href="#" class="btn btn-dark" style="margin-top: 2rem">
          Explorer la cave
        </a>
      </div>

      <div class="cave-visual">
        <img
          src="/vin.png"
          alt="Bouteille et verre de vin bordelais"
          class="cave-visual-img"
        />
      </div>
    </div>
  </section>

  <!-- ── TÉMOIGNAGES ───────────────────────────────────────── -->
  <section class="section-dark temoignages-section">
    <div class="container">
      <div style="text-align: center; margin-bottom: 4rem">
        <p class="label" style="display:block; margin-bottom: 1rem">Ce qu'ils disent</p>
        <span class="script-accent" style="font-size: clamp(2.5rem,5vw,4rem)">expériences</span>
      </div>

      <div class="temoignages-grid">
        <blockquote v-for="t in temoignages" :key="t.auteur" class="temoignage">
          <div class="temoignage-guillemet">"</div>
          <p>{{ t.texte }}</p>
          <cite>— {{ t.auteur }}</cite>
        </blockquote>
      </div>
    </div>
  </section>

  <!-- ── CTA RÉSERVATION ───────────────────────────────────── -->
  <section class="section-light cta-section">
    <div class="container-narrow" style="text-align: center">
      <div class="ornament"><div class="ornament-diamond" /></div>
      <h2 class="cta-title">Réservez votre table</h2>
      <p class="cta-horaires">Mardi – Samedi &nbsp;·&nbsp; Midi & Soir</p>
      <p class="cta-note">Réservation conseillée, notamment le week-end. Salle de 32 couverts.</p>
      <div class="cta-btns">
        <a href="#" class="btn btn-dark">Formulaire de réservation</a>
        <a href="#" class="btn btn-gold">05 56 XX XX XX</a>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({ title: 'La Table des Chartrons — Restaurant à Bordeaux' })

const platsVedette = [
  {
    cat: 'Entrée',
    nom: 'Asperges vertes des Landes',
    desc: 'Sabayon au sauternes',
    prix: '14 €',
    img: '/asperges.png',
    alt: 'Asperges vertes des Landes, sabayon au sauternes'
  },
  {
    cat: 'Plat',
    nom: 'Pièce de bœuf de Bazas',
    desc: 'Jus corsé au cabernet, pommes grenailles',
    prix: '28 €',
    img: '/boeuf.png',
    alt: 'Pièce de bœuf de Bazas, jus corsé au cabernet, pommes grenailles'
  },
  {
    cat: 'Dessert',
    nom: 'Canelé revisité',
    desc: 'Glace vanille bourbon',
    prix: '9 €',
    img: '/canele.png',
    alt: 'Canelé revisité, glace vanille bourbon'
  }
]

const temoignages = [
  {
    texte: 'Une adresse discrète mais terriblement efficace. Le tartare de bar était d\'une fraîcheur incroyable.',
    auteur: 'Sophie M.'
  },
  {
    texte: 'Le service est attentionné sans être guindé, et les conseils de Camille sur les vins sont précieux.',
    auteur: 'Julien R.'
  },
  {
    texte: 'On sent que chaque plat est pensé pour le vin qui l\'accompagne. Une vraie expérience.',
    auteur: 'Laura & Thomas'
  }
]
</script>

<style scoped>
/* ── HERO ── */
.hero {
  position: relative;
  height: 100vh;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: url('/hero.png') center/cover no-repeat;
}

.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(8, 5, 3, 0.52);
}

.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/texture_hero.png') center/cover no-repeat;
  opacity: 0.1;
  mix-blend-mode: overlay;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 2rem;
  max-width: 820px;
}

.hero-label { display: block; margin-bottom: 2rem; }

.hero-title .script-accent {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-weight: 300;
  font-size: clamp(3rem, 8.5vw, 6.8rem);
  letter-spacing: 0.03em;
  margin-top: 0.45rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 9vw, 7rem);
  font-weight: 700;
  color: var(--cream);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1;
  margin-bottom: 0.2em;
  animation: fadeUp 1s ease both;
}

.hero-subtitle {
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 300;
  font-style: italic;
  color: rgba(240, 230, 216, 0.72);
  margin: 1.75rem 0 3rem;
  letter-spacing: 0.02em;
  animation: fadeUp 1s ease 0.2s both;
}

.hero-cta { animation: fadeUp 1s ease 0.4s both; }

.hero-scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(184, 153, 106, 0.5), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 1; }
}

/* ── INTRO ── */
.intro-section { padding: 8rem 0; }

.intro-body {
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  font-weight: 300;
  line-height: 1.95;
  color: rgba(44, 24, 16, 0.82);
  margin-bottom: 1.75rem;
}

.intro-slogan {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.1rem;
  color: var(--gold-dim);
  margin-top: 1.5rem;
}

/* ── CARTE ── */
.carte-section { padding: 8rem 0; }

.carte-header { text-align: center; margin-bottom: 5rem; }

.carte-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: var(--cream);
  line-height: 1.2;
  margin-bottom: 0.3em;
}

.carte-ornament { max-width: 200px; margin: 1.5rem auto 0; }

.plats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(184, 153, 106, 0.08);
}

.plat-card { overflow: hidden; background: var(--dark); }

.plat-img {
  height: 260px;
  width: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.plat-card:hover .plat-img { transform: scale(1.03); }

.plat-info {
  padding: 2rem 1.75rem 2.25rem;
  border: 1px solid rgba(184, 153, 106, 0.1);
  border-top: none;
}

.plat-cat {
  font-family: var(--font-caps);
  font-size: 0.58rem;
  letter-spacing: 0.32em;
  color: var(--gold);
  margin-bottom: 0.6rem;
}

.plat-nom {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--cream);
  margin-bottom: 0.4rem;
  line-height: 1.3;
}

.plat-desc {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-style: italic;
  color: rgba(240, 230, 216, 0.55);
  margin-bottom: 1.1rem;
}

.plat-prix {
  font-family: var(--font-caps);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  color: var(--gold);
}

/* ── CAVE ── */
.cave-section { padding: 8rem 0; }

.cave-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.cave-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 600;
  color: var(--dark-mid);
  line-height: 1.15;
  margin-bottom: 1.5rem;
}

.cave-plus {
  font-weight: 900;
  color: var(--gold);
}

.cave-body {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.95;
  color: rgba(44, 24, 16, 0.78);
}

.cave-visual { display: flex; justify-content: center; }

.cave-visual-img {
  width: 100%;
  max-width: 440px;
  height: 440px;
  object-fit: cover;
  display: block;
}

/* ── TÉMOIGNAGES ── */
.temoignages-section { padding: 8rem 0; }

.temoignages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.temoignage {
  border-left: 1px solid rgba(184, 153, 106, 0.25);
  padding-left: 2rem;
}

.temoignage-guillemet {
  font-family: var(--font-display);
  font-size: 4.5rem;
  line-height: 0.5;
  color: var(--gold);
  opacity: 0.35;
  margin-bottom: 1rem;
}

.temoignage p {
  font-family: var(--font-body);
  font-size: 1.05rem;
  font-style: italic;
  line-height: 1.9;
  color: rgba(240, 230, 216, 0.75);
  margin-bottom: 1.25rem;
}

.temoignage cite {
  font-family: var(--font-caps);
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  color: var(--gold);
}

/* ── CTA ── */
.cta-section { padding: 8rem 0; }

.cta-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: var(--dark-mid);
  margin: 1.5rem 0 1rem;
}

.cta-horaires {
  font-family: var(--font-caps);
  font-size: 0.72rem;
  letter-spacing: 0.28em;
  color: var(--dark-mid);
  margin-bottom: 0.5rem;
}

.cta-note {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: rgba(44, 24, 16, 0.5);
  margin-bottom: 2.5rem;
  font-style: italic;
}

.cta-btns {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .plats-grid { grid-template-columns: 1fr; gap: 2px; }
  .cave-inner { grid-template-columns: 1fr; gap: 3rem; }
  .cave-visual { display: none; }
  .temoignages-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>
