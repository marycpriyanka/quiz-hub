const addQuestion = async (event) => {
    event.preventDefault();

    const question = document.querySelector('#question').value.trim();
    const correctAnswer = document.querySelector('#correctAnswer').value.trim();
    const wrongAnswerA = document.querySelector('#wrong1').value.trim();
    const wrongAnswerB = document.querySelector('#wrong2').value.trim();
    const wrongAnswerC = document.querySelector('#wrong3').value.trim();

    console.log(quiz);
    console.log(category);

    if (quiz && category) {
        const response = await fetch('/api/quiz/questions/:quiz_id', {
            method: 'POST',
            body: JSON.stringify({ 
                question_text: question,
                choice1: correctAnswer,
                choice2: wrongAnswerA,
                choice3: wrongAnswerB,
                choice4: wrongAnswerC,
                correct_answer: correctAnswer
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            console.log('Quiz added')
            document.location.replace('/')
        } else {
            alert(response.statusText);
            console.log(response.body);
            console.log({quiz_name: quiz}, {category_id: category})
        }
    }
};

document.querySelector('.quizform').addEventListener('submit', addQuestion);