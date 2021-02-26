function getData()
{
    $.getJSON('./data.json', 
    function(data)
    {
        loadNews(data.News);
        loadGuides(data.Guides);
        loadBottin(data.Bottin);
        loadOrder(data.Order)
    }
    );
}

/***********************Loading JSON data ************************/
function loadNews(newsList){
    var output = '';
    for(var i = 0; i < newsList.length; i++){
        output +=   '<li>'+
                        '<h4  style="cursor:pointer" onclick="openModal(\'' + newsList[i].title + '\',\'' + '<p>' + newsList[i].content + '</p>' + '\')">' + 
                            newsList[i].title +
                        '</h4>' +
                        '<p style="cursor:pointer" onclick="openModal(\'' + newsList[i].title + '\',\'' + '<p>' + newsList[i].content + '</p>' + '\')">' + 
                            newsList[i].content + 
                        '</p>'+ 
                    '</li>';
    }
    document.getElementById('News').innerHTML = '';
    document.getElementById('News').innerHTML += output;
}

function loadGuides(guidesList){
    var output = '';
    for(var i = 0; i < guidesList.length; i++){
        output +=   '<li>'+
                        '<h4 style="cursor:pointer" onclick="openModal(\'' + guidesList[i].title + '\',\'' + '<p>' + guidesList[i].content + '</p>' + '\')">' + 
                            guidesList[i].title + 
                        '</h4>'+
                    '</li>';
    }
    document.getElementById('Guide').innerHTML = '';
    document.getElementById('Guide').innerHTML += output;
}

function loadBottin(bottinList){
    var output = '';
    for(var i = 0; i < bottinList.length; i++){
       output += '<li class="list-employees copyMail">' +
                    '<div class="employee employee-mobile">'+
                        '<h5>' + 
                            bottinList[i].title + 
                        '</h5>'+
                        '<span>'+ 
                            bottinList[i].content + '&nbsp' +
                        '</span>'+
                    '</div>'+
                    '<img src="icons/copy.svg" alt="copy-img" class="copyImage" onclick="CopyToClipboard(\'' +  bottinList[i].content + '\',\'' + i + '\')">'+
                 '</li>';
    }
    document.getElementById('Bottin').innerHTML = '';
    document.getElementById('Bottin').innerHTML += output;
}

function loadOrder(orderList)
{
    let output = '';
    for(let i = 0; i < orderList.length; i++){
        output +=   '<ul>' +
                        '<div class="stepper-mobile" onclick="incrementCounter(\'' + i + '\')">'+
                          '<span>+</span>' +
                        '</div>' +
                        '<li class="col-4 col-t-7">'+
                          '<input type="number" value="0" class="orderItem">' +
                        '</li>' +

                        '<div class="stepper-mobile" onclick="decrementCounter(\'' + i + '\')">'+
                          '<span>-</span>'+
                        '</div>' +

                        '<li class="stepper col-2">' +
                            '<img src="icons/arrow_up.svg" class="stepper-img" onclick="incrementCounter(\'' + i + '\')">' +
                            '<img src="icons/arrow_down.svg" class="stepper-img" onclick="decrementCounter(\'' + i + '\')">' +
                        '</li> '+                               
                        '<li class="name col-6">' +
                          '<p>' + orderList[i].title + '</p>'+
                        '</li>'+
                    '</ul>';
    }
    document.getElementById('content-order').innerHTML = '';
    document.getElementById('content-order').innerHTML += output;
}

/**********************ORDER_FUNCTIONS *************************/
function incrementCounter(iterator) {
  let value = document.getElementsByClassName("orderItem")[iterator].value;
  if (value >= 0) 
    document.getElementsByClassName("orderItem")[iterator].value = ++value;
  else
    document.getElementsByClassName("orderItem")[iterator].value = 0;
}

function decrementCounter(iterator) {
  let value = document.getElementsByClassName("orderItem")[iterator].value;
  if (value > 0)
    document.getElementsByClassName("orderItem")[iterator].value = --value;
  else
    document.getElementsByClassName("orderItem")[iterator].value = 0;
}

/*Sauvegarder les données de la commande dans un JSON*/
function confirmOrder(event) {
    let items = [];                                         //Clear array on every new order
    event.preventDefault();                                 //Prevent the page from reloading on form submission
  
    let item = {
      savon: document.getElementsByClassName('orderItem')[0].value,
      guenilles: document.getElementsByClassName('orderItem')[1].value,
      desodorisant: document.getElementsByClassName('orderItem')[2].value,
      ampoules: document.getElementsByClassName('orderItem')[3].value,
      autres: document.getElementById('box-comment').value
    }
    items.push(item);
  
    sessionStorage.setItem("Order", JSON.stringify(items)); //Save to session storage
  
    displayOrder();                                        
  }
  
  function displayOrder() {
    let object = JSON.parse(sessionStorage.getItem("Order"));
    let order = object[0];
  
    output = '';
    
    if (order.savon != 0){
        output += '<p>' + order.savon + " litre(s) de savon" + '</p>';
    }

    if (order.guenilles != 0){
        output += '<p>' + order.guenilles + " guénille(s)" + '</p>';
    }

    if (order.desodorisant != 0){
        output += '<p>' + order.desodorisant + " désodorisant(s)" + '</p>';
    }

    if (order.ampoules != 0){
        output += '<p>' + order.ampoules + " ampoule(s)" + '</p>';
    }

    if (order.autres != 0){
        output += '<p>' + "Autres : " + order.autres + '</p>';
    }
    
    output += '<p>' + "Vous serez avisé lorsque les items commandés seront à votre disposition au siège de l’association Frigocommunautaire sur au 4525 Rue Clark, Montréal, QC." + '</p>';

    openModal("Confirmation", output);
  }

/*********************modal*************************/

var modal = document.getElementById("modal-wrapper");

function openModal(title, content){ 
    document.querySelector("body").style.overflow = 'hidden';
    modal.style.display = "flex"; 
    document.getElementById('modal-content').innerHTML = '';
    document.getElementById('modal-content').innerHTML += '<h3>' + title + '</h3>' + content /*'<p>' + content + '</p>'*/;
}

function closeModal(){ 
    modal.style.display = "none"; 
    document.querySelector("body").style.overflow = 'auto';
}

var modalLogOut = document.getElementById("logOut-modal-bg");

function openModalLogOut(){ 
    document.querySelector("body").style.overflow = 'hidden';
    modalLogOut.style.display = "flex"; 
}

function closeModalLogOut(){ 
    modalLogOut.style.display = "none"; 
    document.querySelector("body").style.overflow = 'auto';
}

/*********************CopyPopup*************************/

function CopyToClipboard(value, iteration) {
    /*Copy to clipboard*/
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();

    /*Pop-up*/
    var notificationTag = $("div.copy-notification");
    notificationTag = $("<div/>", { "class": "copy-notification", text: "Adresse copiée" });
    $(".list-employees").eq(iteration).append(notificationTag); /*Changer la valeur de 'iteration' pour l'iteration dans le bottin du JSON .. marche slmt si id dans html*/
  
    notificationTag.fadeIn("slow", function () {
      setTimeout(function () {
        notificationTag.fadeOut("slow", function () {
          notificationTag.remove();
        });
      }, 1000);
    });
  }

/*********************LogIn/LogOut*************************/
function logIn() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let volunteer = document.getElementById("volunteer");

  if (username == "jbradette" && password =="123456" && volunteer.checked)
    window.open("index.html", "_self");
  else
    document.getElementById("wrong-credentials").style.display = "block";
}

function logOut()
{
  window.open("login.html", "_self");
}