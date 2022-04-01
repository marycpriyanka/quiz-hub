const calculateAndSaveScore = async () => {
    // Calculate score
    let score = 0;
    const questions = document.querySelectorAll("h2[id^=question-]");

    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i]);
        const id = questions[i].id;
        const answer = questions[i].getAttribute("data-answer");

        const userChoice = document.querySelector(`input[name^=${id}]:checked`);

        if (answer === userChoice.value) {
            score++;
        }
    }

    // Gets the quiz id
    const quiz_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    // Save score
    const response = await fetch('/api/quiz/scores', {
        method: 'POST',
        body: JSON.stringify({ 
            total_score: score, 
            quiz_id: quiz_id 
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace("/");
    }
};

document.querySelector("#submitanswersbtn").addEventListener("click", calculateAndSaveScore);