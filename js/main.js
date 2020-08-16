'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var rocket;
var billboard;
var firingButton;
var count;
var timer;


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function addStar()
{
    var divElement;
    var index;
    var sizes = ['tiny', 'normal', 'big'];
    
    // Création d'un élément <div>
    divElement = document.createElement('div');
    
    // Ajout de la classe 'star'
    divElement.classList.add('star');
    
    // On tire au hasard un index pour le tableau des tailles
    index = getRandomInteger(0,sizes.length-1);
    
    // Ajout d'une classe pour la taille de l'étoile
    divElement.classList.add(sizes[index]);
    
    // On tire au hasard la position de l'étoile entre 0 et 100%
    divElement.style.top = getRandomInteger(0, 100) + '%';
    divElement.style.left = getRandomInteger(0, 100) + '%';
    
    // On insère l'élément <div> dans le body du document
    document.body.appendChild(divElement);
}

// Gestionnaire d'événement au clic sur le bouton de mise à feu
function onClickFiringButton()
{
    // Une fois que la mise à feu lancée, on désactive le bouton de mise à feu
    firingButton.removeEventListener('click', onClickFiringButton);
    firingButton.classList.add('disabled');
    
    // Programmation du décollage pour dans x secondes
    setTimeout(function(){
        
        // On change la source de l'image de la fusée
        rocket.src = 'images/rocket3.gif';
        
        // On fait décoller la fusée en lui donnant la classe 'tookOff', la transition CSS fera le reste
        rocket.classList.add('tookOff');
        
    }, count * 1000);
    
    // Affichage initial du compte à rebours
    countDown();
    
    // Lancement du compte à rebours
    timer = setInterval(countDown, 1000);
    
    // On change la source de l'image de la fusée
    rocket.src = 'images/rocket2.gif';
}

// Gestion du compte à rebours
function countDown()
{
    // Affichage sur le panneau du compte à rebours
    billboard.textContent = count;
    
    // On décrémente le compteur
    count--;
    
    // Si le compteur arrive à -1, on stoppe le chronomètre
    if( count == -1 ){
        
        clearInterval(timer);
    }
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

// Initialisation des variables globales
count = 10;

// Sélection des différents éléments du DOM sur lesquels nous allons agir
rocket = document.getElementById('rocket');
billboard = document.querySelector('#billboard span');
firingButton = document.getElementById('firingButton');

// Installation du gestionnaire d'événement au clic sur le bouton de mise à feu
firingButton.addEventListener('click', onClickFiringButton);

// Ajout des étoiles
for(let i = 0 ; i < 150 ; i++){
    addStar();
}