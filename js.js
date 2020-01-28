var btn = document.querySelectorAll('.game');
console.log(btn);

btn.onclick=function()
{
	var line = document.querySelector('.for-js');
	btn.classList.toggle(line);
}