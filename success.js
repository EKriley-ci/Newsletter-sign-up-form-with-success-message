// Récupérer l'email depuis localStorage
const userMail = document.getElementById('userMail');
const email = localStorage.getItem('userEmail');

// Vérifier si un email est présent
if (email) {
    userMail.textContent = email;
} else {
    userMail.textContent = "No email found.";
}
