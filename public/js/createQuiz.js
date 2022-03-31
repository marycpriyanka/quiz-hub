const addQuiz = async (event) => {
    event.preventDefault();

    const quiz = document.querySelector('#quizName').value.trim();
    const category = document.querySelector('#selectedCategory').value;

    console.log(quiz);
    console.log(category);

    if (quiz && category) {
        fetch('/api/quiz/quiz', {
            method: 'POST',
            body: JSON.stringify({
                quiz_name: quiz,
                category_id: category
            }),
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data.id);

            if (data) {
                console.log('Quiz added')
                document.location.replace(`/createQuestions/${data.id}`)
            }

        });
    }
};

document.querySelector('.quizform').addEventListener('submit', addQuiz);