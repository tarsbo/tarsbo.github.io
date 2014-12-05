var navTop = document.querySelector('.nav-toggle');
var logo = $('.logo');
var logoWrap = $('.logowrap');
var currentState = 'not-fixed';

document.querySelector('.nav-btn').addEventListener('click', function (e) {
	e.preventDefault();

	if (navTop.getAttribute('data-state') == 'expanded') {
		navTop.setAttribute('data-state', 'collapsed');
		this.setAttribute('data-state', 'inactive');
		logoWrap.waypoint('enable');
		logo.attr('data-state', currentState);
	} else {
		navTop.setAttribute('data-state', 'expanded');
		this.setAttribute('data-state', 'active');
		logoWrap.waypoint('disable');
		logo.attr('data-state', 'fixed');
	}
});

logoWrap.waypoint(function (direction) {
	if(direction=='down'){
		currentState = 'fixed';
		logo.attr('data-state', 'fixed');
	} else{
		currentState = 'not-fixed';
		logo.attr('data-state', 'not-fixed');
	}
}, { offset: '22px' });



$(".piece").on("click",function(){
	var id=$(this).attr("data-id");
	$(id).attr("data-state","open");
	
	});
	
$(".close").on("click",function(){
	$(this).parent().attr("data-state","close");
	
	});