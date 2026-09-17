/**
 * Billetterie Weezevent — une seule page pour les trois étapes CLUSIR
 * (Nord, Ouest, Sud), chaque étape étant un billet distinct.
 *
 * Le widget est l'iframe officielle de Weezevent (celle que leur page
 * `my.weezevent.com/cybertour` embarque elle-même), sans leur script
 * `weez.js` : pas de JS tiers supplémentaire, la hauteur est fixée côté site
 * et le contenu défile dans le cadre. `code` est l'identifiant organisateur.
 */
import type { Lang } from "../i18n";
import { ACCENT_PAINT } from "./stages";

export const WEEZEVENT_EVENT_ID = "E2453689";
export const WEEZEVENT_ORG_CODE = "70569";

/** Page publique, à ouvrir dans un nouvel onglet (secours, partage). */
export const WEEZEVENT_PAGE = "https://my.weezevent.com/cybertour";

const WIDGET_LOCALE: Record<Lang, string> = { fr: "fr-fr", en: "en-gb" };

export function weezeventWidgetUrl(lang: Lang): string {
  const params = new URLSearchParams({
    color_primary: ACCENT_PAINT.replace("#", ""),
    locale: WIDGET_LOCALE[lang],
    width_auto: "1",
    code: WEEZEVENT_ORG_CODE,
  });
  return `https://widget.weezevent.com/ticket/${WEEZEVENT_EVENT_ID}/?${params.toString()}`;
}
