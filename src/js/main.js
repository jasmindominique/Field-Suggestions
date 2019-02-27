

const states = [
	"Alabama",
	"Alaska",
	"American Samoa",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"District Of Columbia",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Palau",
	"Pennsylvania",
	"Puerto Rico",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virgin Islands",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming"
]

console.log("it works");


let suggestionsDiv = document.querySelector('.suggestions');


let stateInput = document.querySelector('input#state');

// another way...
// let stateInput = document.querySelector('[name="state"]');

stateInput.addEventListener("keyup", function(){ //once found and a user presses a key...
	console.log("Got it (clicked)!");  //console.log when a change is made

	let partialStateName = stateInput.value; // get what was typed in the field - value is KEY!!!

	console.log('A partial was made here')


	suggestionsDiv.innerHTML = ""


	// quit here is they entered nothing

	if ( partialStateName === ""){
		return;
	}


	let filteredStates = states.filter(function(state) {
		if (state.toLowerCase().includes(partialStateName.toLowerCase() ) ){
			return true;
		} else{
			return false
		}

	})



		// b. Put the state name in it 
		// c. Put it in the suggestion div
	// 2. End of loop though filtered state

	// 1. Loop through each array = for each loop

	filteredStates.forEach(function(state){

		// a. Create anchor tag for each once
		let newSuggestionAnchor = document.createElement('a');
		newSuggestionAnchor.innerText= state;

		suggestionsDiv.appendChild( newSuggestionAnchor );

		newSuggestionAnchor.addEventListener('click' , function(){
			console.log('the user has clicked', state)


			stateInput.value = state; // suggestion gets put into the field


			suggestionsDiv.innerHTML = "" // clear text once a user clicks a suggestion



		})

	})

	console.log('got it', filteredStates)


})


// Body Styling

document.body.style.backgroundImage = "url(http://www.vectorfree.com/media/vectors/modern-cartoon-city.jpg)";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.fontFamily = "Raleway", sans-serif;






