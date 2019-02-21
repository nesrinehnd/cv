window.addEventListener("scroll", function() { 

let deplacement =(window.scrollY /(document.body.offsetHeight - window.innerHeight))*100;

document.getElementById('progress_bar').value = deplacement; ponde au déplacement du scroll
console.log(deplacement);
});


function myScroll() { 
	
	var progress = document.getElementById('progress_bar').value; 
	var value=(progress*(document.body.offsetHeight - window.innerHeight))/100;
    window.scroll(0, value) 
}

