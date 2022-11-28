

function openForm()
	{
	  document.getElementById("myForm").style.display = "block";
	}

function closeForm()
	{
	  document.getElementById("myForm").style.display = "none";
	}

function myFunction()
	{
	  var element = document.body;
	  element.classList.toggle("dark-mode");
	}
	
 function plusSlides(n, no)
 	{
 	  showSlides(slideIndex[no] += n, no);
 	}

 function currentSlide(n, no)
 	{
 	  showSlides(slideIndex[no] = n, no);
 	}

 function showSlides(n, no)
 	{
 	  var i;
 	  var x = document.getElementsByClassName(slideId[no]);
 	  if (n > x.length) {slideIndex[no] = 1}
 	  if (n < 1) {slideIndex[no] = x.length}
 	  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }

   	x[slideIndex[no]-1].style.display = "block";
	}

