var questions = [{
    ques: "What nickname does Daenerys Targaryen NOT go by?",
    ans: ["The Mother of Dragons", "Mhysa", "The Lioness", "The Unburnt"],
    name: "Daenerys",
    correct: "The Lioness",
    divClass: ".Daenerys"
},
{
    ques: "What is the motto of House Stark?",
    ans: ["Winter is here", "We do not sow", "As high as honor", "Winter is coming"],
    name: "stark",
    correct: "Winter is coming",
    divClass: ".stark"
},
{
    ques: "What is the name of Arya Stark's direwolf?",
    ans: ["Nymeria", "Lady", "Summer", "Shaggydog"],
    name: "Arya",
    correct: "Nymeria",
    divClass: ".Arya"
},
{
    ques: "What is the largest castle in Westeros?",
    ans: ["The Red Keep", "Harrenhal", "Casterly Rock", "Pyke"],
    name: "castle",
    correct: "Harrenhal",
    divClass: ".castle"
},
{
    ques: "What was the Bay of Dragons formerly called?",
    ans: ["Slaver's Bay", "Blackwater Bay", "The Narrow Sea", "Blazewater Bay"],
    name: "Bay",
    correct: "Slaver's Bay",
    divClass: ".Bay"
},
{
    ques: "What is the nickname of Brienne of Tarth's homeland?",
    ans: ["Bear island", "The Summer Isle", "The Sapphire Isle", "The Lost Island"],
    name: "Brienne",
    correct: "The Sapphire Isle",
    divClass: ".Brienne"
},
{
    ques: "Why is Petyr Baelish nicknamed Littlefinger?",
    ans: ["Because he has little finger", "Because of where he grew up", "Because that's the name of his brothel", "Because he cut off a man's pinky"],
    name: "littlefinger",
    correct: "Because of where he grew up",
    divClass: ".littlefinger"
},
{
    ques: "Who beheads Ned Stark?",
    ans: ["Joffery Baratheon", "Yoren", "Ser Illyn Payne", "The Mountain"],
    name: "Ned",
    correct: "Ser Illyn Payne",
    divClass: ".Ned"
},
{
    ques: "Who is Gendry's father?",
    ans: ["Robert Baratheon", "Renly Baratheon", "Rhaegar Targaryen", "Sidhu Moose Wala"],
    name: "Gendry",
    correct: "Robert Baratheon",
    divClass: ".Gendry"
},
{
    ques: "What is NOT one of the names of Dany's three dragons?",
    ans: ["Dracarys", "Viserion", "Rhaegal", "Drogon"],
    name: "Dragons",
    correct: "Dracarys",
    divClass: ".Dragons"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz