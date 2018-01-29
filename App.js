const container = document.querySelector('#name');
const ul = document.getElementById('cards');
const url = 'https://swapi.co/api/people/';

//-------  AXIOS Method  -------//
// window.onload = () =>
// 	axios.get('https://swapi.co/api/people/1/').then(function myfunc(response) {
// 		console.log(response.data);
// 		container.innerText = response.data.name;
// 	});
//-------------------------------

// url (required), options (optional)
fetch(url, {
	method: 'get'
})
	.then(function(response) {
		return response.json();
	})
	.then(function(response) {
		//return console.log(response);
		let cards = response.results;
		return cards.map(function(card) {
			let li = createNode('li');
			span = createNode('span');
			span.innerHTML = `${card.name}`;
			append(li, span);
			append(ul, li);
		});
	})
	.catch(function(err) {
		// Error :(
	});

function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}
