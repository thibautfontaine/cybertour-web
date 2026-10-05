/**
 * Politique de cookies (`/cookies`, `/en/cookies`).
 *
 * Le seul stockage local du site est la clé `ct-lang` (voir
 * `LANG_STORAGE_KEY` dans `index.ts`). Tout nouveau cookie ou stockage
 * navigateur doit être déclaré ici, et un traceur soumis à consentement
 * imposerait un bandeau.
 */
import type { Lang } from './index';
import type { PolicyDict } from './policy';

const EXT = 'target="_blank" rel="noopener"';
const CNIL_URL = 'https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser';
const GOOGLE_URL = 'https://policies.google.com/privacy';
const WEEZEVENT_URL = 'https://weezevent.com/fr/politique-de-confidentialite/';

export const cookies: Record<Lang, PolicyDict> = {
  fr: {
    metaTitle: 'Politique de cookies | Cyber Tour Réunion 2026',
    metaDescription: 'Le site du Cyber Tour Réunion 2026 ne dépose aucun cookie. Détail des traceurs et des services tiers.',
    pageTitle: 'Politique de cookies',
    updated: 'Mise à jour le 5 octobre 2026',
    sections: [
      {
        title: 'En bref',
        blocks: [
          {
            kind: 'p',
            html: "<strong>Le site cybertour.re ne dépose aucun cookie</strong> et n'utilise aucun traceur publicitaire ni de mesure d'audience. Il n'affiche donc pas de bandeau : aucun consentement n'est nécessaire.",
          },
        ],
      },
      {
        title: "Qu'est-ce qu'un traceur ?",
        blocks: [
          {
            kind: 'p',
            html: "Un cookie est un petit fichier enregistré sur votre appareil (ordinateur, tablette, smartphone) lors de la visite d'un site. La réglementation (article 82 de la loi Informatique et Libertés) vise plus largement tout <strong>traceur</strong> : cookies, stockage local du navigateur, pixels, empreintes d'appareil. Un traceur exige votre consentement préalable, sauf s'il est strictement nécessaire au service que vous demandez.",
          },
        ],
      },
      {
        title: 'Ce que le site enregistre sur votre appareil',
        blocks: [
          {
            kind: 'table',
            head: ['Nom', 'Type', 'Finalité', 'Durée', 'Consentement'],
            rowsHtml: [
              [
                '<code>ct-lang</code>',
                'Stockage local du navigateur (pas un cookie)',
                'Retenir la langue choisie avec le sélecteur FR / EN',
                "Jusqu'à ce que vous effaciez les données du site",
                "Non requis : il mémorise un choix que vous avez fait. Il n'est créé que si vous cliquez sur le sélecteur",
              ],
            ],
          },
          {
            kind: 'p',
            html: "Cette valeur reste sur votre appareil : elle n'est envoyée à aucun serveur.",
          },
        ],
      },
      {
        title: "Mesure d'audience sans cookie",
        blocks: [
          {
            kind: 'p',
            html: "Le site utilise <strong>Plausible Analytics</strong>, un outil de mesure d'audience qui ne dépose aucun cookie, ne lit rien sur votre appareil et ne conserve pas votre adresse IP. Les statistiques produites sont agrégées et anonymes. Le détail figure dans la <a href=\"/confidentialite\">politique de confidentialité</a>.",
          },
        ],
      },
      {
        title: 'Contenus et services tiers',
        blocks: [
          {
            kind: 'ul',
            itemsHtml: [
              `<strong>Vidéo du replay (YouTube)</strong> : la vidéo ne se charge que si vous cliquez sur sa vignette. Ce clic contacte les serveurs de Google, qui reçoit votre adresse IP. Le lecteur utilise le mode de confidentialité renforcée (youtube-nocookie.com), mais Google peut tout de même enregistrer des données sur votre appareil. Voir la <a href="${GOOGLE_URL}" ${EXT}>politique de confidentialité de Google</a>.`,
              `<strong>Billetterie (Weezevent)</strong> : le bouton d'inscription ouvre my.weezevent.com dans un nouvel onglet. Les cookies déposés par ce site relèvent de la <a href="${WEEZEVENT_URL}" ${EXT}>politique de confidentialité de Weezevent</a>.`,
              '<strong>Liens externes</strong> (réseaux sociaux, sites des partenaires) : en quittant cybertour.re, vous êtes soumis aux règles du site visité.',
            ],
          },
        ],
      },
      {
        title: 'Gérer les traceurs dans votre navigateur',
        blocks: [
          {
            kind: 'p',
            html: `Vous pouvez à tout moment supprimer les données enregistrées par un site ou bloquer les cookies depuis les réglages de votre navigateur. La CNIL explique la marche à suivre : <a href="${CNIL_URL}" ${EXT}>cnil.fr/fr/cookies-les-outils-pour-les-maitriser</a>.`,
          },
        ],
      },
    ],
  },

  en: {
    metaTitle: 'Cookie policy | Cyber Tour Réunion 2026',
    metaDescription: 'The Cyber Tour Réunion 2026 website sets no cookies. Details of trackers and third-party services.',
    pageTitle: 'Cookie policy',
    updated: 'Last updated 5 October 2026',
    sections: [
      {
        title: 'In short',
        blocks: [
          {
            kind: 'p',
            html: '<strong>The cybertour.re website sets no cookies</strong> and uses no advertising or audience-measurement trackers. It therefore shows no banner: no consent is needed.',
          },
        ],
      },
      {
        title: 'What is a tracker?',
        blocks: [
          {
            kind: 'p',
            html: 'A cookie is a small file stored on your device (computer, tablet, smartphone) when you visit a website. The law (Article 82 of the French Data Protection Act) covers any <strong>tracker</strong> more broadly: cookies, browser local storage, pixels, device fingerprints. A tracker requires your prior consent, unless it is strictly necessary for the service you request.',
          },
        ],
      },
      {
        title: 'What the website stores on your device',
        blocks: [
          {
            kind: 'table',
            head: ['Name', 'Type', 'Purpose', 'Duration', 'Consent'],
            rowsHtml: [
              [
                '<code>ct-lang</code>',
                'Browser local storage (not a cookie)',
                'Remember the language chosen with the FR / EN switcher',
                'Until you clear the site’s data',
                'Not required: it remembers a choice you made. It is only created if you click the switcher',
              ],
            ],
          },
          {
            kind: 'p',
            html: 'This value stays on your device: it is never sent to any server.',
          },
        ],
      },
      {
        title: 'Cookieless audience measurement',
        blocks: [
          {
            kind: 'p',
            html: 'The website uses <strong>Plausible Analytics</strong>, an audience-measurement tool that sets no cookies, reads nothing on your device and does not store your IP address. The statistics it produces are aggregated and anonymous. Details are in the <a href="/en/confidentialite">privacy policy</a>.',
          },
        ],
      },
      {
        title: 'Third-party content and services',
        blocks: [
          {
            kind: 'ul',
            itemsHtml: [
              `<strong>Replay video (YouTube)</strong>: the video only loads if you click its thumbnail. That click contacts Google’s servers, which receive your IP address. The player uses privacy-enhanced mode (youtube-nocookie.com), but Google may still store data on your device. See <a href="${GOOGLE_URL}" ${EXT}>Google’s privacy policy</a>.`,
              `<strong>Ticketing (Weezevent)</strong>: the registration button opens my.weezevent.com in a new tab. Cookies set by that site are covered by <a href="${WEEZEVENT_URL}" ${EXT}>Weezevent’s privacy policy</a> (in French).`,
              '<strong>External links</strong> (social networks, partner websites): once you leave cybertour.re, the rules of the site you visit apply.',
            ],
          },
        ],
      },
      {
        title: 'Managing trackers in your browser',
        blocks: [
          {
            kind: 'p',
            html: `You can delete data stored by a website or block cookies at any time in your browser settings. The CNIL explains how (in French): <a href="${CNIL_URL}" ${EXT}>cnil.fr/fr/cookies-les-outils-pour-les-maitriser</a>.`,
          },
        ],
      },
    ],
  },
};
