function makeid(l) {
  // write your code here
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for(let i=0; i<l; i++)
		{
			const randomIndex = Math.floor(Math.random() * characters.length);
			const randomChar = characters.charAt(randomIndex);
			result+=randomChar;
		}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
