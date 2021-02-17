const openModal = documents.querySelectorAll();
const closeModalButton = documents.querySelectorAll('[data-close-button]');

closeModalButton.ForEach(button => {
    button.addEventLister('click', () => {
        const modal = button.closest('.modal') 
        close(modal)
    })
})

function closeModal(modal){
    if(modal == nul) return 
    modal.remove('active')
}

/*Pour incrémenter le compteur dans la section Commande du matériel*/
function incrementCounter(id)
{
    var value = parseInt(document.getElementById(id).value);
    value = isNaN(value) ? 0 : value;
  	value++;
  	document.getElementById(id).value = value;
}

/*Pour décrémenter le compteur dans la section Commande du matériel*/
function decrementCounter(id)
{
  var value = parseInt(document.getElementById(id).value);
  value = isNaN(value) ? 0 : value;
  if (value != 0) //Evite d'afficher des valeurs négatives
  {
  	value--;
  }
  document.getElementById(id).value = value;
}
