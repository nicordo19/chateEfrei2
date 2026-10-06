# Cap Web

Cap Web est une petite application de discussion avec un assistant qui répond selon des règles écrites en JavaScript.
On peut lui envoyer des commandes comme « salut », « aide » ou « test », ainsi que deux mots personnalisés.
L'application conserve l'historique de la conversation dans le navigateur.

## Installer et lancer

Il faut Node.js 24.20 ou une version plus récente. Depuis le dossier `atelier`, installez les dépendances, puis démarrez l'application :

```sh
npm ci
npm start
```

Ouvrez http://127.0.0.1:3000 dans le navigateur. Pour arrêter le serveur, faites `Ctrl+C`. Pour lancer les tests, depuis `atelier`, exécutez :

```sh
npm test
```

## Modules JavaScript

- `public/js/brain.js` valide les messages et choisit les réponses à partir des règles et des mots personnalisés.
- `public/js/app.js` relie le formulaire aux fonctions de validation, met à jour l'historique et demande son affichage.
- `public/js/view.js` construit les lignes de conversation et affiche les messages comme du texte.
