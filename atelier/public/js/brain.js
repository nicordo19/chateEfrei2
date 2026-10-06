// Cap Web — cerveau à règles. Fonctions pures : aucun accès à la page.

// Vos réglages : recopiez ici la limite et les deux mots de votre cahier-personnel.json.
// Les valeurs écrites ci-dessous sont celles de l'exemple (240, boussole, refuge), pas les vôtres.
export const LIMITE = 320;

const MOTS = {
  potagé:
    "Pour débuter un potager, commence par une petite surface et choisis des plantes adaptées à son exposition.",
  arrosage:
    "Vérifie l’humidité de la terre avant d’arroser et adapte la quantité d’eau aux besoins de tes plantes..",
};

const liste = Object.keys(MOTS)
  .map((mot) => `« ${mot} »`)
  .join(" et ");

const REPONSES = {
  salut:
    "Bonjour ! Je suis Cap Web, un assistant à règles. Écrivez « aide » pour voir ce que je sais faire.",
  aide: `Je connais « salut », « aide », « test », et deux mots à moi : ${liste}.`,
  test: "Test bien reçu : mes règles fonctionnent.",
};

export function validateMessage(raw) {
  if (typeof raw !== "string") {
    return { ok: false, error: "Le message doit être du texte." };
  }
  const value = raw.trim();
  if (value === "") {
    return { ok: false, error: "Le message ne doit pas être vide." };
  }
  if (value.length > LIMITE) {
    return {
      ok: false,
      error: `Le message doit contenir ${LIMITE} caractères au maximum.`,
    };
  }
  return { ok: true, value };
}

export function replyTo(message) {
  const texte = String(message).trim().toLowerCase();
  if (texte === "salut" || texte === "bonjour") {
    return REPONSES.salut;
  }
  if (texte === "aide") {
    return REPONSES.aide;
  }
  if (texte === "test") {
    return REPONSES.test;
  }
  if (Object.hasOwn(MOTS, texte)) {
    return MOTS[texte];
  }
  // Message inconnu : on rappelle ce que Cap Web sait faire.
  return "Je ne connais pas cette demande. Écrivez « aide » pour découvrir mes commandes.";
}

export function synonyme(message) {
  if (typeof message !== "string") {
    return "";
  }
  const texte = message.trim().toLowerCase();
  if (["coucou", "hello", "bonsoir"].includes(texte)) {
    return "salut";
  }
  if (["help", "sos"].includes(texte)) {
    return "aide";
  }
  return texte;
}
