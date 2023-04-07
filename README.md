## Tamagotchi Return to Mysterious Island
- Maquette figma : https://www.figma.com/file/yPKUt3e2S3yVywUlwlbVwy/Tamagotchi?node-id=0-1&t=qtR5WOmz2vpN4Fat-0
- Trello : https://trello.com/b/KUX28DrQ/d%C3%A9veloppement-du-projet


# Contexte du projet
- Dans le cadre du salon du jeu vidéo rétro, la marque Bandai souhaite faire un clin d'oeil à l’un de ses succès des années 90 : le Tamagochi !

- Vous devrez faire appel à votre créativité ce tamagotchi sur le thème du jeu vidéo en point & click "Retour sur l'île mystérieuse" sorti en 2005 par la boite française Kheops Studio, néanmoins vous devrez satisfaire les contraintes techniques et fonctionnelles fournies par Bandai dans le cahier des charges.


## Cahier des charges

# Fonctionnel
- L’utilisateur arrive sur un écran d’accueil, celui-ci contient un formulaire pour saisir le nom de son compagnon et sélectionner le type de compagnon qu’il souhaite jouer. Il lance le jeu à l’aide d’un bouton “commercer”.

- Vos compagnons ont trois jauges indiquant le niveau d’un besoin (par exemple : bonheur, soif et faim. Vous êtes libre de changer l’intitulé des jauges), chaque compagnon à au moins une de ces trois jauges qui lui est propre.

- Le niveau des jauges baisse automatiquement et chaque jauge dispose d’un bouton pour l’alimenter. Lorsque les trois jauges tombent à zéro l’utilisateur à perdu.

# Technique
- Votre jeu comporte à minima une classe parente et deux classes enfants qui l'étendent. Les compagnons à disposition de l’utilisateur sont vos classes enfants, exemple :
* Classe parent (l’utilisateur ne peut pas la jouer) : Character
* Classes enfants (l’utilisateur peut les jouer) : Nina et Jep

- Les jauges du compagnon commencent à 100% lorsque le jeu démarre et diminuent de la manière suivante :
* diminue de 10% entre 50% et 100% de point de vie
* diminue de 6% entre 15% et 50% de point de vie
* diminue de 2% entre 0% et 15% de point de vie

- L’utilisateur peut alimenter les jauges à l’aide d’un bouton qui augmente la jauge de 10%, la jauge ne peut pas dépasser les 100%.

# Critères de performance
- Le site respecte le cahier des charges
- Les fonctionnalités attendues ne produisent pas d’erreurs
- Le site est responsive est s’adapte à un maximum d’écran
- L'interface est conforme à la maquette
- Les fichiers et assets sont organisés
- La page est fonctionnelle
- Respect des bonnes pratiques de nommages
- Respect des bonnes pratiques d’indentation
- Respect des bonnes pratiques de sémantique


