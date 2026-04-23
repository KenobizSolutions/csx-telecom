export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO 8601
  category: string;
  readingTime: string;
  content: string; // HTML-safe Markdown-like paragraphs, rendered as JSX in the template
  sections: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "fin-reseau-cuivre-rtc",
    title: "La fin du réseau cuivre RTC : ce que les entreprises doivent savoir",
    description:
      "Orange arrête progressivement le réseau téléphonique traditionnel (RTC) sur l'ensemble du territoire. Délais, impacts, solutions : tout ce qu'il faut anticiper.",
    date: "2026-03-15",
    category: "Téléphonie IP",
    readingTime: "5 min",
    content:
      "Depuis 2023, Orange démantèle progressivement le Réseau Téléphonique Commuté (RTC), l'infrastructure cuivre sur laquelle reposent encore des millions de lignes téléphoniques professionnelles en France. Pour les entreprises qui n'ont pas encore migré, l'heure de la décision est maintenant.",
    sections: [
      {
        heading: "Qu'est-ce que le réseau cuivre RTC ?",
        body: "Le Réseau Téléphonique Commuté (RTC) est l'infrastructure téléphonique analogique mise en place par France Télécom au siècle dernier. Il repose sur des câbles en cuivre et des centraux téléphoniques physiques. Ce réseau transporte les communications vocales sous forme de signaux électriques analogiques, et a longtemps constitué la colonne vertébrale des communications d'entreprise en France. Il supporte les lignes analogiques classiques (lignes T0, lignes T2/T30 pour les plus grandes structures), les modems fax, les terminaux de paiement par téléphonie filaire, et parfois les systèmes d'alarme et d'ascenseurs.",
      },
      {
        heading: "Pourquoi Orange arrête-t-il le cuivre ?",
        body: "Le réseau cuivre est vieillissant, coûteux à maintenir et techniquement limité. La fibre optique offre des débits sans comparaison et une fiabilité supérieure. Orange a obtenu de l'ARCEP l'autorisation de fermer progressivement le RTC, zone par zone, jusqu'à son extinction complète prévue à l'horizon 2030. Les premières fermetures de plaques ont commencé dès 2023 sur des zones pilotes. Depuis, le calendrier s'accélère et touche désormais des dizaines de communes chaque trimestre.",
      },
      {
        heading: "Quelles entreprises sont concernées ?",
        body: "Toute entreprise qui dispose encore d'une ligne téléphonique analogique classique est directement impactée. Cela inclut les standards PABX ancienne génération reliés au réseau en cuivre, les lignes fax analogiques, les terminaux de paiement connectés via RTC, les systèmes d'alarme et de contrôle d'accès sur ligne cuivre, et les ascenseurs ou équipements de sécurité utilisant une ligne téléphonique dédiée. Dans le Lot, le Tarn-et-Garonne et les Pyrénées-Atlantiques, de nombreuses PME et artisans fonctionnent encore partiellement ou totalement sur le cuivre.",
      },
      {
        heading: "Quelles sont les solutions de remplacement ?",
        body: "La migration vers la téléphonie IP (VoIP) est la solution naturelle. Elle consiste à faire transiter les communications vocales sur le réseau internet plutôt que sur le réseau cuivre. Les solutions disponibles sont le standard IP cloud (hébergé chez un opérateur comme CSX Telecom, accessible depuis n'importe quel terminal IP), l'IPBX sur site (un équipement installé dans vos locaux qui gère les appels sur IP), et les trunks SIP (remplacement direct des lignes RTC par des canaux SIP pour les standards existants compatibles). Dans tous les cas, vos numéros de téléphone actuels sont portables : vous les conservez sans en changer.",
      },
      {
        heading: "Comment anticiper sans coupure ?",
        body: "La clé est d'agir avant la date de fermeture de votre plaque, et non après. Orange envoie des courriers de préavis, mais les délais sont parfois courts. CSX Telecom réalise un audit gratuit de votre installation pour identifier toutes les lignes RTC actives (y compris celles que vous auriez oubliées — fax, alarme, ascenseur), préparer le portage de vos numéros, et déployer la solution IP avant la coupure. Le portage d'un numéro fixe prend généralement entre 10 et 30 jours ouvrés. Le tout se fait sans interruption de service pour vos appelants.",
      },
    ],
  },
  {
    slug: "cybersecurite-telecom-pme",
    title: "Cybersécurité télécom : les PME sont-elles assez protégées ?",
    description:
      "La téléphonie IP expose les entreprises à de nouveaux risques : fraude à l'international, écoutes, attaques SIP. Panorama des menaces et des protections disponibles.",
    date: "2026-02-10",
    category: "Cybersécurité",
    readingTime: "6 min",
    content:
      "La migration vers la téléphonie IP offre de nombreux avantages aux PME. Mais elle ouvre aussi de nouvelles surfaces d'attaque que beaucoup d'entreprises sous-estiment. Fraudes téléphoniques, attaques SIP, écoutes illégales : tour d'horizon des risques réels et des protections concrètes.",
    sections: [
      {
        heading: "La téléphonie IP, une nouvelle surface d'attaque",
        body: "Contrairement au réseau cuivre RTC, qui est un réseau physiquement fermé, la téléphonie IP transite par internet. Elle est donc exposée aux mêmes menaces que n'importe quel service en ligne : tentatives d'intrusion, interception de trafic, usurpation d'identité téléphonique. Les systèmes VoIP et les standards IP mal configurés sont des cibles connues des cybercriminels, notamment pour la fraude téléphonique internationale (IRSF — International Revenue Share Fraud).",
      },
      {
        heading: "La fraude à l'international : le risque le plus courant",
        body: "La fraude IRSF consiste à compromettre un standard IP ou un compte SIP pour émettre en masse des appels vers des numéros surtaxés à l'étranger. Les montants peuvent atteindre plusieurs milliers d'euros en quelques heures, avant même que l'entreprise ne s'en aperçoive. Les PME sont particulièrement visées car elles disposent rarement de systèmes de détection temps réel. Un standard IP exposé directement sur internet, avec des mots de passe faibles ou des règles de sécurité insuffisantes, est une porte ouverte à ce type d'attaque.",
      },
      {
        heading: "Les attaques SIP : scanning, flooding, injection",
        body: "Le protocole SIP (Session Initiation Protocol), qui gère les appels VoIP, est la cible de plusieurs types d'attaques : le SIP scanning (robots qui scannent internet à la recherche de ports SIP ouverts), le SIP flooding (envoi massif de requêtes pour saturer le standard et rendre les appels impossibles), et l'injection de paquets RTP (interception et manipulation du flux audio d'une communication). Ces attaques ne nécessitent pas de compétences avancées — des outils automatisés sont disponibles sur le darkweb.",
      },
      {
        heading: "Les protections disponibles pour une PME",
        body: "Plusieurs niveaux de protection existent. Le pare-feu NGFW (Next Generation Firewall) est la première ligne de défense : il inspecte le trafic applicatif, détecte les comportements anormaux sur les flux SIP/RTP et bloque les tentatives d'intrusion. La segmentation réseau isole votre infrastructure VoIP du reste de votre réseau informatique. Le chiffrement des appels (SRTP et TLS pour la signalisation SIP) protège les communications contre l'écoute. La détection d'anomalies en temps réel (seuils d'appels, alertes sur les destinations inhabituelles) permet d'identifier et stopper une fraude avant qu'elle ne coûte cher.",
      },
      {
        heading: "Ce que fait CSX Telecom pour ses clients",
        body: "En tant qu'opérateur déclaré ARCEP, CSX Telecom intègre la sécurité dès la conception de chaque installation. Les standards IP que nous déployons sont protégés par des pare-feux NGFW configurés spécifiquement pour les flux VoIP, un monitoring des appels sortants avec alertes automatiques en cas d'anomalie, le chiffrement des flux SRTP/TLS sur les trunks SIP, et des règles de filtrage géographique pour les appels internationaux non souhaités. Nos clients ne subissent pas de fraudes téléphoniques parce que nous anticipons les vecteurs d'attaque avant qu'ils ne soient exploités.",
      },
    ],
  },
  {
    slug: "agents-ia-vocaux-comment-ca-marche",
    title: "Agents IA vocaux : comment ça marche vraiment ?",
    description:
      "Synthèse vocale, modèles de langage, intégration téléphonique : démystification complète de la technologie derrière les agents vocaux IA pour entreprises.",
    date: "2026-01-20",
    category: "IA & Innovation",
    readingTime: "7 min",
    content:
      "Les agents vocaux IA font désormais partie des outils disponibles pour les PME. Mais derrière la démonstration convaincante, que se passe-t-il vraiment ? Modèles de langage, synthèse vocale, intégration téléphonique : explication complète, sans jargon inutile.",
    sections: [
      {
        heading: "Les trois briques technologiques d'un agent vocal",
        body: "Un agent vocal IA repose sur trois composants distincts, chacun crucial : la reconnaissance vocale (Speech-to-Text ou STT), qui transcrit en temps réel ce que dit l'appelant ; le moteur de décision (un modèle de langage de type LLM), qui analyse la transcription et génère une réponse adaptée ; et la synthèse vocale (Text-to-Speech ou TTS), qui convertit la réponse textuelle en voix naturelle avant de la restituer à l'appelant. La qualité de l'expérience finale dépend de la performance de chacune de ces trois briques et de la latence entre elles.",
      },
      {
        heading: "La synthèse vocale : pourquoi notre voix sonne si naturelle",
        body: "Les nouvelles générations de moteurs de synthèse vocale (Text-to-Speech) ont franchi un cap décisif. Là où les anciennes solutions TTS produisaient des voix robotiques et monotones, les moteurs actuels génèrent des voix avec une intonation naturelle, des pauses adaptées au sens de la phrase, et des micro-variations qui imitent les particularités de la parole humaine. La technologie repose sur des modèles de deep learning entraînés sur des milliers d'heures de voix humaines. Le résultat est une voix indiscernable d'un humain pour la grande majorité des appelants, notamment en contexte téléphonique où la qualité audio est de toute façon limitée par le codec.",
      },
      {
        heading: "Le rôle du modèle de langage (LLM)",
        body: "Le LLM (Large Language Model) est le cerveau de l'agent. C'est lui qui comprend l'intention de l'appelant, maintient le contexte de la conversation, et génère la réponse appropriée. Les modèles les plus performants (GPT-4, Claude, Gemini) sont capables de gérer des conversations complexes, des questions imbriquées et des changements de sujet en cours d'appel. Dans le cadre d'un agent téléphonique professionnel, le LLM est également contrainte par un système de prompts qui définit son rôle, son périmètre, ses réponses aux questions fréquentes et les actions qu'il peut effectuer (accéder à un agenda, créer un ticket, transférer l'appel).",
      },
      {
        heading: "L'intégration dans un standard téléphonique IP",
        body: "Pour qu'un agent IA réponde à de vrais appels téléphoniques, il doit être connecté à l'infrastructure téléphonique existante. Cette intégration se fait via le protocole SIP, qui est le standard de la téléphonie IP. L'agent IA est enregistré comme un poste SIP sur le standard : il peut recevoir des appels, transférer vers un humain, mettre en attente et raccrocher, exactement comme un collaborateur classique. Chez CSX Telecom, cette intégration est native : nous déployons le standard IP et l'agent IA en même temps, dans un environnement unifié.",
      },
      {
        heading: "Les limites actuelles à connaître",
        body: "Malgré des progrès rapides, les agents vocaux IA ont encore des limites. La latence reste un enjeu : entre la fin de phrase de l'appelant et le début de la réponse de l'agent, un délai de 1 à 2 secondes est parfois perceptible. Les accents très prononcés ou les dialectes régionaux peuvent encore mettre en difficulté la reconnaissance vocale. Les conversations très longues avec de nombreux rebonds contextuels restent plus complexes à gérer qu'un script linéaire. Enfin, un agent IA n'est pas un humain : les situations émotionnelles fortes (plainte, détresse) doivent toujours pouvoir être transférées vers un interlocuteur humain — c'est une règle que nous appliquons systématiquement dans tous nos déploiements.",
      },
    ],
  },
  {
    slug: "standard-ip-vs-standard-classique",
    title: "Standard IP vs standard classique : pourquoi migrer en 2026 ?",
    description:
      "Comparatif complet entre standard téléphonique IP et standard analogique classique. Fonctionnalités, coûts, contraintes techniques et avantages concrets pour les PME.",
    date: "2026-02-10",
    category: "Téléphonie IP",
    readingTime: "6 min",
    content:
      "La migration vers le standard IP n'est plus une option pour la plupart des entreprises : le réseau cuivre RTC est en extinction progressive. Mais au-delà de la contrainte réglementaire, la téléphonie IP offre des fonctionnalités concrètes qui transforment le quotidien des équipes.",
    sections: [
      {
        heading: "Fonctionnalités comparées",
        body: "Le standard classique est fiable mais limité : pas de télétravail natif, ajout de ligne coûteux, aucune intégration CRM. Le standard IP offre mobilité totale, évolutivité immédiate, intégration avec les outils métier et possibilité d'ajouter des agents vocaux IA.",
      },
    ],
  },
  {
    slug: "internet-professionnel-vs-box-particulier",
    title: "Internet professionnel vs box grand public : les vraies différences",
    description:
      "Pourquoi une box grand public ne suffit pas pour une entreprise ? GTR, débit garanti, QoS, redondance, support dédié : les vraies différences expliquées clairement.",
    date: "2026-01-20",
    category: "Internet professionnel",
    readingTime: "7 min",
    content:
      "Une box grand public et un accès internet professionnel n'ont de commun que le câble qui rentre dans votre bureau. GTR, débit garanti, QoS, redondance, adresse IP fixe, support dédié : voici pourquoi votre activité ne peut pas reposer sur une offre conçue pour des particuliers.",
    sections: [
      {
        heading: "Ce que garantit l'internet professionnel",
        body: "La GTR (Garantie de Temps de Rétablissement) est l'engagement contractuel de rétablissement sous 4h ou 8h. Le débit garanti et symétrique assure la même bande passante en montant et en descendant, sans mutualisation. La QoS priorise les flux voix pour éviter les dégradations lors des appels IP.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
