let elemDiv = document.getElementsByTagName("div")[0];
p1.innerHTML = elemDiv.firstElementChild.innerHTML;
p3.innerHTML = elemDiv.lastElementChild.innerHTML;

p1.innerHTML = elemDiv.firstElementChild.previousElementSibling.innerHTML;
p1.innerHTML += elemDiv.firstElementChild.nextElementSibling.innerHTML;
