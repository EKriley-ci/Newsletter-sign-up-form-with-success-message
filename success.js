// Récupérer l'email depuis localStorage
const userMail = document.getElementById('userMail');
const email = localStorage.getItem('userEmail');
const dismissBtn = document.getElementById('dismiss')
const objet = document.querySelector('.objet'); // Ajout de la récupération de l'objet animé

// Vérifier si un email est présent
if (email) {
    userMail.textContent = email;
} else {
    userMail.textContent = "No email found.";
}

dismissBtn.addEventListener('click', () => {
     // Afficher la barre de chargement et masquer le formulaire
     loadbar.style.display = 'flex';

     // Attendre la fin de l'animation avant de rediriger
     objet.addEventListener('animationend', () => {
         window.location.href = 'index.html'; // Rediriger vers la page de d'acceuil
     });
})
