const addMoreQuestion = async (event) => {
    try {
        event.preventDefault();

        const question = document.querySelector('#question').value.trim();
        const correctAnswer = document.querySelector('#correctAnswer').value.trim();
        const wrongAnswerA = document.querySelector('#wrong1').value.trim();
        const wrongAnswerB = document.querySelector('#wrong2').value.trim();
        const wrongAnswerC = document.querySelector('#wrong3').value.trim();

        const quiz_id = window.location.toString().split('/')[
            window.location.toString().split('/').length -1
        ];

        if (question && correctAnswer && wrongAnswerA && wrongAnswerB && wrongAnswerC && quiz_id) {

            const response = await fetch('/api/quiz/questions/:quiz_id', {
                method: 'POST',
                body: JSON.stringify({ 
                    question_text: question,
                    choice1: correctAnswer,
                    choice2: wrongAnswerA,
                    choice3: wrongAnswerB,
                    choice4: wrongAnswerC,
                    correct_answer: correctAnswer,
                    quiz_id
                }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                console.log('Question added');
                document.location.reload();
            }
        }
    } catch (err) {
        console.log(err);
    }
};

const submitQuestion = async (event) => {
    try {
        event.preventDefault();

        const question = document.querySelector('#question').value.trim();
        const correctAnswer = document.querySelector('#correctAnswer').value.trim();
        const wrongAnswerA = document.querySelector('#wrong1').value.trim();
        const wrongAnswerB = document.querySelector('#wrong2').value.trim();
        const wrongAnswerC = document.querySelector('#wrong3').value.trim();

        const quiz_id = window.location.toString().split('/')[
            window.location.toString().split('/').length -1
        ];


        if (question && correctAnswer && wrongAnswerA && wrongAnswerB && wrongAnswerC && quiz_id) {

            const response = await fetch('/api/quiz/questions/:quiz_id', {
                method: 'POST',
                body: JSON.stringify({ 
                    question_text: question,
                    choice1: correctAnswer,
                    choice2: wrongAnswerA,
                    choice3: wrongAnswerB,
                    choice4: wrongAnswerC,
                    correct_answer: correctAnswer,
                    quiz_id
                }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                console.log('Question added');
                document.location.replace('/')
            }
        }
    } catch (err) {
        console.log(err);
    }
};


document.querySelector('#newQ').addEventListener('click', addMoreQuestion);
document.querySelector('#submitQ').addEventListener('click', submitQuestion);
