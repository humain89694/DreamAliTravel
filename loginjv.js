/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/

function cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  
  setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
    
  setTimeout(function(){    
  document.querySelector('.cont_form_sign_up').style.display = "none";
  },200);  
    }
  
  function cambiar_sign_up(at) {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";
    
  setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
  },100);  
  
  setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
  },400);  
  
  
  }    
  
  
  
  function ocultar_login_sign_up() {
  
  document.querySelector('.cont_forms').className = "cont_forms";  
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  document.querySelector('.cont_form_login').style.opacity = "0"; 
  
  setTimeout(function(){
  document.querySelector('.cont_form_sign_up').style.display = "none";
  document.querySelector('.cont_form_login').style.display = "none";
  },500);  
    
    }
    function initMap() {
      // Coordonnées de votre localisation
      var myLocation = { lat: 48.8566, lng: 2.3522 }; // Remplacez par les coordonnées de votre localisation
  
      // Options de la carte
      var mapOptions = {
          center: myLocation,
          zoom: 15, // Niveau de zoom initial
      };
  
      // Créer la carte dans le conteneur avec l'ID 'map'
      var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
      // Ajouter un marqueur pour indiquer la localisation
      var marker = new google.maps.Marker({
          position: myLocation,
          map: map,
          title: 'Votre localisation',
      });
  }