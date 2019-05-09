const postpromise = fetch("https://jsonplaceholder.typicode.com/users");
postpromise
	.then(data =>  data.json())
    .then(data => {
    	console.log(data);
    	let result = `<h2>User Info From Jsonplaceholder API</h2>`;
		data.forEach((user) => {
		    const { id, name, email, address: { city, street } } = user
		    result +=
		        `<div>
		         <h5> User ID: ${id} </h5>
		             <ul class="w3-ul">
		                 <li> User Full Name : ${name}</li>
		                 <li> User Email : ${email} </li>
		                 <li> User Address : ${city}, ${street} </li>
		             </ul>
		          </div>`;
		            document.getElementById('result').innerHTML = result;
		        });
		 }


    )
    .catch((err) => {
    	console.error(err);
    })