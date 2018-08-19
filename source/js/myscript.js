//firebase config
var config = {
	apiKey: "AIzaSyCG5BHMvv02Gg3Ad1UFE4b3qiIBiCexiro",
	authDomain: "rotaract3190newsletter.firebaseapp.com",
	databaseURL: "https://rotaract3190newsletter.firebaseio.com",
	projectId: "rotaract3190newsletter",
	storageBucket: "rotaract3190newsletter.appspot.com",
	messagingSenderId: "184109378139"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('newsletterform').addEventListener('submit', submitnewsletterform);

// Submit form
function submitnewsletterform(e){
  e.preventDefault();

  // Get values
  var mail = getInputVal('mail');

  // Save message
  saveMessage(mail);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('newsletterform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(mail){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    mail: mail,
    
  });
}







//old

$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1000000,
      values: [ 500000, 1000000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  });

	var container = $('.grid').isotope({
		itemSelector: '.col-xs-12',
		getSortData: {
			name: '.name',
			price: '.price parseInt'
		}
	});
	$('.alphSort').on('click', function(e){
		e.preventDefault();
		container.isotope({ sortBy: 'name'});
	});
	$('.prcBtnH').on('click', function(e){
		e.preventDefault();
		container.isotope({ sortBy: 'price', sortAscending: false});
	});
	$('.prcBtnL').on('click', function(e){
		e.preventDefault();
		container.isotope({ sortBy: 'price', sortAscending: true});
	});
	$('.prcBtnR').on('click',function(e){
		e.preventDefault();
		container.isotope({sortBy:'random'});
	});
	$('.prcBtnO').on('click',function(e){
		e.preventDefault();
		container.isotope({sortBy:'original-order'});
	});

$('#btnRM').click(function(){
    $('#readmore').animate({height:'90%'}, 500);
});
$('#btnRL').click(function(){
	$('#readmore').animate({height:'0px'}, 500);
});
$('#btnRM2').click(function(){
    $('#readmore2').animate({height:'90%'}, 500);
});
$('#btnRL2').click(function(){
	$('#readmore2').animate({height:'0px'}, 500);
});

	$(function () {
  $("#mydd a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu1").html($(this).html() + ' <span class="downicon"></span>');
  });
});

$(function () {
  $("#mydd2 a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu2").html($(this).html() + ' <span class="downicon"></span>');
  });
});
$(function () {
  $("#mydd3 a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu3").html($(this).html() + ' <span class="downicon"></span>');
  });
});

