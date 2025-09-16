//your JS code here. If required.


const userForm = document.querySelector('form');

userForm.addEventListener("submit", function(){
	const text = document.getElementById('text').value;
	const delay = document.getElementById('delay').value;

	const output = document.getElementById('output');

	PrintSomething(text, delay);
	
})

function PrintSomething(text, delay){
		setTimeout(() => {
			output.innerText = text;
		}, delay)
}


