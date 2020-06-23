var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

//(function (window) {
//	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
//	var helloSpeaker ={};
//	var speakWord = "Hello";
//	helloSpeaker.speak = function() {
//		console.log(speakWord + " " + names);
//	}
//	helloSpeaker.speak();
//	window.helloSpeaker = helloSpeaker;

	
//}) (window);//


//(function (window) {
//	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
//	var byeSpeaker ={};
//	var speakWord = "Good Bye";
//	byeSpeaker.speak = function() {
//		console.log(speakWord + " " + names);
//	}
//	byeSpeaker.speak();
//	window.byeSpeaker = byeSpeaker;
//
//	
//})/ (window);
//

for (var i = 0; i < names.length; i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();
	if (firstLetter === 'j') {
   		console.log("good bye" + names[i]);
 	} else {
    	console.log("hello" + names[i]);
  	}
}