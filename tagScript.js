/****************************************************************/

const customer = "Tom";
const orderNo = "12345567";
const orderRef = "XYZ1234";
const deliveryOptions = {
	"Free Delivery" : "Free. Details: 3 to 5 business days after dispatch.",
	"First Class" : "Cost: £6. Details: 1 business day after dispatch.",
	"Standerd Delivery" : "Cost: £3. Details: 2 to 3 business day after dispatch.",
	"Express Delivery" : "Cost: £10. Details:  arrive next day.",
}

let statement = anchorText`<div>Hello ${customer}, Your Order Number is: ${orderNo} and Order Reference is : ${orderRef}.
<p>Please see delivery options below:<br/>
- ${"Free Delivery"}<br/>
- ${"First Class"}<br/>
- ${"Standerd Delivery"}<br/>
- ${"Express Delivery"}<br/>
</p></div>`;


function anchorText(strings, ...values){
	let str= "";
	let myarray = values.map(value => {
		if(deliveryOptions[value]) { 
			return `<abbr title="${deliveryOptions[value]}" class="hyper" >${value}</abbr>`;
		}else{
			return `<span class="show">${value}</span>`;
		}
		return value;
	});

	//highlight
	for (let i=0; i<strings.length; i++) {
		if (i > 0) 
	    	str += myarray[i-1];
	    str += strings[i];
	} 	
	return str;
}
document.getElementById("demo").innerHTML = statement;


/****************************************************************/