
async function getGitHunUserData(users){

	const promisesUsers = users.map(user => fetch(`https://api.github.com/users/${user}`).then(data=>data.json()));
	// const promiseUser1 = fetch("https://api.github.com/users/contactash").then(data => data.json());
	// const promiseUser2 = fetch("https://api.github.com/users/preetipatil").then(data => data.json());
	// //wait for both promises to come back
	// const result = await Promise.all([promiseUser1,promiseUser2]);
	const result = await Promise.all(promisesUsers);
	//console.log(result);
	showResult(result);
}

function catchErrors(fn){

	return function(...args){
		return fn(...args).catch(err => {
			console.log(`Error in function ${fn}`);
			console.error(err);
		});
	}
}

function showResult(data1){
    let result = "";
	Object.keys(data1).map((user) => {
		console.log(user);
		console.log(data1[user]);
		 const {avatar_url,name,blog,html_url} = data1[user];
		result += `<div><h3>USER ${user} </h3>
					<p>Image: ${avatar_url}</p>
					<p>Name: ${name}</p>
					<p>Url: ${html_url}</p>
				  </div>`;
		document.getElementById('result').innerHTML = result;
	 });
	console.log(result);
}

const getData = catchErrors(getGitHunUserData);

const data = getData(['preetipatil','contactash']);




