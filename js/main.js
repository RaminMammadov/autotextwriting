const content = document.getElementById('content');
const form = document.forms['write'];
let text = 'auto text writing...';
let i = 0;


form.addEventListener('submit',(e) => {
	e.preventDefault();
	const val = form['text'].value;
	text = val;
})

writeText = () => {
	content.innerHTML += text[i]
	i++;

	if(i > text.length) {
		i = 0;
		content.innerHTML = '';
	}
}

setInterval(writeText, 100);
