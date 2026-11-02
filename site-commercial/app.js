const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

const answers = [
  { keys: ["sert", "util", "quoi", "but"], answer: "Carnet HS est conçu pour vous aider à enregistrer vos horaires, conserver un historique personnel et comparer vos notes aux relevés qui vous sont communiqués. Il ne remplace pas les documents officiels." },
  { keys: ["vérifier", "verifier", "écart", "ecart", "heures"], answer: "Notez vos horaires au fur et à mesure. Lorsque vous recevez un relevé, comparez les jours et les totaux avec votre historique. En cas d'écart, demandez rapidement une vérification à votre responsable ou à votre agence et conservez les éléments utiles." },
  { keys: ["prix", "coût", "cout", "abonnement", "essentiel", "gratuit"], answer: "La première formule envisagée est gratuite pendant 3 mois. Un abonnement à 1 € est ensuite envisagé, mais sa périodicité et ses modalités restent à définir. Aucun paiement n'est activé sur cette maquette." },
  { keys: ["sauvegarde", "sauvegardes", "données", "donnees", "cloud"], answer: "Une formule avec sauvegardes est à l'étude. Les modalités techniques, la fréquence, la durée de conservation et le tarif ne sont pas encore définis. Ne considérez pas cette maquette comme un service de sauvegarde actif." },
  { keys: ["partenaire", "partenariat"], answer: "Une formule Partenaire est envisagée, mais les partenaires, les services inclus et les conditions restent à définir." },
  { keys: ["preuve", "garanti", "garantie", "payé", "payer"], answer: "Carnet HS aide à conserver une trace personnelle de vos horaires. L'application ne garantit pas à elle seule le paiement des heures et ne constitue pas une preuve incontestable. Conservez également vos plannings, messages, relevés et autres éléments utiles." }
];

function addMessage(text, kind) {
  const bubble = document.createElement("div");
  bubble.className = "message " + (kind === "user" ? "user-message" : "bot-message");
  bubble.textContent = text;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
function getAnswer(question) {
  const normalized = question.toLocaleLowerCase("fr");
  const found = answers.find(item => item.keys.some(key => normalized.includes(key)));
  return found ? found.answer : "Je ne sais pas encore répondre à cette question dans cette version de démonstration. Cette assistance est composée de réponses prédéfinies et n'est pas connectée à une personne ni à une IA. Vous pourrez consulter la rubrique Questions lorsque le site sera finalisé.";
}
function ask(question) {
  const clean = question.trim();
  if (!clean) return;
  addMessage(clean, "user");
  addMessage(getAnswer(clean), "bot");
}
if (chatForm) {
  chatForm.addEventListener("submit", event => {
    event.preventDefault();
    ask(chatInput.value);
    chatInput.value = "";
  });
}
document.querySelectorAll("[data-question]").forEach(button => {
  button.addEventListener("click", () => ask(button.dataset.question));
});
