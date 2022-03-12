const adviceBtn = document.getElementById('adviceBtn');
const adviceID = document.getElementById('adviceID');
const adviceText = document.getElementById('adviceText');

const loadAdvice = async () => {
	adviceID.innerHTML = '';
	adviceText.innerHTML = '...';

	try {
		let advice = await fetch('https://api.adviceslip.com/advice', { cache: 'reload' });

		/* This advice has a bug related to charset */
		// let advice = await fetch('https://api.adviceslip.com/advice/146', { cache: 'reload' });

		let data = await advice.json();
		console.log(data);

		adviceID.innerHTML = data.slip.id;
		adviceText.innerHTML = `“${data.slip.advice}”`;
	} catch (error) {
		adviceID.innerHTML = '0';
		adviceText.innerHTML = `<i>An error has occurred, please try again.</i>`;
		console.log(error);
	}
};

adviceBtn.addEventListener('click', () => {
	loadAdvice();
});

loadAdvice();
