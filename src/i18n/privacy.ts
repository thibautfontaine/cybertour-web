/**
 * Politique de confidentialité (`/confidentialite`, `/en/confidentialite`).
 *
 * Sources vérifiées le 5 octobre 2026 : politique de confidentialité et
 * mentions légales de Weezevent, mentions légales de Kodetis, déclaration de
 * confidentialité de GitHub, politique de confidentialité de Cloudflare.
 * Toute modification d'un prestataire (hébergeur, mesure d'audience,
 * billetterie) doit être reportée ici et dans `cookies.ts`.
 */
import type { Lang } from './index';
import type { PolicyDict } from './policy';

const EMAIL = 'evenement@clusir-roi.org';
const MAIL = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;
const EXT = 'target="_blank" rel="noopener"';

export const privacy: Record<Lang, PolicyDict> = {
  fr: {
    metaTitle: 'Politique de confidentialité | Cyber Tour Réunion 2026',
    metaDescription:
      'Données personnelles traitées par le CLUSIR Réunion Océan Indien pour le site et les inscriptions au Cyber Tour Réunion 2026.',
    pageTitle: 'Politique de confidentialité',
    updated: 'Mise à jour le 5 octobre 2026',
    sections: [
      {
        title: 'Responsable du traitement',
        blocks: [
          {
            kind: 'p',
            html: 'Le responsable du traitement est le <strong>CLUSIR Réunion Océan Indien</strong> (CLUSIR ROI), association loi 1901 (SIREN 539 437 426), dont le siège est situé Immeuble Altea, 41 rue de la Pépinière, 97438 Sainte-Marie, La Réunion. Il organise le Cyber Tour Réunion 2026 et édite le site cybertour.re.',
          },
          { kind: 'p', html: `Pour toute question sur vos données : ${MAIL}.` },
        ],
      },
      {
        title: 'Ce que fait le site lui-même',
        blocks: [
          {
            kind: 'p',
            html: 'Le site cybertour.re ne comporte aucun formulaire, ne crée aucun compte et ne dépose aucun cookie. Deux traitements ont lieu pendant votre visite :',
          },
          {
            kind: 'ul',
            itemsHtml: [
              "les <strong>journaux techniques de l'hébergeur</strong> GitHub (adresse IP, date, page demandée, navigateur), conservés par GitHub pour la sécurité du service ;",
              "une <strong>mesure d'audience sans cookie</strong>, décrite plus bas.",
            ],
          },
          {
            kind: 'p',
            html: 'Les liens de contact ouvrent votre logiciel de messagerie. Un e-mail que vous nous envoyez sert uniquement à vous répondre.',
          },
        ],
      },
      {
        title: 'Les traitements en détail',
        blocks: [
          {
            kind: 'table',
            head: ['Traitement', 'Données', 'Finalité', 'Base légale', 'Conservation'],
            rowsHtml: [
              [
                'Inscription aux étapes Nord, Ouest et Sud (billetterie Weezevent)',
                'Nom, prénom, adresse e-mail',
                "Enregistrer votre inscription, organiser l'accueil, vous envoyer les informations pratiques de l'étape",
                'Mesures précontractuelles prises à votre demande (art. 6.1.b RGPD)',
                'Cinq ans dans la billetterie Weezevent, ou jusqu’à votre demande de suppression',
              ],
              [
                'Information sur nos offres et services',
                'Nom, prénom, adresse e-mail',
                'Vous informer des prochains événements et services du CLUSIR ROI',
                "Votre consentement (art. 6.1.a), donné en cochant la case prévue lors de l'inscription",
                'Trois ans à compter de votre dernière inscription, ou jusqu’au retrait de votre consentement',
              ],
              [
                "Statistiques de l'événement",
                'Données agrégées et anonymisées',
                "Bilan de l'édition (fréquentation, profils des participants)",
                'Intérêt légitime (art. 6.1.f)',
                'Anonymisation à la fin du Cyber Tour',
              ],
              [
                "Mesure d'audience du site",
                "Pages vues, site de provenance, type d'appareil et de navigateur, pays",
                'Connaître la fréquentation du site',
                'Intérêt légitime (art. 6.1.f)',
                'Statistiques agrégées, sans donnée permettant de vous identifier',
              ],
              [
                "Journaux de l'hébergeur",
                'Adresse IP, date, page demandée, navigateur',
                'Sécurité du site',
                'Intérêt légitime (art. 6.1.f)',
                "Selon la politique de GitHub, qui n'indique pas de durée",
              ],
              [
                'Échanges par e-mail',
                'Adresse e-mail, contenu du message',
                'Répondre à votre demande',
                'Intérêt légitime (art. 6.1.f)',
                'Le temps de traiter votre demande',
              ],
              [
                'Exercice de vos droits',
                'Identité, coordonnées, objet de la demande',
                'Traiter votre demande et pouvoir prouver la réponse apportée',
                'Obligation légale (art. 6.1.c)',
                'Le temps de traiter la demande et d’en conserver la preuve',
              ],
            ],
          },
          {
            kind: 'p',
            html: "La case d'information est facultative : ne pas la cocher n'a aucun effet sur votre inscription.",
          },
        ],
      },
      {
        title: "Mesure d'audience",
        blocks: [
          {
            kind: 'p',
            html: "Le site utilise <strong>Plausible Analytics</strong>, installé par Kodetis sur un serveur hébergé chez OVHcloud à Roubaix (France). Le trafic transite par le réseau de Cloudflare, Inc., qui protège ce serveur.",
          },
          {
            kind: 'p',
            html: "Plausible ne dépose aucun cookie, ne lit rien sur votre appareil et ne conserve pas votre adresse IP. Pour compter les visiteurs uniques, il calcule une empreinte à partir de l'adresse IP et du navigateur, mêlée à une valeur aléatoire renouvelée et supprimée chaque jour : un même visiteur ne peut donc pas être suivi d'un jour à l'autre.",
          },
        ],
      },
      {
        title: 'Qui reçoit vos données ?',
        blocks: [
          { kind: 'p', html: 'Seules les personnes qui en ont besoin accèdent à vos données :' },
          {
            kind: 'ul',
            itemsHtml: [
              "les membres du comité d'organisation du CLUSIR ROI ;",
              "la structure qui accueille l'étape à laquelle vous êtes inscrit, qui reçoit uniquement vos nom et prénom pour la liste d'accueil ;",
              'nos sous-traitants techniques, qui agissent sur nos instructions (liste ci-dessous).',
            ],
          },
          {
            kind: 'ul',
            itemsHtml: [
              '<strong>Weezevent SAS</strong> (14 rue de l’Est, 21000 Dijon) : billetterie, données hébergées chez Amazon Web Services en Irlande ;',
              '<strong>GitHub, Inc.</strong> (San Francisco, États-Unis) : hébergement du site ;',
              "<strong>Kodetis</strong> (10 chemin Cassenti, 97480 Saint-Joseph, La Réunion) : mesure d'audience, sur un serveur OVHcloud à Roubaix ;",
              '<strong>Cloudflare, Inc.</strong> (San Francisco, États-Unis) : réseau de diffusion utilisé par Kodetis.',
            ],
          },
          {
            kind: 'p',
            html: "Vos données ne sont ni vendues ni louées. Les partenaires et sponsors de l'événement n'y ont pas accès.",
          },
          {
            kind: 'p',
            html: "Les étapes portées par Expernet, Epitech et EDN gèrent leurs propres inscriptions. C'est alors la politique de confidentialité de chaque organisateur qui s'applique.",
          },
        ],
      },
      {
        title: "Transferts hors de l'Union européenne",
        blocks: [
          {
            kind: 'p',
            html: "Les données d'inscription restent dans l'Union européenne : Weezevent les héberge en Irlande.",
          },
          {
            kind: 'p',
            html: "Deux prestataires sont établis aux États-Unis : GitHub, qui enregistre l'adresse IP des visiteurs pour la sécurité du service, et Cloudflare, par lequel transite la mesure d'audience. Ces transferts reposent sur la décision d'adéquation de la Commission européenne du 10 juillet 2023 (cadre de protection des données UE-États-Unis, ou <em>Data Privacy Framework</em>), auquel GitHub et Cloudflare déclarent adhérer. Les deux sociétés prévoient en complément les clauses contractuelles types de la Commission européenne.",
          },
          {
            kind: 'p',
            html: "Si vous lancez la vidéo du replay, YouTube (Google) reçoit votre adresse IP selon ses propres règles. La vidéo ne se charge pas sans ce clic.",
          },
        ],
      },
      {
        title: 'Sécurité',
        blocks: [
          {
            kind: 'p',
            html: "Le CLUSIR ROI prend des mesures adaptées : collecte limitée aux données nécessaires, accès réservé au comité d'organisation, site servi uniquement en HTTPS, anonymisation des statistiques. En cas de violation de données présentant un risque élevé pour vous, nous vous en informerons dans les meilleurs délais, comme le prévoit l'article 34 du RGPD.",
          },
        ],
      },
      {
        title: 'Vos droits',
        blocks: [
          { kind: 'p', html: 'Vous disposez des droits suivants sur vos données :' },
          {
            kind: 'ul',
            itemsHtml: [
              '<strong>accès</strong>, <strong>rectification</strong> et <strong>effacement</strong> (articles 15 à 17 du RGPD) ;',
              '<strong>limitation</strong> du traitement (article 18) ;',
              "<strong>portabilité</strong> des données fournies lors de l'inscription (article 20) ;",
              "<strong>opposition</strong> aux traitements fondés sur l'intérêt légitime (article 21) ;",
              '<strong>retrait de votre consentement</strong> à tout moment, sans effet sur les traitements déjà réalisés ;',
              '<strong>directives sur le sort de vos données après votre décès</strong> (article 85 de la loi Informatique et Libertés).',
            ],
          },
          {
            kind: 'p',
            html: `Pour les exercer, écrivez à ${MAIL} ou au siège du CLUSIR ROI (adresse ci-dessus). Nous répondons dans un délai d'un mois. Nous ne demandons un justificatif d'identité qu'en cas de doute raisonnable sur votre identité.`,
          },
          {
            kind: 'p',
            html: `Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL : <a href="https://www.cnil.fr/fr/plaintes" ${EXT}>cnil.fr/fr/plaintes</a>, ou par courrier au 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.`,
          },
        ],
      },
      {
        title: 'Cookies',
        blocks: [
          {
            kind: 'p',
            html: 'Le site ne dépose aucun cookie. Le détail figure dans la <a href="/cookies">politique de cookies</a>.',
          },
        ],
      },
      {
        title: 'Modifications',
        blocks: [
          {
            kind: 'p',
            html: 'Cette politique peut évoluer, par exemple si un nouveau prestataire intervient sur le site. La date de mise à jour en haut de page fait foi.',
          },
        ],
      },
    ],
  },

  en: {
    metaTitle: 'Privacy policy | Cyber Tour Réunion 2026',
    metaDescription:
      'Personal data processed by CLUSIR Réunion Océan Indien for the Cyber Tour Réunion 2026 website and registrations.',
    pageTitle: 'Privacy policy',
    updated: 'Last updated 5 October 2026',
    sections: [
      {
        title: 'Data controller',
        blocks: [
          {
            kind: 'p',
            html: 'The data controller is <strong>CLUSIR Réunion Océan Indien</strong> (CLUSIR ROI), a non-profit association under the French law of 1901 (SIREN 539 437 426), headquartered at Immeuble Altea, 41 rue de la Pépinière, 97438 Sainte-Marie, La Réunion. It organises Cyber Tour Réunion 2026 and publishes the cybertour.re website.',
          },
          { kind: 'p', html: `For any question about your data: ${MAIL}.` },
        ],
      },
      {
        title: 'What the website itself does',
        blocks: [
          {
            kind: 'p',
            html: 'The cybertour.re website has no forms, creates no accounts and sets no cookies. Two kinds of processing take place during your visit:',
          },
          {
            kind: 'ul',
            itemsHtml: [
              "<strong>technical logs kept by the host</strong>, GitHub (IP address, date, requested page, browser), retained by GitHub for the security of the service;",
              '<strong>cookieless audience measurement</strong>, described below.',
            ],
          },
          {
            kind: 'p',
            html: 'Contact links open your email client. An email you send us is used only to reply to you.',
          },
        ],
      },
      {
        title: 'Processing in detail',
        blocks: [
          {
            kind: 'table',
            head: ['Processing', 'Data', 'Purpose', 'Legal basis', 'Retention'],
            rowsHtml: [
              [
                'Registration for the North, West and South stages (Weezevent ticketing)',
                'Last name, first name, email address',
                'Record your registration, organise your welcome, send you practical information about the stage',
                'Steps taken at your request prior to entering into a contract (Art. 6(1)(b) GDPR)',
                'Five years in the Weezevent ticketing platform, or until you ask for deletion',
              ],
              [
                'Information about our offers and services',
                'Last name, first name, email address',
                'Keep you informed of upcoming CLUSIR ROI events and services',
                'Your consent (Art. 6(1)(a)), given by ticking the box provided at registration',
                'Three years from your latest registration, or until you withdraw consent',
              ],
              [
                'Event statistics',
                'Aggregated, anonymised data',
                'Review of the edition (attendance, participant profiles)',
                'Legitimate interest (Art. 6(1)(f))',
                'Anonymised at the end of the Cyber Tour',
              ],
              [
                'Website audience measurement',
                'Pages viewed, referring site, device and browser type, country',
                'Understand website traffic',
                'Legitimate interest (Art. 6(1)(f))',
                'Aggregated statistics only, with no data that identifies you',
              ],
              [
                'Host logs',
                'IP address, date, requested page, browser',
                'Website security',
                'Legitimate interest (Art. 6(1)(f))',
                'As per GitHub’s policy, which states no retention period',
              ],
              [
                'Email exchanges',
                'Email address, message content',
                'Reply to your request',
                'Legitimate interest (Art. 6(1)(f))',
                'As long as needed to handle your request',
              ],
              [
                'Exercise of your rights',
                'Identity, contact details, subject of the request',
                'Handle your request and be able to prove the reply',
                'Legal obligation (Art. 6(1)(c))',
                'As long as needed to handle the request and keep proof of it',
              ],
            ],
          },
          {
            kind: 'p',
            html: 'The information box is optional: leaving it unticked has no effect on your registration.',
          },
        ],
      },
      {
        title: 'Audience measurement',
        blocks: [
          {
            kind: 'p',
            html: 'The website uses <strong>Plausible Analytics</strong>, installed by Kodetis on a server hosted by OVHcloud in Roubaix (France). Traffic goes through the network of Cloudflare, Inc., which protects that server.',
          },
          {
            kind: 'p',
            html: 'Plausible sets no cookies, reads nothing on your device and does not store your IP address. To count unique visitors, it computes a fingerprint from the IP address and browser, mixed with a random value that is renewed and deleted every day: the same visitor cannot be tracked from one day to the next.',
          },
        ],
      },
      {
        title: 'Who receives your data?',
        blocks: [
          { kind: 'p', html: 'Only people who need your data can access it:' },
          {
            kind: 'ul',
            itemsHtml: [
              'members of the CLUSIR ROI organising committee;',
              'the organisation hosting the stage you registered for, which receives only your first and last name for the welcome list;',
              'our technical processors, acting on our instructions (listed below).',
            ],
          },
          {
            kind: 'ul',
            itemsHtml: [
              '<strong>Weezevent SAS</strong> (14 rue de l’Est, 21000 Dijon, France): ticketing, data hosted by Amazon Web Services in Ireland;',
              '<strong>GitHub, Inc.</strong> (San Francisco, United States): website hosting;',
              '<strong>Kodetis</strong> (10 chemin Cassenti, 97480 Saint-Joseph, La Réunion): audience measurement, on an OVHcloud server in Roubaix;',
              '<strong>Cloudflare, Inc.</strong> (San Francisco, United States): delivery network used by Kodetis.',
            ],
          },
          {
            kind: 'p',
            html: 'Your data is neither sold nor rented. Event partners and sponsors have no access to it.',
          },
          {
            kind: 'p',
            html: 'The stages run by Expernet, Epitech and EDN handle their own registrations, under each organiser’s own privacy policy.',
          },
        ],
      },
      {
        title: 'Transfers outside the European Union',
        blocks: [
          {
            kind: 'p',
            html: 'Registration data stays in the European Union: Weezevent hosts it in Ireland.',
          },
          {
            kind: 'p',
            html: 'Two providers are based in the United States: GitHub, which logs visitors’ IP addresses for the security of the service, and Cloudflare, through which audience measurement traffic passes. These transfers rely on the European Commission adequacy decision of 10 July 2023 (EU-U.S. Data Privacy Framework), to which GitHub and Cloudflare state that they adhere. Both companies also provide for the European Commission’s standard contractual clauses.',
          },
          {
            kind: 'p',
            html: 'If you start the replay video, YouTube (Google) receives your IP address under its own rules. The video does not load until you click.',
          },
        ],
      },
      {
        title: 'Security',
        blocks: [
          {
            kind: 'p',
            html: 'CLUSIR ROI takes appropriate measures: collection limited to what is needed, access restricted to the organising committee, website served over HTTPS only, anonymised statistics. In the event of a data breach likely to result in a high risk to you, we will inform you without undue delay, as required by Article 34 GDPR.',
          },
        ],
      },
      {
        title: 'Your rights',
        blocks: [
          { kind: 'p', html: 'You have the following rights over your data:' },
          {
            kind: 'ul',
            itemsHtml: [
              '<strong>access</strong>, <strong>rectification</strong> and <strong>erasure</strong> (Articles 15 to 17 GDPR);',
              '<strong>restriction</strong> of processing (Article 18);',
              '<strong>portability</strong> of the data provided at registration (Article 20);',
              '<strong>objection</strong> to processing based on legitimate interest (Article 21);',
              '<strong>withdrawal of consent</strong> at any time, without affecting processing already carried out;',
              '<strong>instructions on what happens to your data after your death</strong> (Article 85 of the French Data Protection Act).',
            ],
          },
          {
            kind: 'p',
            html: `To exercise them, write to ${MAIL} or to the CLUSIR ROI head office (address above). We reply within one month. We only ask for proof of identity if we have reasonable doubts about who you are.`,
          },
          {
            kind: 'p',
            html: `If, after contacting us, you believe your rights have not been respected, you can lodge a complaint with the CNIL, the French data protection authority: <a href="https://www.cnil.fr/fr/plaintes" ${EXT}>cnil.fr/fr/plaintes</a>, or by post at 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, France.`,
          },
        ],
      },
      {
        title: 'Cookies',
        blocks: [
          {
            kind: 'p',
            html: 'The website sets no cookies. Details are in the <a href="/en/cookies">cookie policy</a>.',
          },
        ],
      },
      {
        title: 'Changes',
        blocks: [
          {
            kind: 'p',
            html: 'This policy may change, for example if a new provider starts working on the website. The update date at the top of the page applies.',
          },
        ],
      },
    ],
  },
};
