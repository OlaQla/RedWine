$(document).ready(function () {
    var quiz = $(".quiz");
    var answersButtons = quiz.find(".answer")
    var points = 0;
    var questionNumber = 0;
    var questions = [{ question: "Q1", answers: ["a1", "a2", "a3", "a4"], correctId: 2 },
                     { question: "Q2", answers: ["b1", "b2", "b3", "b4"], correctId: 1 },
                     { question: "Q3", answers: ["c1", "c2", "c3", "c4"], correctId: 3 },
                     { question: "Q4", answers: ["d1", "d2", "d3", "d4"], correctId: 5 },
                     { question: "Q5", answers: ["e1", "e2", "e3", "e4"], correctId: 4 }];

    console.log(JSON.stringify(questions));

    quiz.find(".question").html(questions[questionNumber].question);
    answersButtons.eq(0).html(questions[questionNumber].answers[0]);
    answersButtons.eq(1).html(questions[questionNumber].answers[1]);
    answersButtons.eq(2).html(questions[questionNumber].answers[2]);
    answersButtons.eq(3).html(questions[questionNumber].answers[3]);

    console.log(answersButtons)

    answersButtons.eq(0).click(function () {
        console.log(`Button 0, question number: ${questionNumber}`)
            
        if (0 == questions[questionNumber].correctId) {
            ++points;
            console.log(`Points now: ${points}`)
        }
        ++questionNumber;
        console.log(`Question number: ${questionNumber}`)
        if (questionNumber == questions.length){
            quiz.find(".questions").hide();
            quiz.find(".score").show();
        }else{
            quiz.find(".question").html(questions[questionNumber].question);
            answersButtons.eq(0).html(questions[questionNumber].answers[0]);
            answersButtons.eq(1).html(questions[questionNumber].answers[1]);
            answersButtons.eq(2).html(questions[questionNumber].answers[2]);
            answersButtons.eq(3).html(questions[questionNumber].answers[3]);
        }
    })

    answersButtons.eq(1).click(function () {
        if (1 == questions[questionNumber].correctId) {
        }
    })
})