
/*-------------------------Variables et constantes--------------------*/
const modalOrderBtn = document.querySelector('.order-btn');
const modalOrderBg = document.querySelector('.order-modal-bg');
const modalOrderClose = document.querySelector('.order-btn-close');
const modalNewsBg = document.querySelector('.news-modal-bg');
const modalNewsClose = document.querySelector('.news-btn-close');




/*---------------------------News Modal---------------------------------*/

document.getElementById("text-clickable").onclick = function() {openModal()};

function openModal() {
  document.getElementById("text-clickable").innerHTML = modalNewsBg.classList.add('news-modal-bg-active');
};

modalNewsClose.addEventListener('click', function(){
    modalNewsBg.classList.remove('news-modal-bg-active');
})



/*--------------------------Order modal-------------------------------*/
/*Pour ouvrir le modal order en appuyant sur le bouton commander*/
modalOrderBtn.addEventListener('click', function(){
    modalOrderBg.classList.add('order-modal-bg-active');
})

/*Pour fermer le modal order en appuyant sur l'icon X*/
modalOrderClose.addEventListener('click', function(){
    modalOrderBg.classList.remove('order-modal-bg-active');
})


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

/*--------------------------Order counter list-------------------------*/
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
