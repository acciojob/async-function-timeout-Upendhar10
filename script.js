//your JS code here. If required.

const output = document.getElementById('output');

const userForm = document.querySelector('form');

userForm.addEventListener("submit", function(e){
	e.preventDefault();
	const text = document.getElementById('text').value;
	const delay = parseInt(document.getElementById('delay').value, 10);

	PrintSomething(text, delay);
	
})

function PrintSomething(text, delay){
		setTimeout(() => {
			output.innerText = text;
		}, delay)
}


