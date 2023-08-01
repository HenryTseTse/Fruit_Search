const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// .filter to meet criteria, case-insensitive 
	results = fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));

	return results;
}

// handles search bar input
function searchHandler(e) {
	// case-insenstive input
	const inputVal = e.target.value.toLowerCase();
	const suggestion = search(inputVal);

	showSuggestions(suggestion, inputVal);

	// don't show suggestion if input is blank
	if (!inputVal) {
		suggestions.innerHTML = "";
	}  
}

function showSuggestions(results, inputVal) {
	// clear suggestions for each input value
	suggestions.innerHTML = "";

	// loop over each suggestion to add bold text to same string as input
	for (let res of results) {
		// create new list element for each result
		let newLi =  document.createElement("li");

		let startIndex = res.toLowerCase().indexOf(inputVal);
		let endIndex = startIndex + inputVal.length;
		let boldRes = '';
		
		// slice part of string to add <strong> text to same string input
		boldRes = res.slice(0, startIndex) 
			+ '<strong>' + res.slice(startIndex, endIndex) + '</strong>'
			+ res.slice(endIndex);

		newLi.innerHTML = boldRes;
		suggestions.appendChild(newLi);
		
		// add highlight class to list item when mouseover
		newLi.addEventListener("mouseover", function(e) {
			closestLi = e.target.closest('li');
			closestLi.classList.add('highlight');
		});

		// remove highlight class to list item when mouseout
		newLi.addEventListener("mouseout", function(e) {
			closestLi = e.target.closest('li');
			closestLi.classList.remove('highlight');
		});
	}
}

function useSuggestion(e) {
	// replaces input value with list item when clicked
	closestLi = e.target.closest('li')
	if (closestLi.classList.contains('highlight')) {
		input.value = closestLi.textContent;
		suggestions.innerHTML = '';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);