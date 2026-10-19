let index = 0;
let userAnswers = new Array(quizData.length).fill(null);

const beboMessages = {
    resultsAdvice: [
        "نتيجتك دى يسطا ولا درجه حراره.",
        "منت لو تبص على التلميحات وانت بتحل مكنتش جبت درجات الحراره دى.",
        "تعي اشب شاى يسطا بالى انت عامله ده.",
        "متزعلش مش مهم درجتك فى الامتحان المهم الصحه والستر.",
        "هيجى شخص يحسسك انك ف كفه والكون كله فى كفه وبعدين يسقفلك بالكفتين على وشك علشان النتيجه الى انت جايبها دى."
    ],
    resultsSuccess: [
        "مشاء الله عليك ",
        "هايل بجد عاش عليك.",
        "شيئ جميل جدا عندك احسن منكده كمان  عاش عليك  ."
    ]
};

function toggleHint() {
    document.getElementById('hint-panel').classList.toggle('active');
}

function init() {
    document.getElementById('total-idx').innerText = quizData.length.toString().padStart(2, '0');
    document.querySelector('.bebo-wrapper').classList.add('hidden');
    render();
}

function render() {
    const data = quizData[index];
    document.getElementById('current-idx').innerText = (index + 1).toString().padStart(2, '0');

    document.getElementById('question-text').innerHTML = `
        <div class="q-en-main">${data.question}</div>
        <div class="q-ar-box">${data.arabicQuestion}</div>
    `;

    document.getElementById('hint-text').innerHTML = `
        <div class="hint-info">${data.hint}</div>
        <div class="hint-extra">${data.arabicHint}</div>
    `;
    document.getElementById('hint-panel').classList.remove('active');

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const answered = userAnswers[index] !== null;

    document.getElementById('btn-next').disabled = !answered;
    document.getElementById('btn-next').innerText = index === quizData.length - 1 ? "FINALIZE" : "NEXT";
    document.getElementById('btn-prev').disabled = index === 0;

    const btnSkip = document.getElementById('btn-skip');
    if (answered) {
        btnSkip.classList.add('hidden');
    } else {
        btnSkip.classList.remove('hidden');
        btnSkip.innerText = "SKIP";
    }

    container.className = "options-grid";
    Object.entries(data.options).forEach(([key, option]) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `
            <div class="option-main">
                <span class="char-idx">${key}</span>
                <span>${option}</span>
            </div>
            <div class="option-translation">${data.arabicOptions[key]}</div>
        `;
        if (answered) {
            button.disabled = true;
            if (key === data.correctAnswer) button.classList.add('correct');
            if (userAnswers[index] === key && key !== data.correctAnswer) button.classList.add('wrong');
        } else {
            button.onclick = () => select(key);
        }
        container.appendChild(button);
    });

    const percentage = Math.round((index + 1) / quizData.length * 100);
    document.getElementById('progress-text').textContent = percentage + '%';
    const circumference = 283;
    document.getElementById('progress-circle-fill').style.strokeDashoffset =
        circumference - (percentage / 100) * circumference;
}

function select(choice) {
    if (userAnswers[index] !== null) return;
    userAnswers[index] = choice;
    render();
}

function move(direction) {
    if (direction === 1 && index === quizData.length - 1) {
        finish();
        return;
    }
    index += direction;
    render();
}

function finish() {
    document.getElementById('quiz-ui').classList.add('hidden');
    document.getElementById('results-ui').classList.remove('hidden');
    document.querySelector('.bebo-wrapper').classList.add('hidden');

    const score = userAnswers.filter((answer, questionIndex) => answer === quizData[questionIndex].correctAnswer).length;
    const percentage = Math.round(score / quizData.length * 100);
    document.getElementById('final-pct').innerText = percentage + '%';
    const category = percentage >= 85 ? 'resultsSuccess' : 'resultsAdvice';
    const messages = beboMessages[category];
    document.getElementById('final-feedback').innerText = messages[Math.floor(Math.random() * messages.length)];

    const audio = document.getElementById(percentage >= 80 ? 'audio-success' : 'audio-fail');
    audio?.play().catch(() => {});

    const actionButton = document.getElementById('results-action');
    actionButton.innerText = 'RESTART ASSESSMENT';
    actionButton.onclick = () => location.reload();
}

window.onload = init;
