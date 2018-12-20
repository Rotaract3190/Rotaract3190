

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


$(document).ready(function() {
	
	var url = 'https://blog.rotaract3190.org/feed.xml';

	
	feednami.load(url,function(result){
		if(result.error) {
			console.log(result.error);
		} else {
			var entries = result.feed.entries;
			var blogsectiontext = "";
				// for(var i = 0; i < entries.length; i++)
				for(var i = 0; i < 3; i++){
					var entry = entries[i];
					blogsectiontext += '<div class="col-lg-4 col-md-6 col-xs-12"><div class="topproject-item"><div class="descr"><hr><h3 class="title"><a href="'+entry.link+'" target="_blank">'+entry.title+'</a></h3><a href="'+entry.link+'" target="_blank">Read More &Sc;</a></div></div></div>';

					console.log(entry.title);
					console.dir(entry);
				}
				document.getElementById("blogsection").innerHTML = blogsectiontext;
		}
	});            
});

$('.panel-collapse').on('show.bs.collapse', function () {
	$(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
	$(this).siblings('.panel-heading').removeClass('active');
});
				
										

												
							