var navTop = document.querySelector('.nav-toggle');
document.querySelector('.nav-btn').addEventListener('click', function (e) {
	e.preventDefault();
	if (navTop.getAttribute('data-state') == 'expanded') {
		navTop.setAttribute('data-state', 'collapsed');
		this.setAttribute('data-state', 'inactive');
	} else {
		navTop.setAttribute('data-state', 'expanded');
		this.setAttribute('data-state', 'active');
	}
});

var logo=$(".logo")

$(".logowrap").waypoint(function(direction){
	if(direction=="down"){
		logo.attr("data-state","fixed")
	} else{
		logo.attr("data-state","not-fixed")
	}
	
},{offset:"22px"})



$(".piece").on("click",function(){
	var id=$(this).attr("data-id");
	$(id).attr("data-state","open");
	
	});
	
$(".close").on("click",function(){
	$(this).parent().attr("data-state","close");
	
	});