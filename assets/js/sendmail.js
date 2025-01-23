(function () {
    emailjs.init("ed86WI46j1xJYk8cz");
})();

document.querySelector('.work-request').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const form = document.getElementById('contact-form');
  
    emailjs.sendForm('service_9pdnsbt', 'template_ne9lcjl', form, 'ed86WI46j1xJYk8cz')
      .then(function () {
        alert('Votre email a bien été envoyé.');

        // Réinitialiser les champs du formulaire après l'envoi du mail
        form.reset(); // Réinitialise tous les champs du formulaire
        
        // Réinitialiser les champs personnalisés associés aux checkboxes
        const otherField = document.getElementById('other-field');
        const otherTextarea = document.getElementById('other-text');
        const askField = document.getElementById('tech-ask');
        const askTextarea = document.getElementById('ask-text');
        
        otherField.style.display = 'none';
        otherTextarea.value = '';
        otherTextarea.required = false;

        askField.style.display = 'none';
        askTextarea.value = '';
        askTextarea.required = false;

        // Réinitialiser les cases à cocher
        document.getElementById('opt-4').checked = false;
        document.getElementById('opt-1').checked = false;

      }, function (error) {
        alert('Un problème est survenu, merci de réessayer.');
        console.error('EmailJS error:', error);
      });
});

document.addEventListener('DOMContentLoaded', function () {
    const otherCheckbox = document.getElementById('opt-4');
    const otherField = document.getElementById('other-field');
    const otherTextarea = document.getElementById('other-text');
    const askCheckbox = document.getElementById('opt-1');
    const askField = document.getElementById('tech-ask');
    const askTextarea = document.getElementById('ask-text');
  
    // Réinitialiser l'état du bouton "Autres" au chargement de la page
    otherCheckbox.checked = false;
    otherField.style.display = 'none';
    otherTextarea.required = false;
    otherTextarea.value = '';
    askCheckbox.checked = false;
    askField.style.display = 'none';
    askTextarea.value = '';
    askTextarea.required = false;

    otherCheckbox.addEventListener('change', function () {
      if (this.checked) {
        otherField.style.display = 'block'; 
        otherTextarea.required = true;
      } else {
        otherField.style.display = 'none';
        otherTextarea.required = false; 
        otherTextarea.value = '';
      }
    });
  
    askCheckbox.addEventListener('change', function () {
        if (this.checked) {
          askField.style.display = 'block'; 
          askTextarea.required = true;
        } else {
          askField.style.display = 'none';
          askTextarea.required = false; 
          askTextarea.value = '';
        }
    });
});
