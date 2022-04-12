// -----------------------------------------------
// SCROLL TOP
// -----------------------------------------------

var btnScrollTop = document.getElementById("scrollTop");
window.onscroll = ()=>{scrollFunction()};

function scrollFunction(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {btnScrollTop.style.display = "block";}
	else{btnScrollTop.style.display = "none";}
}

$('#scrollTop').click(()=>{focusTopPage();});
