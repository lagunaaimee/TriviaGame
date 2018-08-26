$('#start').on('click', function () {
    game.start();
})

$(document).on('click', '#end', function () {
    game.done();
})

var questions = [{
    question: "Who was the killer in the original Friday the 13th?",
    answers: ["Jason ", "Freddy ", "Michael ", "Pamela"],
    correctAnswer: "Pamela"
}, 
{
    question: "In Scream, what did the killer use as his weapon?",
    answers: ["Gun ", "Scissors ", "Knife", "Poison "],
    correctAnswer: "Knife"
}, 
{
    question: "What was the main characters name in Evil Dead?",
    answers: ["Trey ", "Mark ", "Rich ", "Ash"],
    correctAnswer: "Ash"
}, 
{
    question: "What musician remade the horror classic, Halloween?",
    answers: ["Rob Zombie", "Ozzy Osbourn ", "Marilyn Manson ", "Alice Cooper "],
    correctAnswer: "Rob Zombie"
}, 
{
    question: "What was the model of the car in Christine?",
    answers: ["Road Master ", "Deville ", "Fairlane ", "Fury"],
    correctAnswer: "Fury"
}, 
{
    question: "What is Freddy Kreuger's middle name?",
    answers: ["Rogan ", "Robert ", "Noble ", "Charles"],
    correctAnswer: "Charles"
}, {
    question: "In what town did The Texas Chainsaw Massacre take place?",
    answers: ["Dripping Springs ", "Luckenbach ", "Kingsland", "Amarillo "],
    correctAnswer: "Kingsland"
}, 
{
    question: "What breed of dog was Cujo?",
    answers: ["English Lab ", "St. Bernard", "Pit Bull ", "Rottweiler "],
    correctAnswer: "St. Bernard"
}];

var game = {
    correct: 0,
    wrong: 0,
    counter: 90,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time's Up");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<br><h2>Time Remaining: <span id="counter">90</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<br><h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>'" + questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><button id="end">Done!</button>');
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });

        this.result();
    },
    result: function () {
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>Time's Up!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Wrong Answers: " + this.wrong + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.wrong + this.correct)) + "</h3>");
    }

}