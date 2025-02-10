
// 1. Afficher une alerte lorsqu'un utilisateur clique sur le bouton "Contactez le services cormerciales"
document.querySelector('.btn').addEventListener('click', function (event) {
    alert("Merci de votre intérêt ! Vous serez redirigé vers la page de contact.");
});

// 2. Ajouter un effet dynamique au texte du héros (animation de couleur)
const heroText = document.querySelector('#hero h2');
let colors = ['#ff6347', '#4682b4', '#32cd32', '#ffa500'];
let i = 0;  

setInterval(() => {
    heroText.style.color = colors[i];
    i = (i + 1) % colors.length; // Cycle des couleurs
}, 1000);

// 3. Créer un effet au survol des services (agrandir légèrement les blocs)
const services = document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('mouseenter', () => {
        service.style.transform = 'scale(1.1)';
        service.style.transition = 'transform 0.3s';
    });

    service.addEventListener('mouseleave', () => {
        service.style.transform = 'scale(1)';
    });
});

// 4. Faire défiler doucement la page lorsqu'un lien du menu est cliqué
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll smooth vers la section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// 5. Ajouter l'heure actuelle dans le pied de page
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.textContent += ` - Mis à jour en ${currentYear}`;


  // Récupérer l'élément parent "Services"
  const servicesMenu = document.querySelector('nav ul li:first-child');
  const submenu = servicesMenu.querySelector('.submenu');

  // Afficher le sous-menu au survol
  servicesMenu.addEventListener('mouseenter', () => {
      submenu.style.display = 'block'; // Affiche le sous-menu
  });

  // Cacher le sous-menu lorsque la souris quitte
  servicesMenu.addEventListener('mouseleave', () => {
      submenu.style.display = 'none'; // Cache le sous-menu
  });
// Sélectionner tous les éléments de menu ayant un sous-menu
const menuItems = document.querySelectorAll("header nav ul li");

// Ajouter des écouteurs d'événements pour chaque élément
menuItems.forEach(item => {
    const submenu = item.querySelector(".submenu");

    // Vérifier si un sous-menu existe
    if (submenu) {
        // Afficher le sous-menu au survol
        item.addEventListener("mouseenter", () => {
            submenu.style.display = "block"; // Affiche le sous-menu
            submenu.style.opacity = "1"; // Rendre visible
            submenu.style.transform = "translateY(0)"; // Supprimer le décalage
        });

        // Cacher le sous-menu lorsque la souris quitte
        item.addEventListener("mouseleave", () => {
            submenu.style.opacity = "0"; // Rendre invisible
            submenu.style.transform = "translateY(10px)"; // Appliquer le décalage
            setTimeout(() => {
                submenu.style.display = "none"; // Cacher après l'animation
            }, 300); // Temps de la transition CSS
        });
    }
});
// Sélectionner les liens dans la navigation (liens "Services", "A propos", "Contact")
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    // Ajouter l'effet de survol lors du passage de la souris
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)'; // Agrandir l'élément au survol
        link.style.transition = 'transform 0.3s'; // Ajouter une transition douce
    });

    // Réinitialiser l'agrandissement lorsque la souris quitte
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)'; // Rétablir la taille normale
    });
});
// Sélectionner tous les paragraphes des services
const serviceParagraphs = document.querySelectorAll('.service-content p');

// Appliquer les styles à chaque paragraphe
serviceParagraphs.forEach(paragraph => {
    paragraph.style.fontFamily = 'Georgia, serif'; // Police d'écriture
    paragraph.style.fontSize = '1.4rem'; // Taille de la police
    paragraph.style.lineHeight = '2'; // Espacement entre les lignes
    paragraph.style.fontStyle = 'italic'; // Italique
    paragraph.style.color = '#2c3e50'; // Couleur
    paragraph.style.textTransform = 'capitalize'; // Première lettre en majuscule
    paragraph.style.letterSpacing = '0.5px'; // Espacement entre les lettres
});


