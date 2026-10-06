# Carnet de bord · J2

Binôme : bXX · Membres : … · Nos réglages sont dans `atelier/cahier-personnel.json` : ne les recopiez pas ici.

## Mon positionnement (chacun de vous deux)

Pour chaque notion, chacun écrit « à l'aise » ou « à renforcer ». Ce n'est ni évalué ni classé : c'est votre point de départ pour le bilan individuel de fin de module.

| Notion | Membre 1 : … | Membre 2 : … |
|---|---|---|
| Structure HTML | | |
| CSS et responsive | | |
| JavaScript | | |
| DOM et événements | | |
| Git | | |
| Tests | | |

Chacun, en une phrase, son objectif personnel pour J2 et J3.

Membre 1 :

Membre 2 :

## R1 · Les tests automatisés

Les tests rouges du départ, et ce que vous en avez fait :

| Test rouge | Cause trouvée (une phrase) | Fichier | Message du commit `fix:` |
|---|---|---|---|
| `refuse le vide et les espaces seuls` | La vérification rejetait la chaîne vide avant de retirer les espaces. | `atelier/public/js/brain.js` | `fix: refuser les messages composés d'espaces` |
| `accepte 320 caractères et refuse 321` | La limite de l'exemple ne correspondait pas à notre cahier et le contrôle utilisait un seuil fixe. | `atelier/public/js/brain.js` | `fix: respecter la limite configurée` |
| `mesure la longueur après avoir retiré les espaces` | Le seuil fixe empêchait d'appliquer correctement notre limite après `trim()`. | `atelier/public/js/brain.js` | `fix: respecter la limite configurée` |
| `ignore la casse et les espaces autour` | `replyTo` ignorait la casse, mais ne retirait pas les espaces avant de comparer. | `atelier/public/js/brain.js` | `fix: ignorer casse et espaces des commandes` |
| `reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour` | Les espaces autour du mot empêchaient de trouver sa réponse personnalisée. | `atelier/public/js/brain.js` | `fix: ignorer casse et espaces des commandes` |
| `répond à une phrase inconnue par un repli distinct` | Une phrase inconnue recevait la même réponse que la commande `aide`. | `atelier/public/js/brain.js` | `fix: distinguer le repli des réponses connues` |
| `view.js affiche du texte et ne décide pas des réponses` | `view.js` insérait les messages avec `innerHTML` au lieu de les afficher comme du texte. | `atelier/public/js/view.js` | `fix: afficher les messages comme du texte` |

Avec l'agent : aucune proposition refusée.

Contrôle final : 15 tests du contrat sur 15 réussis ; `npm test` : 44 réussis, 0 échec. Le contrôle `git diff --stat depart -- tests cahier-personnel.json` ne signale aucun changement. Dans l'application, `<b>gras</b>` s'affiche littéralement, chevrons compris.

Pour aller plus loin : le nom renommé par votre commit `refactor:`, et pourquoi le nouveau est plus clair.

## R2 · Documenter le projet

Vos trois documents sont dans `atelier` : `README.md`, `SPEC.md` et `AGENTS.md`. Rien à recopier ici.

Pour aller plus loin, avec l'agent, les demandes du formateur :

| Demande | Ce qu'a fait l'agent | Votre décision | Règle d'`AGENTS.md` concernée (ou ajoutée) |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

## R3 · Premiers tests unitaires

| À remplir | Votre réponse |
|---|---|
| Fonction tirée | |
| Le rouge vu (message exact) | |
| Identifiant du commit `test:` | |
| Identifiant du commit `feat:` | |
| Casse volontaire : la ligne changée | |
| Casse volontaire : le test devenu rouge | |
| Pour aller plus loin : la deuxième fonction | |

Les critères C1 à C5 de votre fonction, recopiés de la fiche :

## R4 · La revue de code

| Patch | Accepté ou refusé | Fichier et ligne | Raison |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

Pour aller plus loin : le patch que vous avez corrigé, et ce que vous avez changé.

## Fin de journée

Chacun, une phrase : ce que vous savez faire ce soir et que vous ne saviez pas faire ce matin. Relisez votre positionnement : une notion est-elle passée de « à renforcer » à « à l'aise » ?
