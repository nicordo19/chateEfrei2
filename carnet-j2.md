# Carnet de bord · J2

Binôme : b06 · Membres : Nicolas Poiraud (travail solo sur cet exercice) · Nos réglages sont dans `atelier/cahier-personnel.json` : ne les recopiez pas ici.

## Mon positionnement

Pour chaque notion, chacun écrit « à l'aise » ou « à renforcer ». Ce n'est ni évalué ni classé : c'est votre point de départ pour le bilan individuel de fin de module.

| Notion            | Membre 1 : Nicolas Poiraud | Membre 2 : Travail solo |
| ----------------- | -------------------------- | ----------------------- |
| Structure HTML    | à l'aise                   | —                       |
| CSS et responsive | à l'aise                   | —                       |
| JavaScript        | à l'aise, mais à renforcer | —                       |
| DOM et événements | à renforcer                | —                       |
| Git               | à l'aise, mais à renforcer | —                       |
| Tests             | à l'aise, mais à renforcer | —                       |

Chacun, en une phrase, son objectif personnel pour J2 et J3.

Membre 1 : S'améliorer dans les tests.

Membre 2 : Travail solo sur cet exercice ; l'objectif est de compléter les tâches individuellement et de valider les résultats sans binôme.

## R1 · Les tests automatisés

Les tests rouges du départ, et ce que vous en avez fait :

| Test rouge                                                                                       | Cause trouvée                                                                                      | Fichier                      | Message du commit `fix:`                        |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------- |
| `refuse le vide et les espaces seuls`                                                            | La vérification rejetait la chaîne vide avant de retirer les espaces.                              | `atelier/public/js/brain.js` | `fix: refuser les messages composés d'espaces`  |
| `accepte 320 caractères et refuse 321`                                                           | La limite de l'exemple ne correspondait pas à notre cahier et le contrôle utilisait un seuil fixe. | `atelier/public/js/brain.js` | `fix: respecter la limite configurée`           |
| `mesure la longueur après avoir retiré les espaces`                                              | Le seuil fixe empêchait d'appliquer correctement notre limite après `trim()`.                      | `atelier/public/js/brain.js` | `fix: respecter la limite configurée`           |
| `ignore la casse et les espaces autour`                                                          | `replyTo` ignorait la casse, mais ne retirait pas les espaces avant de comparer.                   | `atelier/public/js/brain.js` | `fix: ignorer casse et espaces des commandes`   |
| `reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour` | Les espaces autour du mot empêchaient de trouver sa réponse personnalisée.                         | `atelier/public/js/brain.js` | `fix: ignorer casse et espaces des commandes`   |
| `répond à une phrase inconnue par un repli distinct`                                             | Une phrase inconnue recevait la même réponse que la commande `aide`.                               | `atelier/public/js/brain.js` | `fix: distinguer le repli des réponses connues` |
| `view.js affiche du texte et ne décide pas des réponses`                                         | `view.js` insérait les messages avec `innerHTML` au lieu de les afficher comme du texte.           | `atelier/public/js/view.js`  | `fix: afficher les messages comme du texte`     |

Avec l'agent : aucune proposition refusée.

Contrôle final : 15 tests du contrat sur 15 réussis ; `npm test` : 44 réussis, 0 échec. Le contrôle `git diff --stat depart -- tests cahier-personnel.json` ne signale aucun changement. Dans l'application, `<b>gras</b>` s'affiche littéralement, chevrons compris.

Pour aller plus loin : aucun refactor supplémentaire n'a été fait dans cette session ; le code du contrat et le cœur du projet restent inchangés après la validation finale.

## R2 · Documenter le projet.

Les trois documents sont présents dans `atelier` : `README.md`, `SPEC.md` et `AGENTS.md`.

Pour aller plus loin, avec l'agent, les demandes du formateur :

| Demande | Ce qu'a fait l'agent                                                                      | Votre décision                                                                             | Règle d'`AGENTS.md` concernée                                                                                |
| ------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| 1       | Aucune demande d'agent n'a été enregistrée / traitée dans ce dépôt pendant cette session. | Non applicable dans ce contexte : la documentation a été écrite sans intervention d'agent. | `AGENTS.md` a été respecté comme source de convention, sans demande piège à traiter.                         |
| 2       | Aucune demande d'agent n'a été enregistrée / traitée dans ce dépôt pendant cette session. | Non applicable dans ce contexte : la documentation a été écrite sans intervention d'agent. | Même règle : le projet ne doit pas modifier de fichiers interdits ni échanger des réglages privés.           |
| 3       | Aucune demande d'agent n'a été enregistrée / traitée dans ce dépôt pendant cette session. | Non applicable dans ce contexte : la documentation a été écrite sans intervention d'agent. | Même règle : `brain.js`, `app.js`, `view.js` restent responsables de leur rôle et les tests restent intacts. |

## R3 · Premiers tests unitaires

| À remplir                                   | Votre réponse                                                                                                         |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Fonction tirée                              | `synonyme(message)`                                                                                                   |
| Le rouge vu (message exact)                 | `The requested module '../public/js/brain.js' does not provide an export named 'synonyme'`                            |
| Identifiant du commit `test:`               | `55a9740`                                                                                                             |
| Identifiant du commit `feat:`               | `663a853`                                                                                                             |
| Casse volontaire : la ligne changée         | Dans `synonyme`, remplacer temporairement le dernier `return texte;` par `return "";`, puis remettre `return texte;`. |
| Casse volontaire : le test devenu rouge     | `C4 : normalise les autres messages sans changer leur sens` (`'' !== 'météo'`).                                       |
| Pour aller plus loin : la deuxième fonction | Aucune deuxième fonction n'a été traitée dans cette session.                                                          |

Les critères C1 à C5 de notre fonction, recopiés de la fiche :

- C1 : `'coucou'`, `'hello'` et `'bonsoir'` donnent `'salut'`.
- C2 : `'help'` et `'sos'` donnent `'aide'`.
- C3 : la casse et les espaces autour ne comptent pas ; `'  HELLO '` donne `'salut'`.
- C4 : un autre message revient en minuscules, sans les espaces autour ; `'  Météo '` donne `'météo'`.
- C5 : une valeur non textuelle (`undefined`, `null` ou `42`) donne `''`, sans erreur.

## R4 · La revue de code

| Patch | Accepté ou refusé | Fichier et ligne                                                     | Raison                                                                                                                                                                                                                                                         |
| ----- | ----------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Accepté           | `abordage/patch-1.patch`, `public/js/brain.js`                       | Le patch ajoute bien une réponse dédiée à « merci » en gardant la logique de comparaison et le contrat de validité intact ; les tests verts confirment le comportement attendu.                                                                                |
| 2     | Refusé            | `abordage/essai-2/tests/contrat/brain.contrat.test.js`, lignes 66-85 | Le patch change le contrat existant pour supprimer le contrôle sur les espaces autour : il passe de `replyTo('  SALUT ')` à `replyTo('SALUT')`, ce qui affaiblit la protection contre les espaces et masque le vrai bug.                                       |
| 3     | Refusé            | `abordage/essai-3/public/js/view.js`, lignes 4-15                    | Le code convertit le texte en HTML brut avec `replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')` puis `createContextualFragment(...)`, ce qui injecte du HTML au lieu de rester sur du texte affiché sans danger ; cela viole la règle “aucune injection HTML”. |

Pour aller plus loin : aucun patch supplémentaire n'a été corrigé dans cette session ; la revue de code s'est limitée aux trois patchs fournis et à leur décision.

## Fin de journée

Chacun, une phrase : ce que vous savez faire ce soir et que vous ne saviez pas faire ce matin. Relisez votre positionnement : une notion est-elle passée de « à renforcer » à « à l'aise » ?

Membre 1 : J’ai appris à lire un test rouge, à corriger la cause dans le code sans toucher au contrat, et à vérifier la cohérence d’un patch avant de l’accepter.

Membre 2 : Travail solo sur cet exercice ; je valide les tâches individuellement et je vérifie les résultats sans binôme.

## J3 · Étape 1 : le troisième mot

Prédiction reconstituée à partir du texte d'origine : après l'ajout d'un troisième mot, « aide » annoncerait encore deux mots, car ce nombre était écrit en dur.

Première mesure Lighthouse : accessibilité 96/100 (le rapport affiché contient aussi Performance 100, Bonnes pratiques 100 et SEO 90).

Mesure avec uniquement la catégorie Accessibilité : 96/100. Alerte présente avant le test : « Background and foreground colors do not have a sufficient contrast ratio. »

Test temporaire sans le label : accessibilité 89/100. Alerte : « Form elements do not have associated labels ». Le label a ensuite été remis dans `atelier/public/index.html`.
