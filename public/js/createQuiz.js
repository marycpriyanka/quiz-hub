const addQuiz = async (event) => {
    event.preventDefault();

    const category = document.querySelector('').value;
    const quiz_name = document.querySelector('').value.trim();
    
    if (category && quiz_name) {
        const response = await fetch('/api/quiz/quiz', {
            method: 'POST',
            body: JSON.stringify({ 
                category_id: category,
                quiz_name 
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            console.log('Quiz added')
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
};

const addQuestion = async (event) => {
    event.preventDefault();

    const question = document.querySelector('').value.trim();
    const choices = document.querySelector('').value.trim();
    const correctChoice = document.querySelector('').value.trim();

}