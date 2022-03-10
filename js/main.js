const adviceBtn = document.getElementById('adviceBtn');

const loadAdvice = async () => {
	try {
		let advice = await fetch('https://api.adviceslip.com/advice', { cache: 'reload' });

		let data = await advice.json();
		console.log(data);

		let adviceID = data.slip.id;
		let adviceText = data.slip.advice;

		document.getElementById('adviceID').innerHTML = adviceID;
		document.getElementById('adviceText').innerHTML = adviceText;
	} catch (error) {
		console.log(error);
	}
};

adviceBtn.addEventListener('click', () => {
	// location.reload();
	loadAdvice();
});

loadAdvice();
