QuizQuestionsArray=[{question:"What is the captial of Germany?",answers:"berlin"},
        {question:"What is the largest ocean on Earth?",answers:"pacific"},
        {question:"Which planet is known as the Red Planet?",answers:"mars"}
        ,{question:"What gas do plants release during photosynthesis?",answers:"oxygen"},
        {question:"What is the fastest land animal?",answers:"cheetah"},
        {question:"Which metal is liquid at room temperature?",answers:"mercury"}
        ,{question:"What is the tallest animal in the world?",answers:"giraffe"}
        ,{question:"What is the hardest natural substance?",answers:"diamond"},
        {question:"Which bird cannot fly?",answers:"ostrich"}
        ,{question:"Which planet has rings?",answers:"saturn"},
        {question:"What is the longest river in the world?",answers:"nile"},
        {question:"What is the main gas in Earth's atmosphere?",answers:"nitrogen"}


]
console.log("Welcome To Quizzlet")
console.log("Each question has one word correct answer ")
console.log("Each correct answer will give you a score of 5 points")
console.log("Each incorrect answer will give a score of -1 points")
console.log("Let's start")

function runQuiz(){
    let score=0
    for (let i=0;i<QuizQuestionsArray.length;i++){
        const userAnswer=prompt(QuizQuestionsArray[i].question);
    
    if (userAnswer && userAnswer.toLowerCase().trim()==QuizQuestionsArray[i].answers.toLowerCase().trim()){
        alert("Correct!");
        score=score+5
    }else{
        alert(`Wrong the correct answer is :${QuizQuestionsArray[i].answers}`);
    }
}


alert(`Quiz over, your score is ${score} out of 60`);
}
runQuiz();