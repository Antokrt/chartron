// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'La Table des Chartrons — Restaurant à Bordeaux',
      meta: [
        {
          name: 'description',
          content:
            'Restaurant gastronomique au cœur du quartier des Chartrons à Bordeaux. Cuisine de marché, vins bordelais, 32 couverts.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Cormorant+SC:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Great+Vibes&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
