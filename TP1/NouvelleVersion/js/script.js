
/*-------------------------Variables et constantes--------------------*/
const modalOrderBtn = document.querySelector('.order-btn');
const modalOrderBg = document.querySelector('.order-modal-bg');
const modalOrderClose = document.querySelector('.order-btn-close');

const modalNewsBg = document.querySelector('.news-modal-bg');
const modalNewsClose = document.querySelector('.news-btn-close');

const modalCleaningBg = document.querySelector('.nettoyage-modal-bg');
const modalCleaningClose = document.querySelector('.nettoyage-btn-close');



/*---------------------------News Modal---------------------------------*/
document.getElementById("text-clickable").onclick = function(){
  modalNewsBg.classList.add('news-modal-bg-active');
}

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

/*---------------------------Cleaning Modal---------------------------------*/
document.getElementById("title-clickable").onclick = function(){
  modalCleaningBg.classList.add('nettoyage-modal-bg-active');
}

modalCleaningClose.addEventListener('click', function(){
    modalCleaningBg.classList.remove('nettoyage-modal-bg-active');
})


/*--------------------------Order counter list-------------------------*/
/*Incrémenter le compteur dans la section Commande du matériel*/
function incrementCounter(id)
{
  let value = document.getElementById(id).value;
    if (value >= 0) //Evite d'afficher des valeurs négatives
      document.getElementById(id).value = ++value;
    else 
      document.getElementById(id).value = 0;

}

/*Décrémenter le compteur dans la section Commande du matériel*/
function decrementCounter(id)
{
  let value = document.getElementById(id).value;
  if (value > 0) //Evite d'afficher des valeurs négatives
  	document.getElementById(id).value = --value;
  else 
    document.getElementById(id).value = 0;
  
}

/*Afficher la valeur de chaque compteur et afficher dans la modale*/
function returnCounter()
{
  document.getElementById("savon").innerHTML = "";
  document.getElementById("guenille").innerHTML = "";
  document.getElementById("desodorisant").innerHTML = "";
  document.getElementById("ampoules").innerHTML = "";
  document.getElementById("autres").innerHTML = "";

  let value = document.getElementById('first-counter').value;
  if (value != 0)
    document.getElementById("savon").innerHTML = value + " litre(s) de savon";

  value = document.getElementById('second-counter').value;
  if (value != 0)  
    document.getElementById("guenille").innerHTML = value + " guénille(s)";

  value = document.getElementById('third-counter').value;
  if (value != 0)  
    document.getElementById("desodorisant").innerHTML = value  + " désodorisant(s)";

  value = document.getElementById('fourth-counter').value;
  if (value != 0)  
    document.getElementById("ampoules").innerHTML = value  + " ampoule(s)";

  value = document.getElementById('box-comment').value;
  if (value != 0) 
    document.getElementById("autres").innerHTML = "Autres : " + value;

}
