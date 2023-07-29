const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO
	results = fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));

	return results;
}

function searchHandler(e) {
	// TODO
	const inputVal = e.target.value.toLowerCase();
	const suggestion = search(inputVal);

	showSuggestions(suggestion, inputVal);

	if (!inputVal) {
		suggestions.innerHTML = "";
	}  
}

function showSuggestions(results, inputVal) {
	// TODO
	suggestions.innerHTML = "";

	for (let res of results) {
		let newLi =  document.createElement("li");

		let startIndex = res.toLowerCase().indexOf(inputVal);
		let boldRes = '';
		
		let endIndex = startIndex + inputVal.length; 
		boldRes = res.slice(0, startIndex) 
			+ '<strong>' + res.slice(startIndex, endIndex) + '</strong>'
			+ res.slice(endIndex);

		newLi.innerHTML = boldRes;
		suggestions.appendChild(newLi);
		
		newLi.addEventListener("mouseover", function(e) {
			closestLi = e.target.closest('li');
			closestLi.classList.add('highlight');
		});

		newLi.addEventListener("mouseout", function(e) {
			closestLi = e.target.closest('li');
			closestLi.classList.remove('highlight');
		});
	}
}

function useSuggestion(e) {
	// TODO
	closestLi = e.target.closest('li')
	if (closestLi.classList.contains('highlight')) {
		input.value = closestLi.textContent;
		suggestions.innerHTML = '';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);