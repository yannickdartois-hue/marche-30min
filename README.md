# 🚶 Marche 30' — Outil de notation EPS
### Lycée Polyvalent Georges Pompidou — Castelnau-le-Lez

Outil de terrain 100 % offline pour noter l'épreuve de substitution **Marche 30 minutes** en EPS — BAC G&T, BAC PRO, 1ÈRES PRO.

Fichier HTML unique, aucune installation, fonctionne sur iPad / iPhone / Android en plein soleil.

---

## Fonctionnalités

### 📥 Import élèves
- Glisser-déposer un export Pronote (CSV, XLS, XLSX, ODS / LibreOffice)
- Détection automatique des colonnes Nom / Prénom / Classe / Sexe
- Ajout manuel élève par élève
- Réordonnement ▲ ▼ avant l'épreuve
- ABS / Dispensé descendent automatiquement en fin de liste

### 🏃 Page Terrain
- **Chrono 30 min** avec barre de progression, alerte sonore à 3 min et à la fin (3 bips)
- **Barème verrouillé** automatiquement au démarrage (BAC G&T / BAC PRO / 1ÈRES PRO)
- **Taille de piste configurable** : 150 m, 200 m, 300 m, 400 m ou valeur libre
- **Bouton TAP géant** par élève — un appui = un tour enregistré
- Calcul de note en temps réel (barème officiel, pénalité −0,5 pt / arrêt constaté)
- **Mètres partiels** en fin d'épreuve (+5 m, +10 m, +50 m, +100 m) avec annulation (−10 m, −50 m, −100 m)
- Chrono individuel live sur chaque card + **temps de passage** à chaque tour
- **Historique complet des passages** par élève avec graphique Δ entre tours
- Statuts **ABS** / **Dispensé 🏥** (déplacés automatiquement en bas de liste)
- **Mode Course 🏁** : grille 2 colonnes, 8 élèves visibles sans scroller, interface épurée, ABS/DISP masqués
- Tri par nombre de tours / distance en un tap
- Filtre par nom et par classe

### 🏆 Résultats
- Classement temps réel avec médailles 🥇 🥈 🥉
- Tri par colonne (rang, nom, tours, distance, note)
- Export **CSV**, **Excel (.xlsx)**, **image PNG**, copier-coller

### 🗃 Historique des sessions
- Archive jusqu'à 20 sessions dans le navigateur (localStorage)
- Rechargement d'une session archivée en un clic

### 🌙 Mode nuit ultra-contrasté
- Fond noir pur, couleurs saturées — conçu pour être lisible en plein soleil sur tablette

---

## Barème intégré

Source : barème officiel académique — piste 200 m.  
**Chaque arrêt constaté = −0,5 point.**

| Distance | BAC G&T F | BAC G&T M | BAC PRO F | BAC PRO M | 1ÈRES PRO F | 1ÈRES PRO M |
|----------|:---------:|:---------:|:---------:|:---------:|:-----------:|:-----------:|
| 5000 m   | 20        | 20        | —         | —         | —           | —           |
| 4500 m   | —         | 20        | —         | —         | —           | —           |
| 4200 m   | 20        | 17        | —         | —         | —           | —           |
| 3800 m   | 16        | 13        | 20        | 17        | —           | 18          |
| 3700 m   | 15        | 12        | 19        | 16        | 20          | 17          |
| 3200 m   | 10        | 7         | 14        | 11        | 15          | 12          |
| 2700 m   | 5         | 2         | 9         | 6         | 10          | 7           |
| 2200 m   | 0         | —         | 4         | 1         | 5           | 2           |
| 1700 m   | —         | —         | —         | —         | 0           | —           |

*(tableau complet intégré dans l'outil)*

---

## Utilisation rapide

1. Ouvrir `marche30_pompidou.html` dans Chrome, Safari ou Firefox
2. **Onglet Élèves** → importer la liste Pronote ou ajouter manuellement
3. Choisir le barème (BAC G&T / BAC PRO / 1ÈRES PRO) et la taille de piste
4. **Onglet Terrain** → appuyer sur ▶ Démarrer, puis taper les tours au passage
5. En fin d'épreuve : ajouter les mètres partiels si nécessaire
6. **Onglet Résultats** → exporter CSV / Excel / PNG ou archiver la session

> ⚠️ Les données sont sauvegardées dans le `localStorage` du navigateur.  
> Ne pas effacer les données du navigateur entre deux séances si vous souhaitez conserver l'historique.

---

## Structure du dépôt

```
marche30-eps/
├── index.html                  # Page d'accueil (redirige vers l'outil)
├── marche30_pompidou.html      # Outil complet (fichier autonome)
└── README.md
```

---

## Compatibilité navigateurs

| Navigateur        | Support    |
|-------------------|:----------:|
| Chrome / Edge     | ✅ Complet |
| Safari iOS (iPad) | ✅ Complet |
| Firefox           | ✅ Complet |
| Samsung Internet  | ✅ Complet |

---

## Dépendances (chargées via CDN)

| Librairie | Version | Usage |
|-----------|---------|-------|
| [SheetJS](https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js) | 0.18.5 | Lecture fichiers Pronote (XLS, XLSX, ODS) |
| Google Fonts | — | Barlow, Barlow Condensed, JetBrains Mono |

Aucune autre dépendance. Aucun serveur. Aucune donnée transmise.

---

## Auteur

**Dartois Yannick** — Professeur d'EPS  
Lycée Polyvalent Georges Pompidou, Castelnau-le-Lez (académie de Montpellier)
