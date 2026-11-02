# Carnet HS — Suivi du développement
**Mise à jour : 2 novembre 2026**  
**Référence de production : V3.4.1**  
**Branche de travail commerciale : `dev/V3.4.1-final`**

## 1. État du projet
La V3.4.1 reste la version de production de référence. La maquette commerciale est développée à part, dans `site-commercial/`, sans modification de l'application de production.

## 2. Objectif de Carnet HS
Permettre à chaque salarié, en priorité intérimaire, de conserver une trace personnelle des heures réellement effectuées, consulter son historique et repérer d'éventuels écarts avec les heures transmises par l'encadrement ou l'agence. Carnet HS est un outil de suivi : il ne garantit pas à lui seul le paiement des heures et ne constitue pas automatiquement une preuve juridique définitive.

## 3. Orientation commerciale retenue
- **Cible prioritaire :** salariés intérimaires.
- **Cibles suivantes :** salariés aux horaires variables ou réalisant des heures supplémentaires.
- **Piste ultérieure distincte :** indépendants et professionnels facturant leur temps (consultants, informaticiens, comptables, etc.), avec adaptations fonctionnelles nécessaires.

## 4. Maquette du site commercial
Une première maquette est présente dans `site-commercial/` : page de présentation, trois offres, FAQ sous forme de chatbot à réponses prédéfinies, mentions légales et confidentialité provisoires.

### Les trois offres envisagées
1. **Essentiel :** gratuit pendant 3 mois, puis prix envisagé de 1 €. Périodicité, conditions et modalités à confirmer.
2. **Essentiel + sauvegardes :** contenu, fréquence, restauration et prix à définir.
3. **Partenaire :** offre à étudier pour les entreprises de travail temporaire et autres organisations ; modalités, quotas et tarifs à définir.

Le chatbot actuel est une démonstration locale à réponses prédéfinies, pas une IA connectée. Aucun paiement, abonnement ou collecte commerciale de données n'est activé. Les mentions légales et la politique de confidentialité sont des modèles provisoires et ne doivent pas être publiés sans vérification et complétion.

## 5. Fonctions volontairement reportées
- Moyens de paiement et gestion des abonnements.
- Sécurisation avancée des données, sauvegardes et restauration associées à une offre payante.
- Vente de licences ou de quotas de distribution aux agences d'intérim et autres organisations.
- Adaptations métiers pour les professionnels qui facturent à l'heure.

Ces sujets seront repris après validation de l'intérêt réel du marché et du modèle économique.

## 6. Architecture documentaire du serveur
Espace prévu, distinct de l'application de production :
```
site-commercial/
└── documentation/
    ├── index.html                 # portail : ouvrir et télécharger les documents
    ├── suivi-developpement.html   # lecture dans le navigateur
    ├── suivi-developpement.md     # source Markdown téléchargeable
    ├── versions/                  # notes de versions
    ├── guides/                    # manuel utilisateur et guides
    └── commercial/                # offres, étude de marché, supports
```
Le portail doit permettre une consultation directe dans le navigateur et un téléchargement sans passer par l'enregistrement manuel à chaque consultation. L'accès public éventuel doit être contrôlé : aucune donnée personnelle, confidentielle ou secret technique ne doit y figurer.

## 7. Prochaines étapes
1. Tester le site vitrine sur ordinateur et mobile.
2. Recueillir des retours concrets d'intérimaires et mesurer leur volonté réelle de payer.
3. Clarifier le contenu des trois offres sans annoncer de fonctions non disponibles.
4. Vérifier et compléter les mentions légales et la politique de confidentialité avant publication.
5. Mettre en place le portail documentaire et y centraliser les mémos, guides et notes de versions.
6. Différer paiement, stockage distant et quotas jusqu'à validation du besoin, du modèle économique et des exigences de sécurité.

---
**État au 2 novembre 2026 :** V3.4.1 demeure la référence de production. La maquette commerciale est isolée en développement. Paiements, sécurisation avancée des données et quotas de distribution sont différés.
