export interface Article {
  slug: string
  titre: string
  category: string
  date: string
  readTime: string
  extrait: string
  contenu: string
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export const articles: Article[] = [
  {
    slug: 'proteger-sa-marque-depot-enregistrement-strategies',
    titre: 'Protéger sa marque : dépôt, étendue et stratégies de défense',
    category: 'Propriété intellectuelle',
    date: 'Août 2025',
    readTime: '7 min',
    extrait: "La marque est souvent l'actif le plus précieux d'une entreprise, mais sa protection exige une démarche proactive. Dépôt à l'INPI, choix des classes, surveillance et action en contrefaçon : ce qu'il faut savoir pour sécuriser votre identité commerciale.",
    contenu: `**Pourquoi déposer sa marque est indispensable**

La marque est le signe distinctif qui permet à vos clients d'identifier vos produits ou services. Sans dépôt, vous ne bénéficiez d'aucune protection juridique formelle : un concurrent peut légalement adopter un signe similaire au vôtre sur le même marché, voire vous contraindre à renommer votre activité s'il dépose avant vous.

En France, le dépôt s'effectue auprès de l'INPI (Institut National de la Propriété Industrielle). Il confère un droit exclusif d'exploitation de la marque pour les produits et services désignés, dans les classes choisies, pour une durée de 10 ans renouvelable à l'infini.

**Choisir les bonnes classes de protection**

La classification internationale de Nice répartit les produits et services en 45 classes. Lors du dépôt, il est impératif de bien identifier les classes correspondant à votre activité actuelle, mais aussi à votre développement futur. Une marque déposée uniquement en classe 25 (vêtements) ne sera pas protégée si vous développez une gamme cosmétique (classe 3).

Un dépôt trop restrictif expose à des lacunes de protection ; un dépôt trop large peut être coûteux et exposer à des actions en déchéance pour non-usage. L'assistance d'un avocat permet de calibrer précisément l'étendue de la protection.

**La surveillance de marque**

Déposer ne suffit pas : il faut aussi surveiller les nouvelles demandes d'enregistrement susceptibles de porter atteinte à votre marque. L'INPI publie chaque semaine les nouvelles demandes au BOPI (Bulletin Officiel de la Propriété Industrielle). Un titulaire qui ne forme pas opposition dans les deux mois suivant la publication perd son droit d'opposition.

Des outils de veille automatisée existent, ou vous pouvez déléguer cette surveillance à votre avocat, qui s'assurera de réagir dans les délais en cas d'atteinte détectée.

**Agir en contrefaçon**

En cas d'atteinte à votre marque — reproduction, imitation ou usage non autorisé par un tiers —, plusieurs voies de recours sont disponibles : la mise en demeure amiable, la saisie-contrefaçon permettant de constituer des preuves, et l'action en contrefaçon devant le tribunal judiciaire compétent. Les sanctions peuvent inclure des dommages-intérêts, la cessation de l'usage illicite et la publication du jugement.

La réactivité est essentielle : plus vous tardez à agir, plus le tiers consolide sa position sur le marché et plus il sera difficile d'obtenir une réparation à la hauteur du préjudice subi.`,
  },
  {
    slug: 'intelligence-artificielle-droits-auteur-creation-ia',
    titre: "Intelligence artificielle et droits d'auteur : à qui appartiennent les créations générées par l'IA ?",
    category: 'Droit du numérique',
    date: 'Juillet 2025',
    readTime: '8 min',
    extrait: "Les outils d'IA générative produisent du texte, des images, du code et de la musique en quelques secondes. Mais qui en est propriétaire ? Le droit d'auteur français face à l'intelligence artificielle — état des lieux et enjeux pratiques.",
    contenu: `**Le droit d'auteur français et l'exigence d'un auteur humain**

En droit français, la protection par le droit d'auteur est réservée aux œuvres de l'esprit portant l'empreinte de la personnalité de leur auteur — et cet auteur doit être une personne physique. Une œuvre entièrement générée par une intelligence artificielle, sans apport créatif humain, ne peut pas être protégée par le droit d'auteur.

Cette position est celle retenue par les juridictions françaises et par la doctrine majoritaire, en l'absence d'une législation spécifique sur le sujet. Elle soulève des questions pratiques majeures pour les entreprises qui utilisent ces outils dans leur activité.

**Quand l'humain apporte une contribution créative**

La question se complique lorsque l'œuvre résulte d'une collaboration entre l'humain et l'IA. Si l'utilisateur formule des instructions précises, sélectionne et modifie les sorties générées, et oriente le processus créatif de façon substantielle, il est possible que sa contribution soit qualifiée d'œuvre originale et donc protégeable.

En pratique, la frontière est ténue. Un prompt générique suivi d'une sélection parmi plusieurs propositions de l'IA ne suffira probablement pas à constituer une œuvre de l'esprit. En revanche, un travail éditorial approfondi sur les sorties de l'IA, combiné à des choix artistiques affirmés, pourrait emporter la qualification d'œuvre protégée.

**Les données d'entraînement : un angle souvent négligé**

Les modèles d'IA sont entraînés sur d'immenses corpus de données, dont une grande partie est protégée par le droit d'auteur. Le règlement européen sur l'IA (AI Act) et les jurisprudences en cours — notamment aux États-Unis contre OpenAI, Stability AI ou Midjourney — interrogent la licéité de cet entraînement sans autorisation des titulaires de droits.

Pour les entreprises, cela signifie qu'une création générée par IA peut être contestée non seulement parce qu'elle ne bénéficie pas de protection, mais aussi parce qu'elle pourrait être considérée comme une reproduction contrefaisante d'œuvres tiers intégrées dans les données d'entraînement.

**Recommandations pratiques pour les entreprises**

Documentez les prompts et les choix éditoriaux effectués sur les sorties IA. Vérifiez les conditions d'utilisation des outils IA que vous employez — certains revendiquent des droits sur les créations, d'autres les cèdent à l'utilisateur. Pour des créations destinées à être commercialisées ou à constituer l'identité visuelle de votre marque, faites-vous accompagner par un avocat pour évaluer les risques et sécuriser vos actifs.`,
  },
  {
    slug: 'rgpd-obligations-entreprises-conformite-2025',
    titre: 'RGPD : les obligations essentielles des entreprises en matière de données personnelles',
    category: 'Droit du numérique',
    date: 'Juin 2025',
    readTime: '6 min',
    extrait: "Sept ans après son entrée en vigueur, le RGPD reste une source de complexité pour de nombreuses entreprises. Tour d'horizon des obligations clés et des points de vigilance pour une mise en conformité effective.",
    contenu: `**Les fondements du RGPD**

Le Règlement Général sur la Protection des Données (RGPD), entré en vigueur le 25 mai 2018, encadre le traitement des données personnelles des personnes physiques résidant dans l'Union européenne. Il s'applique à toute entreprise traitant ces données, qu'elle soit établie en Europe ou non — dès lors qu'elle vise des résidents européens.

Le RGPD repose sur plusieurs principes fondamentaux : licéité, loyauté et transparence du traitement ; limitation des finalités ; minimisation des données ; exactitude ; limitation de la conservation ; intégrité et confidentialité ; et responsabilisation du responsable de traitement.

**Le registre des activités de traitement**

Toute entreprise doit tenir un registre des activités de traitement documentant l'ensemble des traitements de données personnelles réalisés : finalités, catégories de données, destinataires, durées de conservation, mesures de sécurité. Ce registre est la colonne vertébrale de la conformité RGPD et doit être maintenu à jour.

**Les bases légales du traitement**

Chaque traitement de données doit reposer sur une base légale : consentement de la personne concernée, exécution d'un contrat, respect d'une obligation légale, sauvegarde des intérêts vitaux, mission d'intérêt public, ou intérêt légitime du responsable de traitement.

Le consentement, souvent mis en avant, doit être libre, spécifique, éclairé et univoque — il ne peut pas être présumé ni résulter d'une case pré-cochée. Il peut par ailleurs être retiré à tout moment.

**Les droits des personnes et leur exercice**

Le RGPD confère aux personnes concernées plusieurs droits : accès à leurs données, rectification, effacement (droit à l'oubli), limitation du traitement, portabilité, opposition. Ces droits doivent être exercés dans un délai d'un mois, extensible à trois mois pour les demandes complexes.

L'entreprise doit se doter d'une procédure claire pour traiter ces demandes et être en mesure de répondre dans les délais — faute de quoi elle s'expose à des plaintes auprès de la CNIL et à des sanctions pouvant atteindre 4 % du chiffre d'affaires mondial annuel.

**Transferts hors UE et sous-traitants**

Tout transfert de données vers un pays tiers doit être encadré — décision d'adéquation, clauses contractuelles types, règles d'entreprise contraignantes. Les contrats avec les sous-traitants traitant des données pour votre compte doivent comporter les mentions obligatoires du RGPD.`,
  },
  {
    slug: 'contrefacon-numerique-defense-propriete-intellectuelle',
    titre: "Contrefaçon en ligne : comment défendre sa propriété intellectuelle à l'ère du numérique",
    category: 'Propriété intellectuelle',
    date: 'Mai 2025',
    readTime: '7 min',
    extrait: "Internet démultiplie les atteintes à la propriété intellectuelle : copies illicites, revente de marques, plagiat de contenus, usurpation d'identité commerciale. Les voies de recours disponibles et les réflexes à adopter face à la contrefaçon en ligne.",
    contenu: `**L'ampleur du phénomène de contrefaçon numérique**

La contrefaçon en ligne touche toutes les formes de propriété intellectuelle : droits d'auteur sur textes, images, musiques, logiciels ; marques reproduites sur des marketplaces ; modèles copiés ; noms de domaine déposés en bad faith. La rapidité de diffusion sur internet et l'anonymat relatif des contrefacteurs compliquent la protection mais n'y font pas obstacle.

**Constituer des preuves recevables**

Avant tout, il faut constituer des preuves. Un simple screenshot ne suffit pas : il doit être complété par un procès-verbal de constat d'huissier, qui atteste de l'existence et du contenu des pages litigieuses à un instant précis. Ce constat est indispensable pour agir en justice car les contenus en ligne peuvent disparaître rapidement.

Pour les atteintes à des droits d'auteur ou à des marques, la saisie-contrefaçon peut également être ordonnée par le juge : elle permet de pénétrer dans les locaux du contrefacteur, de saisir des documents et d'inventorier les produits litigieux — un outil puissant pour établir l'étendue du préjudice.

**Les mécanismes de notification et retrait**

Les hébergeurs et plateformes en ligne sont soumis à un régime de responsabilité conditionnelle : ils ne sont pas responsables des contenus illicites qu'ils hébergent s'ils n'en ont pas connaissance, mais ils doivent agir promptement dès notification. Une notification en bonne et due forme — précisant la nature du droit atteint, la localisation du contenu et l'identité du notifiant — doit entraîner le retrait rapide du contenu litigieux.

Pour les grandes plateformes (Amazon, Google, Meta, eBay…), des programmes de protection des droits existent — Brand Registry pour Amazon, Content ID pour YouTube — permettant de signaler les atteintes directement.

**L'action en contrefaçon et ses suites**

L'action en contrefaçon peut être engagée devant le tribunal judiciaire, sur le fondement civil (dommages-intérêts, cessation) ou pénal (pour les atteintes les plus graves). Les sanctions civiles tiennent compte des bénéfices réalisés par le contrefacteur et du préjudice moral subi par le titulaire.

Face à la multiplication des atteintes, une stratégie défensive globale — surveillance régulière, réaction rapide, constitution documentée des preuves — est préférable à une gestion au coup par coup.`,
  },
  {
    slug: 'conflits-associes-prevention-resolution-societe',
    titre: "Conflits entre associés : prévenir et résoudre les crises au sein de la société",
    category: 'Droit des sociétés',
    date: 'Avril 2025',
    readTime: '6 min',
    extrait: "Un conflit entre associés peut paralyser une entreprise en quelques semaines. Anticiper grâce à un pacte d'associés solide, identifier les mécanismes de sortie et recourir aux modes alternatifs de règlement des différends — le guide pratique.",
    contenu: `**Les sources de conflits entre associés**

Les tensions entre associés naissent rarement de nulle part : elles s'accumulent autour de désaccords stratégiques, de déséquilibres dans la contribution de chacun à la société, de différences de vision sur la distribution des bénéfices, ou de conflits personnels qui finissent par contaminer la gouvernance. Un blocage au niveau des organes de décision — assemblée générale, conseil d'administration — peut paralyser l'entreprise.

**Le rôle du pacte d'associés**

La meilleure protection contre les conflits est leur anticipation. Un pacte d'associés bien rédigé prévoit les mécanismes de résolution des blocages : clause de buy-sell (chaque associé peut proposer de racheter les parts de l'autre à un prix qu'il fixe, l'autre associé pouvant alors choisir d'acheter ou de vendre), clause d'arbitrage, procédure de désignation d'un médiateur ou d'un expert indépendant.

Les clauses de sortie — préemption, agrément, promesses de cession — permettent également d'organiser la sortie d'un associé dans des conditions prédéfinies, évitant une négociation sous tension.

**Les modes alternatifs de résolution des conflends**

Avant de saisir le juge, plusieurs voies amiables méritent d'être explorées : la médiation, conduite par un tiers neutre qui accompagne les parties vers un accord ; la conciliation ; ou l'arbitrage, si le pacte ou les statuts le prévoient. Ces modes sont plus rapides, moins coûteux et préservent davantage la confidentialité que la voie judiciaire.

**Les recours judiciaires en cas de blocage grave**

Si les voies amiables échouent, le juge dispose de plusieurs outils : la désignation d'un administrateur provisoire pour assurer la continuité de la gestion, l'exclusion judiciaire d'un associé en cas de mésentente grave affectant le fonctionnement de la société, et dans les cas extrêmes, la dissolution judiciaire pour mésentente.

L'action judiciaire est souvent longue et coûteuse — et aucune issue n'est garantie. Elle ne doit être envisagée qu'après épuisement des voies amiables et avec l'assistance d'un avocat capable d'évaluer la solidité de votre position.`,
  },
  {
    slug: 'concurrence-deloyale-identifier-agir-imitation-denigrement',
    titre: "Concurrence déloyale : identifier les actes illicites et agir efficacement",
    category: 'Concurrence déloyale',
    date: 'Mars 2025',
    readTime: '6 min',
    extrait: "Copie de produits, dénigrement, débauchage de personnel, parasitisme — les actes de concurrence déloyale prennent de nombreuses formes. Comment les identifier, les documenter et obtenir réparation.",
    contenu: `**La concurrence déloyale : un dommage injuste causé à un concurrent**

La concurrence est libre et licite. Ce qui est interdit, c'est d'utiliser des moyens contraires aux usages loyaux du commerce pour s'emparer de la clientèle d'un concurrent ou lui nuire. La concurrence déloyale repose sur le droit commun de la responsabilité civile : faute, préjudice, lien de causalité. Il n'est pas nécessaire d'être titulaire d'un droit de propriété intellectuelle pour agir.

**Les principales catégories d'actes déloyaux**

La confusion vise à créer une méprise dans l'esprit de la clientèle entre deux entreprises ou deux produits — par l'imitation de la présentation, des couleurs, de l'emballage, du nom commercial ou des éléments distinctifs d'un concurrent. Elle peut s'accompagner ou non d'une contrefaçon de droits de propriété intellectuelle.

Le dénigrement consiste à jeter le discrédit sur un concurrent ou ses produits — par des affirmations inexactes, des insinuations malveillantes ou la divulgation d'informations confidentielles dans l'intention de nuire. Les critiques formulées dans un cadre purement informatif peuvent être licites ; celles qui visent à détruire la réputation commerciale d'un concurrent ne le sont pas.

Le parasitisme est le fait de profiter indûment, sans bourse délier, des investissements, du savoir-faire ou de la notoriété d'un concurrent — sans nécessairement créer de confusion. C'est une catégorie plus large, utilisée notamment contre ceux qui copient les méthodes, les outils ou l'image d'une entreprise sans en avoir assumé les coûts.

**La preuve et les modes d'action**

Comme pour toute action en responsabilité civile, la preuve de la faute, du préjudice et du lien de causalité incombe au demandeur. Il convient donc de constituer dès que possible un dossier de preuves : constats d'huissier, captures d'écran datées, courriers, témoignages, comparatifs de produits.

L'action en concurrence déloyale se prescrit par cinq ans à compter du jour où la victime a connu ou aurait dû connaître les faits lui permettant d'exercer son droit. Elle peut être accompagnée d'une demande d'interdiction sous astreinte et d'une demande de publication du jugement.`,
  },
]
