# SimulationEngraving-pluginjquery
## Guide d’utilisation du plugin jquery SimulationEngraving.js
### Créer par Juliane Dimanchin

### **DESCRIPTION**
Ce plugin permet de simuler une gravure sur un élément en image de votre choix. Il vous permettra de guider l’utilisateur en lui proposant divers paramètres : 
* Couleurs du texte 
* Taille de la police en px 
* Choix de la police du texte 
* Texte de gravure

Les choix sont présentés sous forme de liste de sélection, pour ces listes le nombre d’attributs possible n’est pas limité. De plus vous bloquez le nombre de caractères autoriser ainsi que l’emplacement du début du texte de la gravure

### **UTILISATION**
#### 1.Mise en place du code
Placer le code suivant dans votre template (HTML /twing/...), à l’emplacement où vous souhaitez le voir sur votre page :
```sh
          <div id="container-Engraving">  
                    <div id="champs">
                        <p>
                            <label>Couleurs du texte</label> :
                            <select id="zColor">
                            </select>                            
                        </p>
                        <p>
                            <label>Taille de la police (px)</label> : 
                            <select id="zFontSize">
                            </select> 
                        </p>
                        <p>
                            <label>Choix de la police de font</label> :
                            <select id="zFontFamily">
                            </select> 
                        </p>
                        <p>
                            <label>Texte de gravure</label> : 
                            <input id ="chooseText" type="text"/>
                        </p>                        
                        <p id="valid">Voir la gravure</p>

                    </div>
                    
                    <div id="blockImage">
                        <img id="chooseImg" src="assets/img/couteau.jpg" alt="img">
						
                        <div id="repere"></div>
                    </div>
        </div>
        
   ```           
 CONSEIL : Il ne faut pas modifier le nom des id, cependant vous pouvez modifier la disposition des éléments
 ________________________________________
 Aprés téléchargement du dossier SimulationEngraving-pluginjquery.
 
 Placer dans votre dossier js le fichier "SimulationEngraving.js".
 
 Puis dans votre dossier css le fichier "style.css", ainsi que le style que vous souhaitez (optionnel).
 
 Maintenant vous devez placer entre vos balises <head> les appellent suivant (adapté vos chemins):
  
```sh
<!--CSS--->
        <link rel="stylesheet" href="assets/css/style.css" >
<!--
        <link rel="stylesheet" href="assets/css/green-style.css" >
        <link rel="stylesheet" href="assets/css/black_white-style.css">
-->
        <link rel="stylesheet" href="assets/css/yellow-style.css" >
        
        <!-- Jquery -->
        <script src="assets/js/jquery.3.2.1.min.js" ></script>
        
        <!--Appel plugin-->
        <script src="assets/js/SimulationEngraving.js" ></script>
        
        <!--Votre script-->
        <script src="assets/js/script.js" ></script>
 ```       
        
CONSEIL : Vous pouvez si vous le souhaitez utiliser votre propre Css. Cependant le code plaçait dans style Css est nécessaire à la bonne utilisation du plugin.

### 2.Appel du plugin et paramétrage des attributs

La dernière étape consiste à rentrer les attributs des paramètres utilisateurs. Ce code doit se trouver dans votre script .js
Appels des fonctions:
```sh
$(document).Base();
Attributs couleur de texte ( séparer pas des virgules)
$(document).listColor( ‘#C6E4E8’, ‘#576466’,’#000’);
Attributs tailles de texte autorisé ( séparer pas des virgules)           
$(document).listeFontSize(‘25’,’15’,’19’);
Attributs polices de texte autorisé ( séparer pas des virgules)
$(document).listeFontFamily(‘Brush Script Std, Brush Script MT, cursive’, ‘Andale Mono, monospace’, ‘Stencil Std, fantasy’);
Nombre de caracteres autoriser pour le texte de la gravure
$(document).nbCharacter(‘6’);
```

 ---Code complet : 
 ```sh
  $(document).Base(); 
$(document).listColor( ‘#C6E4E8’, ‘#576466’,’#000’); 
$(document).listeFontSize(‘25’,’15’,’19’); 
$(document).listeFontFamily(‘Brush Script Std, Brush Script MT, cursive’, ‘Andale Mono, monospace’, ‘Stencil Std, fantasy’); $(document).nbCharacter(‘6’);
```

### 3.Informations supplémentaires
Le plugin est compatible tout navigateurs.
_______________________
Pour les coordonnées du point/repére, vous pouvez les modifier dans le code de style. css, ligne35 -  #blockImage #repere.

