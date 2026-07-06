# Festival Arc-en-Ciel — 20 styles graphiques

Page pédagogique pour un atelier de graphisme destiné aux enfants. Le principe : imaginer
l'affiche d'un même festival (« Festival Arc-en-Ciel ») dans 20 styles graphiques différents,
pour comprendre qu'une même idée peut être racontée de façons très variées selon le style choisi.

## Utilisation

Ouvre simplement `index.html` dans un navigateur (aucune installation nécessaire).

La page contient :
- Le brief commun du festival, donné à tous les groupes.
- Les 20 cartes de styles (Minimaliste, Maximaliste, Bauhaus, Pop Art, Vintage, Cyberpunk...),
  chacune avec une explication simple et la consigne complète à utiliser pour créer l'affiche.
- Un outil pour répartir aléatoirement les styles entre les groupes de l'atelier.

## Ajouter les images des enfants

Chaque carte affiche une case vide tant qu'aucune image n'est présente. Pour ajouter une
création, place le fichier dans le dossier `images/` avec le nom indiqué sous chaque carte,
par exemple :

```
images/01-minimaliste.jpg
images/02-maximaliste.jpg
images/06-pop-art.jpg
...
images/20-luxe.jpg
```

Dès qu'un fichier portant le bon nom est ajouté, l'image apparaît automatiquement sur la carte
correspondante (formats `.jpg`, `.jpeg` ou `.png` : dans ce dernier cas, renomme le fichier en
`.jpg` ou modifie l'extension dans `script.js`, fonction `renderGrid`).

## Structure du projet

```
index.html    Structure de la page
style.css     Design (couleurs, cartes, animations)
script.js     Données des 20 styles + interactions (galerie, mélangeur de groupes)
images/       Dossier où déposer les affiches créées par les enfants
```
