// Récupération des éléments nécessaires
const emailInput = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const loadbar = document.getElementById('loadbar');
const objet = document.querySelector('.objet'); // Ajout de la récupération de l'objet animé

// Ajouter un écouteur d'événement sur le formulaire
form.addEventListener('submit', function (event) {
    // Empêcher le comportement par défaut
    event.preventDefault();

    // Récupérer la valeur actuelle de l'email
    const emailValue = emailInput.value;

    // Vérifier si l'email est valide
    if (emailValue.includes('@') && emailValue.includes('.')) {
        // Stocker l'email dans localStorage
        localStorage.setItem('userEmail', emailValue);

        // Afficher la barre de chargement et masquer le formulaire
        loadbar.style.display = 'flex';
        form.style.display = 'none';

        // Attendre la fin de l'animation avant de rediriger
        objet.addEventListener('animationend', () => {
            window.location.href = 'succes.html'; // Rediriger vers la page de succès
        });
    } else {
        // Afficher un message d'erreur et styliser le champ
        emailInput.style.border = "2px solid hsl(4, 100%, 67%)";
        emailInput.style.background = "hsl(4, 100%, 67%,0.2)";
        emailInput.style.color = "hsl(4, 100%, 67%)";
        message.textContent = "Valid email required";
        message.style.color = "hsl(4, 100%, 67%)";
        emailInput.focus();
    }
});
