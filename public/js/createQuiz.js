const addQuiz = async (event) => {
    event.preventDefault();

    const quiz = document.querySelector('#quizName').value.trim();
    const category = document.querySelector('#selectedCategory').value;

    console.log(quiz);
    console.log(category);

    if (quiz && category) {
        const response = await fetch('/api/quiz/quiz', {
            method: 'POST',
            body: JSON.stringify({ 
                quiz_name: quiz,
                category_id: category
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

document.querySelector('.quizform').addEventListener('submit', addQuiz);