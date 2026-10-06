# Conventions du projet

## Nommage

- Une fonction porte un verbe qui décrit son action, comme `validateMessage`.
- Une constante non réassignée porte un nom en majuscules avec des mots séparés par `_`, comme `LIMITE`.
- Un fichier porte un nom court qui décrit son rôle, comme `brain.js` ou `view.js`.
- Un commit utilise un préfixe qui décrit le changement (`fix:`, `docs:`, `test:`, `feat:` ou `refactor:`), suivi d'un résumé précis.

## Interdits

- Ne modifie jamais les tests existants de `tests/contrat/` ni `browser/contrat.spec.js`. Si un test semble incorrect, arrête-toi et explique pourquoi.
- Ne lis, ne modifies et ne demandes jamais les valeurs de `cahier-personnel.json` ; ce fichier contient les réglages privés du binôme.
- N'affiche jamais un message utilisateur avec `innerHTML`, `outerHTML` ou `insertAdjacentHTML` ; utilise du texte avec `textContent` ou des nœuds texte.
- Ne mélange pas les responsabilités : `brain.js` décide des règles, `app.js` relie les interactions et `view.js` affiche les messages.
- N'ajoute ni ne mets à jour de dépendance sans demande explicite.
