<template>
  <footer class="site-footer">
    <div class="footer-inner container">
      <div class="footer-top">
        <span class="footer-logo-caps">La Table des Chartrons</span>
        <span class="footer-logo-script">Bordeaux</span>
      </div>

      <div class="ornament footer-ornament">
        <div class="ornament-diamond" />
      </div>

      <div class="footer-cols">
        <div class="footer-col">
          <p class="label footer-col-label">Adresse</p>
          <p>14 rue Notre-Dame<br>33000 Bordeaux</p>
        </div>
        <div class="footer-col">
          <p class="label footer-col-label">Horaires</p>
          <p>Mardi – Samedi<br>12h – 14h &nbsp;·&nbsp; 19h – 22h30</p>
          <p class="footer-closed">Fermé dimanche &amp; lundi</p>
        </div>
        <div class="footer-col">
          <p class="label footer-col-label">Contact</p>
          <p>
            <a href="#">05 56 XX XX XX</a><br>
            <a href="#">contact@latabledeschartrons.fr</a>
          </p>
        </div>
        <div class="footer-col">
          <p class="label footer-col-label">Suivez-nous</p>
          <p>
            <a href="#">Instagram</a><br>
            <a href="#">Facebook</a>
          </p>
          <p style="margin-top: 1rem">
            <a href="#" class="btn btn-gold" style="font-size:0.6rem; padding: 0.6rem 1.4rem">
              Réserver
            </a>
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>La Table des Chartrons &nbsp;·&nbsp; 14 rue Notre-Dame, 33000 Bordeaux &nbsp;·&nbsp; Fermé lundi &amp; dimanche</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--dark);
  color: rgba(240, 230, 216, 0.65);
  padding: 5rem 0 2.5rem;
}

.footer-top {
  text-align: center;
  margin-bottom: 0.5rem;
}

.footer-logo-caps {
  display: block;
  font-family: var(--font-caps);
  font-size: 0.75rem;
  letter-spacing: 0.45em;
  color: var(--cream);
  margin-bottom: 0.25rem;
}

.footer-logo-script {
  display: block;
  font-family: var(--font-script);
  font-size: 2.2rem;
  color: var(--gold);
  line-height: 1;
}

.footer-ornament {
  margin: 0 auto 3rem;
  max-width: 300px;
}

.footer-cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 3.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 2;
}

.footer-col-label {
  display: block;
  margin-bottom: 0.65rem;
}

.footer-col a {
  color: rgba(240, 230, 216, 0.65);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-col a:hover { color: var(--gold); }

.footer-closed {
  font-size: 0.88rem;
  color: rgba(240, 230, 216, 0.35);
  margin-top: 0.25rem;
}

.footer-bottom {
  border-top: 1px solid rgba(184, 153, 106, 0.12);
  padding-top: 1.5rem;
  text-align: center;
  font-family: var(--font-caps);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: rgba(240, 230, 216, 0.3);
}

@media (max-width: 900px) {
  .footer-cols { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
}

@media (max-width: 540px) {
  .footer-cols { grid-template-columns: 1fr; }
}
</style>
