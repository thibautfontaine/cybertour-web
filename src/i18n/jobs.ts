/** Chaînes de la page Speed Dating. Le FR reprend mot pour mot la page d'origine. */
import type { Lang } from './index';

export interface JobsStep {
  number: string;
  title: string;
  description: string;
}

export interface JobsTip {
  title: string;
  description: string;
}

export interface JobsDict {
  metaTitle: string;
  metaDescription: string;
  breadcrumbLabel: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  badge: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubtitle: string;
  ctaRegister: string;
  ctaHome: string;
  mailtoRegister: string;
  formatLabel: string;
  formatTitle: string;
  steps: JobsStep[];
  recruitersLabel: string;
  recruitersTitle: string;
  recruitersIntro: string;
  companySlot: string;
  ctaCompany: string;
  mailtoCompany: string;
  candidatesLabel: string;
  studentsTitle: string;
  studentsIntro: string;
  ctaStudent: string;
  studentTips: JobsTip[];
}

export const jobs: Record<Lang, JobsDict> = {
  fr: {
    metaTitle: 'Speed Dating Stages & Alternances | Cyber Tour Réunion 2026',
    metaDescription: 'Speed dating stages et alternances cybersécurité au CyberTour Réunion 2026. Entreprises et étudiants, inscrivez-vous pour rencontrer les talents cyber de demain.',
    breadcrumbLabel: "Fil d'Ariane",
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Speed Dating',
    badge: 'Speed Dating Cyber · Date à confirmer',
    heroTitleLine1: 'Votre prochain talent cyber',
    heroTitleLine2: 'est peut-être dans la salle',
    heroSubtitle: 'Speed dating stages & alternances — 8 minutes pour convaincre, une carrière pour commencer. Date et lieu à confirmer.',
    ctaRegister: "S'inscrire",
    ctaHome: "Retour à l'accueil",
    mailtoRegister: 'mailto:evenement@clusir-roi.org?subject=Cyber%20Tour%202026%20-%20Speed%20Dating%20Stages%20%26%20Alternances',
    formatLabel: 'Le format',
    formatTitle: 'Comment ça marche',
    steps: [
      {
        number: '1',
        title: 'Inscrivez-vous',
        description: "Entreprises, déposez vos offres. Étudiants, créez votre profil. On s'occupe du matching en amont pour que chaque rencontre compte.",
      },
      {
        number: '2',
        title: '8 minutes chrono',
        description: 'Face à face, sans filtre. Vous présentez votre besoin ou votre parcours, vous échangez, vous évaluez. Puis on tourne.',
      },
      {
        number: '3',
        title: 'Connectez-vous',
        description: "Après les rotations, retrouvez vos coups de cœur en zone libre. Les meilleures collaborations commencent souvent autour d'un café.",
      },
    ],
    recruitersLabel: 'Recruteurs',
    recruitersTitle: 'Recruteurs : trouvez vos futurs talents cyber à La Réunion',
    recruitersIntro: "Les compétences cyber sont rares. À La Réunion, elles se forment chaque année dans nos écoles et universités. Le speed dating du CyberTour vous donne un accès direct à des étudiants motivés, formés aux enjeux actuels, et ancrés sur le territoire. Pas de tri de CV à l'aveugle : des échanges concrets, en face à face, pour identifier le profil qui renforcera votre équipe.",
    companySlot: 'Votre entreprise ici ?',
    ctaCompany: 'Inscrire mon entreprise',
    mailtoCompany: 'mailto:evenement@clusir-roi.org?subject=Inscription%20Entreprise%20-%20Speed%20Dating%20Cyber%20Tour%202026',
    candidatesLabel: 'Candidats',
    studentsTitle: 'Étudiants : lancez votre carrière cyber au CyberTour',
    studentsIntro: "Stage, alternance, premier emploi — les entreprises réunionnaises et de l'Océan Indien cherchent des profils comme le vôtre. Quel que soit votre niveau (Bac+2 à Bac+5) ou votre spécialité (sécurité offensive, GRC, développement sécurisé, administration système), vous aurez 8 minutes pour faire la différence face à des recruteurs qui embauchent vraiment.",
    ctaStudent: "S'inscrire comme étudiant",
    studentTips: [
      {
        title: 'Soignez votre pitch',
        description: 'Vous avez 8 minutes, pas 8 heures. Préparez une présentation claire de votre parcours, vos compétences clés et ce que vous recherchez. Allez droit au but.',
      },
      {
        title: 'Montrez ce que vous savez faire',
        description: "Un projet perso, un CTF, une certification, un dépôt GitHub — tout ce qui prouve votre curiosité et votre pratique vaut plus qu'une ligne sur un CV.",
      },
      {
        title: 'Venez avec le bon matériel',
        description: "CV à jour en plusieurs exemplaires, portfolio ou lien vers vos réalisations, et surtout : de l'énergie. Les recruteurs se souviennent des candidats qui ont de l'enthousiasme.",
      },
    ],
  },
  en: {
    metaTitle: 'Internship & Apprenticeship Speed Dating | Cyber Tour Réunion 2026',
    metaDescription: 'Cybersecurity internship and apprenticeship speed dating at CyberTour Réunion 2026. Companies and students, sign up to meet tomorrow’s cyber talent.',
    breadcrumbLabel: 'Breadcrumb',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Speed Dating',
    badge: 'Cyber Speed Dating · Date to be confirmed',
    heroTitleLine1: 'Your next cyber hire',
    heroTitleLine2: 'may already be in the room',
    heroSubtitle: 'Internship & apprenticeship speed dating — 8 minutes to convince, a career to begin. Date and venue to be confirmed.',
    ctaRegister: 'Sign up',
    ctaHome: 'Back to home',
    mailtoRegister: 'mailto:evenement@clusir-roi.org?subject=Cyber%20Tour%202026%20-%20Internship%20%26%20Apprenticeship%20Speed%20Dating',
    formatLabel: 'The format',
    formatTitle: 'How it works',
    steps: [
      {
        number: '1',
        title: 'Sign up',
        description: 'Companies, post your openings. Students, create your profile. We handle the matching beforehand so every meeting counts.',
      },
      {
        number: '2',
        title: '8 minutes flat',
        description: 'Face to face, no filter. You present your need or your background, you talk, you assess. Then everyone rotates.',
      },
      {
        number: '3',
        title: 'Connect',
        description: 'After the rotations, catch up with your favourites in the open area. The best collaborations often start over a coffee.',
      },
    ],
    recruitersLabel: 'Recruiters',
    recruitersTitle: 'Recruiters: find your future cyber talent in Reunion Island',
    recruitersIntro: 'Cyber skills are scarce. In Reunion Island, they are trained every year in our schools and universities. The CyberTour speed dating gives you direct access to motivated students, trained on current issues and rooted in the territory. No blind CV screening: concrete face-to-face conversations to identify the profile that will strengthen your team.',
    companySlot: 'Your company here?',
    ctaCompany: 'Register my company',
    mailtoCompany: 'mailto:evenement@clusir-roi.org?subject=Company%20registration%20-%20Speed%20Dating%20Cyber%20Tour%202026',
    candidatesLabel: 'Candidates',
    studentsTitle: 'Students: launch your cyber career at the CyberTour',
    studentsIntro: 'Internship, apprenticeship (work-study), first job — companies in Reunion Island and across the Indian Ocean are looking for profiles like yours. Whatever your level (2 to 5 years of higher education) or your speciality (offensive security, GRC, secure development, systems administration), you will have 8 minutes to make the difference in front of recruiters who really are hiring.',
    ctaStudent: 'Sign up as a student',
    studentTips: [
      {
        title: 'Polish your pitch',
        description: 'You have 8 minutes, not 8 hours. Prepare a clear summary of your background, your key skills and what you are looking for. Get straight to the point.',
      },
      {
        title: 'Show what you can do',
        description: 'A side project, a CTF, a certification, a GitHub repository — anything that proves your curiosity and your practice is worth more than a line on a CV.',
      },
      {
        title: 'Come properly equipped',
        description: 'An up-to-date CV in several copies, a portfolio or a link to your work, and above all: energy. Recruiters remember the candidates who bring enthusiasm.',
      },
    ],
  },
};
