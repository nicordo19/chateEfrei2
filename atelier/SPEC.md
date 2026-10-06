# Spécification de Cap Web

1. Quand le message n'est pas du texte, Cap Web le refuse et fournit une erreur non vide. Vérifié par : test « refuse ce qui n’est pas du texte, avec un message d’erreur » dans `tests/contrat/brain.contrat.test.js`.

2. Quand le message est vide ou ne contient que des espaces, Cap Web le refuse avec une erreur. Vérifié par : test « refuse le vide et les espaces seuls » dans `tests/contrat/brain.contrat.test.js`.

3. Quand le message contient des espaces autour, Cap Web les retire avant de le valider et applique la limite configurée dans le cahier personnel au texte nettoyé. Vérifié par : tests « accepte un message et retire les espaces autour » et « mesure la longueur après avoir retiré les espaces », ainsi que le test paramétré qui accepte la limite et refuse le caractère suivant, dans `tests/contrat/brain.contrat.test.js`.

4. Quand une commande connue est envoyée avec des majuscules ou des espaces autour, Cap Web donne la même réponse que pour la commande écrite normalement. Vérifié par : test « ignore la casse et les espaces autour » dans `tests/contrat/brain.contrat.test.js`.

5. Quand on envoie l'un des deux mots personnalisés du cahier, Cap Web donne sa réponse dédiée, différente des réponses aux autres commandes reconnues. Vérifié par : test « reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour » dans `tests/contrat/brain.contrat.test.js`.
