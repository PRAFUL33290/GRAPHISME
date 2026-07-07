const HISTOIRES = [
  {
    id: "intro",
    title: "L'histoire des grands styles graphiques",
    era: null,
    styleNum: null,
    paragraphs: [
      "Chaque style graphique est le reflet d'une époque, d'une culture ou d'un mouvement artistique. Les affiches de festival que nous créons aujourd'hui s'inspirent de plus d'un siècle d'innovations, de révolutions artistiques et de changements technologiques.",
      "Comprendre l'origine de ces styles permet non seulement de mieux les utiliser, mais aussi de raconter une histoire à travers une création graphique — et de donner encore plus de personnalité à l'affiche du Festival Arc-en-Ciel."
    ]
  },
  {
    id: "bauhaus",
    title: "Le Bauhaus",
    era: "1919",
    year: 1919,
    styleNum: 4,
    paragraphs: [
      "Le Bauhaus est né en Allemagne en 1919, sous l'impulsion de l'architecte Walter Gropius. Après la Première Guerre mondiale, son ambition était de réunir les arts, l'artisanat et l'industrie afin de créer un design à la fois esthétique et fonctionnel.",
      "Le mouvement rejette les décorations inutiles et privilégie les formes géométriques simples : cercles, carrés, triangles et lignes. Les couleurs primaires (rouge, bleu et jaune), associées au noir et au blanc, deviennent sa signature.",
      "Aujourd'hui encore, le Bauhaus influence le graphisme moderne, l'architecture, le mobilier et même les interfaces numériques."
    ]
  },
  {
    id: "swiss",
    title: "Le Swiss Design",
    era: "Années 1950",
    year: 1957,
    styleNum: 5,
    paragraphs: [
      "Également appelé Style International, le Swiss Design apparaît en Suisse après la Seconde Guerre mondiale.",
      "Des graphistes comme Josef Müller-Brockmann souhaitent créer une communication universelle, claire et lisible. Ils développent les célèbres grilles de mise en page, qui permettent d'organiser parfaitement les textes et les images.",
      "La police Helvetica, créée en 1957, devient rapidement l'emblème de ce mouvement. Le Swiss Design est aujourd'hui omniprésent dans les affiches culturelles, les identités visuelles et les interfaces numériques."
    ]
  },
  {
    id: "pop-art",
    title: "Le Pop Art",
    era: "Années 1950–1960",
    year: 1955,
    styleNum: 6,
    paragraphs: [
      "Le Pop Art naît au Royaume-Uni avant de devenir un phénomène mondial aux États-Unis. Les artistes souhaitent rapprocher l'art de la culture populaire : publicité, bandes dessinées, cinéma et objets du quotidien deviennent des œuvres d'art.",
      "Des figures comme Roy Lichtenstein reprennent les codes des comics américains avec leurs points Benday, leurs bulles de dialogue et leurs couleurs éclatantes, tandis qu'Andy Warhol transforme des produits de consommation en icônes artistiques.",
      "Le Pop Art symbolise une époque optimiste, colorée et tournée vers la société de consommation — parfait pour une affiche de festival qui veut faire le buzz !"
    ]
  },
  {
    id: "vintage",
    title: "Le Vintage",
    era: "Années 1920–1960",
    year: 1925,
    styleNum: 7,
    paragraphs: [
      "Le style vintage ne correspond pas à un mouvement artistique précis. Il désigne aujourd'hui des créations inspirées des affiches anciennes, principalement entre les années 1920 et 1960.",
      "À cette époque, les affiches étaient souvent illustrées à la main et imprimées avec des techniques limitées, donnant naissance à des couleurs légèrement passées et à des textures caractéristiques.",
      "Le vintage évoque la nostalgie, l'authenticité et le savoir-faire d'autrefois — comme une vieille affiche de fête foraine retrouvée dans un grenier."
    ]
  },
  {
    id: "flat",
    title: "Le Flat Design",
    era: "Années 2000",
    year: 2007,
    styleNum: 3,
    paragraphs: [
      "Le Flat Design apparaît avec l'essor des smartphones. Les entreprises technologiques cherchent à simplifier leurs interfaces afin qu'elles soient plus lisibles sur les écrans.",
      "Popularisé par Microsoft avec Windows Phone puis largement adopté par Google et Apple, ce style abandonne les effets de relief pour privilégier des formes simples, des aplats de couleurs et des icônes épurées.",
      "Il est aujourd'hui l'un des styles les plus utilisés dans les applications et les sites web — et il donne un look moderne et lisible à n'importe quelle affiche de festival."
    ]
  },
  {
    id: "minimalisme",
    title: "Le Minimalisme",
    era: "20e siècle",
    year: 1960,
    styleNum: 1,
    paragraphs: [
      "Le minimalisme trouve ses origines dans plusieurs courants artistiques du 20e siècle, notamment le Bauhaus et le design japonais. Son principe est simple : retirer tout ce qui est inutile afin de ne conserver que l'essentiel.",
      "L'espace vide devient un véritable élément graphique. Chaque couleur, chaque ligne et chaque mot sont soigneusement réfléchis.",
      "Le minimalisme est aujourd'hui associé au luxe, à l'élégance et à la modernité — idéal pour une affiche de festival chic et épurée."
    ]
  },
  {
    id: "maximalisme",
    title: "Le Maximalisme",
    era: "Contemporain",
    year: 2015,
    styleNum: 2,
    paragraphs: [
      "En réaction au minimalisme, le maximalisme revendique l'abondance. Ce courant mélange couleurs, textures, motifs et typographies pour créer des compositions volontairement riches et expressives.",
      "Il puise ses inspirations dans la publicité, les réseaux sociaux, les festivals et les cultures populaires du monde entier.",
      "Son objectif est d'attirer immédiatement le regard — exactement ce qu'on attend d'une affiche de festival qui veut faire la fête !"
    ]
  },
  {
    id: "synthwave",
    title: "Le Synthwave",
    era: "Années 1980 revisitées",
    year: 2005,
    styleNum: 8,
    paragraphs: [
      "Le Synthwave apparaît dans les années 2000, mais il rend hommage aux années 1980. Il s'inspire des films de science-fiction, des premiers jeux vidéo, des clips musicaux et des séries télévisées de cette décennie.",
      "Les soleils couchants, les néons, les grilles futuristes et les voitures de sport rappellent immédiatement l'univers de Miami Vice, Tron ou encore les anciennes bornes d'arcade.",
      "Parfait pour un festival nocturne aux allures rétro-futuristes."
    ]
  },
  {
    id: "cyberpunk",
    title: "Le Cyberpunk",
    era: "Années 1980",
    year: 1982,
    styleNum: 9,
    paragraphs: [
      "Le Cyberpunk est né dans la littérature de science-fiction des années 1980. Des auteurs comme William Gibson imaginent des mégapoles dominées par les technologies, les néons et les multinationales.",
      "Le cinéma popularise ensuite cette esthétique avec des œuvres comme Blade Runner, qui devient une référence incontournable.",
      "Aujourd'hui, le Cyberpunk mélange pluie, hologrammes, enseignes lumineuses et architectures gigantesques — une ambiance parfaite pour un festival électro de nuit."
    ]
  },
  {
    id: "vaporwave",
    title: "Le Vaporwave",
    era: "Années 2010",
    year: 2012,
    styleNum: 10,
    paragraphs: [
      "Le Vaporwave apparaît sur Internet au début des années 2010. Il détourne avec humour la culture numérique des années 1980 et 1990 : VHS, premiers ordinateurs, musiques électroniques ralenties et statues antiques deviennent ses symboles.",
      "Ce style mélange nostalgie, ironie et esthétique rétro-futuriste dans des couleurs pastel dominées par le rose, le violet et le cyan."
    ]
  },
  {
    id: "street-art",
    title: "Le Street Art",
    era: "Années 1970",
    year: 1975,
    styleNum: 18,
    paragraphs: [
      "Le Street Art naît dans les rues de grandes villes comme New York dans les années 1970. Les artistes utilisent les murs comme supports d'expression, souvent pour transmettre des messages sociaux ou politiques.",
      "Les bombes de peinture, les pochoirs et les grandes fresques deviennent rapidement des signatures visuelles. Aujourd'hui, le Street Art est reconnu comme une véritable discipline artistique — et il donne un côté urbain et rebelle à une affiche de festival."
    ]
  },
  {
    id: "collage",
    title: "Le Collage",
    era: "Début 20e siècle",
    year: 1910,
    styleNum: 17,
    paragraphs: [
      "Le collage apparaît au début du 20e siècle avec les artistes cubistes comme Pablo Picasso et Georges Braque. Ils commencent à intégrer des morceaux de journaux, de papiers et de tissus directement dans leurs œuvres.",
      "Plus tard, les mouvements dadaïstes et surréalistes développent cette technique pour créer des compositions originales. Le collage numérique actuel reprend exactement ce principe avec des photos, textures et papiers superposés."
    ]
  },
  {
    id: "cartoon",
    title: "Le Cartoon",
    era: "Début 20e siècle",
    year: 1905,
    styleNum: 11,
    paragraphs: [
      "Le style cartoon est directement issu de l'animation américaine du début du 20e siècle. Des studios comme Disney, Warner Bros. et Hanna-Barbera développent des personnages aux formes simples, aux expressions exagérées et aux couleurs vives.",
      "Ce style inspire aujourd'hui les univers destinés aux familles et aux enfants — parfait pour un festival familial et joyeux."
    ]
  },
  {
    id: "bd",
    title: "La Bande Dessinée",
    era: "20e siècle",
    year: 1950,
    styleNum: 12,
    paragraphs: [
      "La bande dessinée moderne se développe au cours du 20e siècle, notamment en Belgique, en France et aux États-Unis. Les cases, les bulles, les onomatopées et les contours noirs deviennent rapidement des codes universels.",
      "Les affiches inspirées de la BD reprennent cette narration visuelle pour donner du mouvement et raconter une histoire en une seule image."
    ]
  },
  {
    id: "manga",
    title: "Le Manga",
    era: "Après-guerre",
    year: 1952,
    styleNum: 13,
    paragraphs: [
      "Le manga trouve ses racines dans les estampes japonaises, mais prend sa forme actuelle après la Seconde Guerre mondiale grâce à Osamu Tezuka, souvent surnommé « le père du manga moderne ».",
      "Les personnages expressifs, les effets de vitesse et les cadrages spectaculaires deviennent la marque de fabrique du style. Aujourd'hui, le manga influence largement le cinéma, les jeux vidéo et le graphisme dans le monde entier."
    ]
  },
  {
    id: "pixar",
    title: "Le style Pixar (3D)",
    era: "Années 1990",
    year: 1995,
    styleNum: 14,
    paragraphs: [
      "Le style Pixar naît avec « Toy Story » en 1995, premier long-métrage entièrement réalisé en images de synthèse. Le studio impose une animation 3D aux formes rondes et chaleureuses, très éloignée du réalisme.",
      "La lumière est travaillée comme au cinéma, les personnages ont de grands yeux expressifs, et chaque texture (peau, tissu, matière) est soignée pour créer de l'attachement.",
      "Ce style est aujourd'hui associé aux films d'animation familiaux — parfait pour une affiche de festival chaleureuse et pleine de vie."
    ]
  },
  {
    id: "aquarelle",
    title: "L'Aquarelle",
    era: "Depuis le 18e siècle",
    year: 1750,
    styleNum: 15,
    paragraphs: [
      "L'aquarelle est une technique de peinture utilisée depuis plusieurs siècles. Très populaire à partir du 18e siècle, elle permet de créer des œuvres légères, transparentes et lumineuses.",
      "En graphisme, elle apporte une touche artisanale et poétique, souvent associée à la nature, au bien-être et aux événements culturels — comme un festival en plein air."
    ]
  },
  {
    id: "line-art",
    title: "Le Line Art",
    era: "Classique",
    year: 1850,
    styleNum: 16,
    paragraphs: [
      "Le Line Art puise ses origines dans le dessin technique, les gravures et les illustrations botaniques. Son principe est de représenter un sujet uniquement avec des lignes, sans ombrages ni couleurs.",
      "Très apprécié aujourd'hui dans le design contemporain, il évoque la simplicité, l'élégance et le raffinement."
    ]
  },
  {
    id: "nature",
    title: "Le style Nature",
    era: "Depuis les années 1970",
    year: 1976,
    styleNum: 19,
    paragraphs: [
      "Avec la montée des préoccupations environnementales à partir des années 1970, de nombreux graphistes développent des univers mettant en avant la forêt, les montagnes, les matières naturelles et les couleurs végétales.",
      "Ce style traduit des valeurs de respect de l'environnement, de convivialité et de développement durable — idéal pour un festival en pleine nature."
    ]
  },
  {
    id: "premium",
    title: "Le style Premium",
    era: "Luxe contemporain",
    year: 2018,
    styleNum: 20,
    paragraphs: [
      "Le style premium s'inspire du design du luxe, de la haute couture et des grandes maisons de joaillerie. Le noir profond, les dorures, les typographies élégantes et les finitions raffinées rappellent les univers de l'hôtellerie de luxe, des montres prestigieuses ou des événements VIP.",
      "L'objectif est de transmettre immédiatement une sensation d'exclusivité et de qualité — comme l'affiche d'un festival haut de gamme."
    ]
  }
];

const HISTOIRE_CONCLUSION_PARAS = [
  "L'histoire du graphisme, c'est une succession de mouvements artistiques, de révolutions culturelles et d'innovations techniques.",
  "Chaque style raconte une époque et porte des valeurs qui lui sont propres. Aujourd'hui, les graphistes puisent librement dans ces influences pour créer des affiches originales.",
  "Connaître ces origines, c'est choisir le style le plus adapté à ton message — et donner au Festival Arc-en-Ciel l'ambiance qui lui correspond le mieux."
];