/* aide.js — mode d'emploi de l'outil Marche 30 min (lu par eps-aide.js) */
window.EPS_AIDE={appli:'Marche 30 min · prof',bouton:false,
pied:'Les données restent sur cet appareil. Exportez en Excel après l’épreuve.',
publics:[{id:'prof',titre:'Professeur',chapitres:[
{t:'Avant l’épreuve',html:`<ol>
<li>Choisissez l’examen avec le badge en haut (<b>Bac G&T</b>, <b>Bac Pro</b>, <b>1res Pro</b>) : le barème est verrouillé dès que le chrono démarre.</li>
<li>Onglet <b>Élèves</b> : glissez l’export Pronote (CSV, XLS, XLSX, ODS) ou ajoutez à la main ; ▲ ▼ pour l’ordre.</li>
<li>Onglet <b>Terrain</b> : réglez la <b>longueur de la piste</b> (150, 200, 300, 400 m ou libre).</li>
<li>Ouvrez l’outil une fois avec du réseau : ensuite il marche sans réseau.</li></ol>`},
{t:'Pendant les 30 minutes',html:`<ul>
<li>Démarrez le chrono au départ. Bip d’alerte à 3 min de la fin, triple bip à 30 min.</li>
<li>Un appui sur le <b>gros bouton</b> de l’élève = un tour. Le temps de passage de chaque tour est gardé.</li>
<li><b>Mode Course 🏁</b> : grille sur 2 colonnes, 8 élèves visibles sans défiler.</li>
<li>Arrêt constaté : <span class="bouton">⛔ Arrêt +1</span> (−0,5 point chacun), <span class="bouton">↩ Arrêt</span> pour annuler. <span class="bouton">ABS</span> / <span class="bouton">Dispensé</span> envoient l’élève en bas de liste.</li>
<li>À la fin : ajoutez les <b>mètres partiels</b> du dernier tour (+5, +10, +50, +100 m ; boutons − pour corriger).</li>
<li>Le chrono reprend s’il y a un rechargement ou une mise en veille : il est calculé sur l’heure réelle.</li></ul>`},
{t:'Résultats, historique, exports',html:`<ul>
<li><b>Résultats</b> : distance, note, détail des tours (écarts entre tours en graphique).</li>
<li>Exports Excel, CSV, impression ; les sessions passées restent dans l’historique.</li></ul>
<p class="attention"><b>Exportez en Excel à la fin.</b> 🗑 efface la session ; vider le cache du navigateur aussi.</p>`},
{t:'Lecture facilitée',html:`<p><b>Lecture facilitée</b> (case en haut) : police plus lisible et lettres espacées, utile en cas de dyslexie. Le choix vaut pour toutes les applis EPS de l’appareil.</p>`}]}]};
