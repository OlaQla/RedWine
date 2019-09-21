function loadNextQuestion(questionNumber, questions, answersButtons, quiz) {
    // Set question field to one at current question index
    quiz.find(".question").html(questions[questionNumber].question);
    
    // Set possible answers in answer buttons to ones at current question index
    answersButtons.each(function(index, button){
        $(button).html(questions[questionNumber].answers[index]);
    });
}

$(document).ready(function () {
    // jQuery wrapped quiz section
    var quiz = $(".quiz");

    // jQuery wrapped answers button
    var answersButtons = quiz.find(".answer");
    
    // State of user points collected in a quiz
    var points = 0;

    // State of quiz question
    var questionNumber = 0;
    
    // List of questions and answers
    var questions = [{ question: "1/5 Which would be the best temperature to store red wine?", answers: ["12-14 degrees Celcius", "7-10 degrees Celcius", "20-23 degrees Celcius", "15-18 degrees Celcius"], correctId: 1 },
    { question: "2/5 Which is NOT a variety of grape used for wine production?", answers: ["Merlot", "Pinot Noir", "Shiraz", "Shirazonnay"], correctId: 3 },
    { question: "3/5 The vintage date on a wine bottle indicate:", answers: ["The date the vineyard was founded", "The year the wine was botteled", "The year the grapes were picked", "The year the wine has been ranked"], correctId: 2 },
    { question: "4/5 How many calories are in 118ml of red wine?", answers: ["85 calories", "71 calories", "53 calories", "115 calories"], correctId: 0 },
    { question: "5/5 About how many litres of wine can be produced from 1ha of grapevines?", answers: ["270 liters", "840 liters", "2500 liters", "1450 liters"], correctId: 3 }];
    
    // End of quiz texts
    var expert = 'You are an expert!';
    var wellDone = 'Well done!';
    var tryAgain = 'Try again...';
    var message;
    
    // fill in questions and answers to html
    loadNextQuestion(questionNumber, questions, answersButtons, quiz);

    // startAgain button

    quiz.find('.startAgain').click(function () {
        points = 0; // set again pionts to 0
        questionNumber = 0; // set again  questionNumber 0

        quiz.find(".questions").show(); // show questions section
        quiz.find(".score").hide(); // hide score section

        // fill in questions and answers to html
        loadNextQuestion(questionNumber, questions, answersButtons, quiz);
    });

    // Initialize answer buttons
    answersButtons.each(function(index, button){
        $(button).click(function () {
            //  check if this answer is correct 
            if (index == questions[questionNumber].correctId) {
                ++points; // if answer is correct add point
    
            }
            ++questionNumber; // go to next question
    
            if (questionNumber == questions.length) { // check if tis question is the last question
                quiz.find(".questions").hide(); // if yes hide question section
                quiz.find(".score").show(); // show score section
                quiz.find(".scoreValue").text(points / 5 * 100); // show points value in %
    
                // Show final message  
                if (points <= 1) {
                    message = tryAgain;
                } else if (points > 1 && points <= 4) {
                    message = wellDone;
                } else {
                    message = expert;
                }
                quiz.find('.scoreText').text(message);
    
            } else {
                loadNextQuestion(questionNumber, questions, answersButtons, quiz);
            }
        });
    });
});