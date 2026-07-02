<template>
  <nav :class="['site-nav', { scrolled: isScrolled, 'nav-dark': isDarkPage }]">
    <div class="nav-inner">
      <ul class="nav-left">
        <li><a href="#">Notre Histoire</a></li>
        <li><a href="#">La Carte</a></li>
        <li><a href="#">La Cave</a></li>
      </ul>

      <NuxtLink to="/" class="nav-logo">
        <span class="nav-logo-caps">La Table</span>
        <span class="nav-logo-script">des Chartrons</span>
      </NuxtLink>

      <div class="nav-right">
        <a href="#" class="nav-phone">05 56 XX XX XX</a>
        <a href="#" class="btn btn-light nav-cta">Réserver</a>
      </div>

      <button
        class="nav-burger"
        :class="{ open: mobileOpen }"
        aria-label="Menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span /><span /><span />
      </button>
    </div>

    <div :class="['nav-mobile', { open: mobileOpen }]">
      <NuxtLink to="/" @click="mobileOpen = false">Accueil</NuxtLink>
      <a href="#" @click="mobileOpen = false">Notre Histoire</a>
      <a href="#" @click="mobileOpen = false">La Carte</a>
      <a href="#" @click="mobileOpen = false">La Cave</a>
      <a href="#" @click="mobileOpen = false">Contact & Réservation</a>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()
const isScrolled = ref(false)
const mobileOpen = ref(false)

const isDarkPage = computed(() => route.path !== '/')

onMounted(() => {
  const onScroll = () => { isScrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

watch(() => route.path, () => { mobileOpen.value = false })
</script>

<style scoped>
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  transition: background 0.35s ease, box-shadow 0.35s ease;
}

.site-nav.scrolled,
.site-nav.nav-dark {
  background: rgba(26, 19, 16, 0.97);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 rgba(184, 153, 106, 0.18);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 3rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Left links */
.nav-left {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  flex: 1;
}

.nav-left a {
  font-family: var(--font-caps);
  font-size: 0.68rem;
  letter-spacing: 0.28em;
  color: rgba(240, 230, 216, 0.78);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-left a:hover,
.nav-left a.router-link-active {
  color: var(--gold);
}

/* Center logo */
.nav-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  line-height: 1;
  flex: 0 0 auto;
  padding: 0 2.5rem;
}

.nav-logo-caps {
  font-family: var(--font-caps);
  font-size: 0.7rem;
  letter-spacing: 0.42em;
  color: var(--cream);
  text-transform: uppercase;
}

.nav-logo-script {
  font-family: var(--font-script);
  font-size: 1.55rem;
  color: var(--gold);
  line-height: 1.1;
}

/* Right */
.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
  justify-content: flex-end;
}

.nav-phone {
  font-family: var(--font-caps);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  color: rgba(240, 230, 216, 0.6);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-phone:hover { color: var(--gold); }

.nav-cta { padding: 0.6rem 1.5rem !important; }

/* Burger */
.nav-burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-burger span {
  display: block;
  width: 22px;
  height: 1px;
  background: var(--gold);
  transition: transform 0.25s, opacity 0.25s;
}

.nav-burger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.nav-burger.open span:nth-child(2) { opacity: 0; }
.nav-burger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* Mobile panel */
.nav-mobile {
  display: none;
  flex-direction: column;
  background: var(--dark);
  border-top: 1px solid rgba(184, 153, 106, 0.15);
  padding: 0 2rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}

.nav-mobile.open {
  display: flex;
  max-height: 320px;
}

.nav-mobile a {
  font-family: var(--font-caps);
  font-size: 0.72rem;
  letter-spacing: 0.28em;
  color: rgba(240, 230, 216, 0.75);
  text-decoration: none;
  padding: 0.9rem 0;
  border-bottom: 1px solid rgba(184, 153, 106, 0.1);
  transition: color 0.2s;
}

.nav-mobile a:last-child { border-bottom: none; }
.nav-mobile a:hover { color: var(--gold); }

/* Responsive */
@media (max-width: 960px) {
  .nav-left,
  .nav-right,
  .nav-phone {
    display: none;
  }
  .nav-right { display: none; }
  .nav-burger { display: flex; }
  .nav-inner { padding: 1.2rem 1.5rem; }
}
</style>
