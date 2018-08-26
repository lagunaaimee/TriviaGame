$('#start').on('click', function(){
    $('#subwrapper').remove();
   for(var i=0; i < question.length; i++){
      $('#subwrapper').append('<h2>' + questions[i].questions+ '</h2>');
    }
})

var questions = [{
    question: "Who was the killer in the original Friday the 13th?",
    answers: ["Jason", "Freddy", "Michael", "Pamela"],
    correctAnswer: "Pamela"
}, {
    question: "In Scream, what did the killer use as his weapon?",
    answers: ["Gun", "Scissors", "Knife", "Poison"],
    correctAnswer: "Knife"
}, {
    question: "What was the main characters name in Evil Dead?",
    answers: ["Trey", "Mark", "Rich", "Ash"],
    correctAnswer: "Ash"
}, {
    question: "What musician remade the horror classic, Halloween?",
    answers: ["Rob Zombie", "Ozzy Osbourn", "Marilyn Manson", "Alice Cooper"],
    correctAnswer: "Rob Zombie"
}, {
    question: "What was the model of the car in Christine?" ,
    answers: ["Road Master", "Deville", "Fairlane", "Fury"],
    correctAnswer: "Fury"
}, {
    question: "What is Freddy Kreuger's middle name?" ,
    answers: ["Rogan", "Robert", "Noble", "Charles"],
    correctAnswer: "Charles"
}, {
    question: "In what town did The Texas Chainsaw Massacre take place?",
    answers: ["Dripping Springs", "Luckenbach", "Kingsland", "Amarillo"],
    correctAnswer: "Kingsland" 
}, {
    question: "What breed of dog was Cujo?",
    answers: ["English Lab", "St. Bernard", "Pit Bull", "Rottweiler"],
    correctAnswer: "St. Bernard"
}];
