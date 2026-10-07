// Cap Web — câblage : lire le formulaire, mettre à jour l'historique, demander l'affichage.
import { LIMITE, replyTo, validateMessage } from "./brain.js";
import { renderMessages } from "./view.js";

const formulaire = document.querySelector("#chat-form");
const champ = document.querySelector("#message");
const liste = document.querySelector("#messages");
const statut = document.querySelector("#status");
const effacer = document.querySelector("#effacer");
const versionElt = document.querySelector("#version");
const limiteElt = document.querySelector("#limite");
const compteur = document.querySelector("#compteur");

const CLE = "capweb.historique";
const historique = [];

function sauvegarder() {
  localStorage.setItem(CLE, JSON.stringify(historique));
}

function charger() {
  const brut = localStorage.getItem(CLE);
  if (brut === null) {
    return;
  }
  try {
    const donnees = JSON.parse(brut);
    if (Array.isArray(donnees)) {
      historique.push(...donnees);
    }
  } catch {
    statut.textContent =
      "Conversation précédente illisible : nouvelle conversation.";
  }
}

function mettreAJourCompteur() {
  if (!compteur) {
    return;
  }
  compteur.textContent = `${champ.value.length} / ${LIMITE}`;
}

async function demanderConseil() {
  try {
    const reponse = await fetch("/api/conseil", {
      headers: { accept: "application/json" },
    });
    if (!reponse.ok) {
      return "Le serveur ne répond pas : conseil indisponible.";
    }
    const donnees = await reponse.json();
    if (
      donnees &&
      typeof donnees.conseil === "string" &&
      donnees.conseil.trim() !== ""
    ) {
      return donnees.conseil;
    }
    return "Le serveur ne répond pas : conseil indisponible.";
  } catch {
    return "Le serveur ne répond pas : conseil indisponible.";
  }
}

async function afficherVersion() {
  try {
    const reponse = await fetch("/version.json", {
      headers: { accept: "application/json" },
    });
    if (!reponse.ok) {
      throw new Error("version indisponible");
    }
    const donnees = await reponse.json();
    if (donnees && typeof donnees.version === "string" && versionElt) {
      versionElt.textContent = `version ${donnees.version}`;
      return;
    }
    throw new Error("version indisponible");
  } catch {
    if (versionElt) {
      versionElt.textContent = "version indisponible";
    }
  }
}

formulaire.addEventListener("submit", async (event) => {
  event.preventDefault();
  const controle = validateMessage(champ.value);
  if (!controle.ok) {
    statut.textContent = controle.error;
    champ.focus();
    return;
  }
  historique.push({ role: "user", text: controle.value });
  const texteReponse =
    controle.value.trim().toLowerCase() === "conseil"
      ? await demanderConseil()
      : replyTo(controle.value);
  historique.push({ role: "assistant", text: texteReponse });
  sauvegarder();
  renderMessages(historique, liste);
  champ.value = "";
  mettreAJourCompteur();
  statut.textContent = "";
  champ.focus();
});

effacer.addEventListener("click", () => {
  if (!confirm("Effacer toute la conversation ?")) {
    return;
  }
  historique.length = 0;
  localStorage.removeItem(CLE);
  renderMessages(historique, liste);
  mettreAJourCompteur();
  statut.textContent = "Conversation effacée.";
});

// La limite vient de brain.js : un seul endroit à modifier.
champ.maxLength = LIMITE;
limiteElt.textContent = String(LIMITE);
champ.addEventListener("input", mettreAJourCompteur);
mettreAJourCompteur();

charger();
renderMessages(historique, liste);

afficherVersion();
