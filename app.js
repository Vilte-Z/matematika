
const $ = id => document.getElementById(id);

const KEY = 'matematikos_praktika_isspresti_v2';
const OLD_KEY = 'matematikos_praktika_isspresti_v1';

let completed = new Set();
let course = '11-A';
let topic = null;
let current = null;
let selected = null;
let correct = false;

// Kuris neišspręstas uždavinys šiuo metu rodomas
let questionIndex = 0;

// Progreso nuskaitymas
try {
    completed = new Set(JSON.parse(localStorage.getItem(KEY) || '[]'));
} catch {}

// Seno progreso perkėlimas
try {
    const old = JSON.parse(localStorage.getItem(OLD_KEY) || '[]');

    for (const id of old) {
        for (const c of ['11-A', '11-B']) {
            completed.add(`${c}-${id}`);
        }
    }
} catch {}

// Progreso išsaugojimas
function save() {
    try {
        localStorage.setItem(KEY, JSON.stringify([...completed]));
        return true;
    } catch {
        return false;
    }
}

// Matematinių formulių atvaizdavimas
function renderMath(el) {
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(el, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false
        });
    }
}

// Uždavinių filtravimas
function courseQuestions() {
    return QUESTIONS.filter(q => q.course === course);
}

function topicQuestions() {
    return courseQuestions().filter(q => q.topic === topic);
}

function pendingQuestions() {
    return topicQuestions().filter(q => !completed.has(q.id));
}

// Kursų pasirinkimas
function drawCourses() {
    $('courses').replaceChildren();

    for (const [year, level] of [
        ['11', 'B'],
        ['11', 'A'],
        ['12', 'B'],
        ['12', 'A']
    ]) {
        const key = year + '-' + level;
        const b = document.createElement('button');

        b.className = 'course' + (course === key ? ' active' : '');

        b.innerHTML = `
            <strong>${year} klasė</strong>
            <span>${level} lygis</span>
            <small>
                ${level === 'A' ? 'Išplėstinis kursas' : 'Bendrasis kursas'}
            </small>
        `;

        b.onclick = () => {
            course = key;
            topic = null;
            questionIndex = 0;
            draw();
        };

        $('courses').append(b);
    }
}

// Temų pasirinkimas
function drawTopics() {
    $('topics').replaceChildren();

    for (const [group, names] of Object.entries(CURRICULUM[course])) {
        const wrap = document.createElement('div');
        const heading = document.createElement('div');
        const grid = document.createElement('div');

        heading.className = 'category-title';
        heading.textContent = group;
        grid.className = 'topic-grid';

        for (const name of names) {
            const arr = courseQuestions().filter(q => q.topic === name);
            const done = arr.filter(q => completed.has(q.id)).length;

            const b = document.createElement('button');
            b.className = 'topic' + (topic === name ? ' active' : '');

            const txt = document.createElement('span');
            txt.textContent = name;

            const stat = document.createElement('span');
            stat.className = 'count' + (arr.length ? ' ready' : '');
            stat.textContent = arr.length ? `${done}/${arr.length}` : '—';

            b.append(txt, stat);

            b.onclick = () => {
                topic = name;
                questionIndex = 0;
                drawTopics();
                drawQuiz();
            };

            grid.append(b);
        }

        wrap.append(heading, grid);
        $('topics').append(wrap);
    }
}

// Bendras kursų progresas
function updateSummary() {
    const arr = courseQuestions();
    const done = arr.filter(q => completed.has(q.id)).length;

    $('overall').textContent =
        `Šio kurso pažanga: ${done} / ${arr.length} uždavinių`;
}

// Uždavinio rodymas
function drawQuiz() {
    current = null;
    selected = null;
    correct = false;

    $('question-content').hidden = true;
    $('empty').hidden = false;

    $('topic-title').textContent = topic || 'Pasirink temą';
    $('breadcrumb').textContent =
        course.replace('-', ' klasė · ') + ' lygis';

    const arr = topic ? topicQuestions() : [];
    const done = arr.filter(q => completed.has(q.id)).length;

    const percent = arr.length
        ? Math.round(100 * done / arr.length)
        : 0;

    $('progress-percent').textContent = arr.length ? percent + '%' : '';
    $('progress-bar').style.width = percent + '%';

    $('progress-text').textContent = arr.length
        ? `Išspręsta ${done} iš ${arr.length}`
        : '';

    if (!topic) {
        $('empty').textContent = 'Pasirink temą iš sąrašo.';
        return;
    }

    if (!arr.length) {
        $('empty').textContent = 'Šiai temai uždavinių dar nėra.';
        return;
    }

    const pending = pendingQuestions();

    if (!pending.length) {
        $('empty').textContent = 'Visi šios temos uždaviniai išspręsti!';
        return;
    }

    // Užtikriname, kad indeksas neviršytų sąrašo
    questionIndex = questionIndex % pending.length;

    current = pending[questionIndex];

    $('empty').hidden = true;
    $('question-content').hidden = false;

    $('counter').textContent = `Liko uždavinių: ${pending.length}`;
    $('question').textContent = current.question;

    const opts = $('options');
    opts.replaceChildren();

    current.options.forEach((value, i) => {
        const b = document.createElement('button');
        b.className = 'option';

        const letter = document.createElement('span');
        const content = document.createElement('span');

        letter.className = 'letter';
        letter.textContent = 'ABCD'[i];

        content.textContent = value;

        b.append(letter, content);

        b.onclick = () => {
            if (correct) return;

            selected = i;

            [...opts.children].forEach((x, n) => {
                x.classList.toggle('selected', n === i);
            });

            $('check').disabled = false;
            $('feedback').textContent = '';
            $('feedback').className = '';
        };

        opts.append(b);
    });

    $('check').hidden = false;
    $('check').disabled = true;

    $('next').hidden = true;
    $('skip').hidden = false;

    $('feedback').textContent = '';
    $('feedback').className = '';

    renderMath($('question'));
    renderMath(opts);
}

// Pagrindinis atvaizdavimas
function draw() {
    drawCourses();
    drawTopics();
    updateSummary();
    drawQuiz();
}

// Atsakymo tikrinimas
$('check').onclick = () => {
    if (!current || selected === null || correct) return;

    if (selected !== current.correct) {
        $('feedback').textContent = 'Neteisingai. Bandyk dar kartą.';
        $('feedback').className = 'wrong';
        return;
    }

    correct = true;
    completed.add(current.id);

    const ok = save();

    $('feedback').textContent = ok
        ? 'Teisingai!'
        : 'Teisingai, bet nepavyko išsaugoti progreso.';

    $('feedback').className = 'right';

    [...$('options').children].forEach(b => b.disabled = true);

    $('check').hidden = true;
    $('skip').hidden = true;
    $('next').hidden = false;

    // Po teisingo atsakymo liekame prie to paties indekso,
    // nes dabartinis klausimas pašalinamas iš pending sąrašo.

    updateSummary();
    drawTopics();

    const arr = topicQuestions();
    const done = arr.filter(q => completed.has(q.id)).length;
    const percent = Math.round(100 * done / arr.length);

    $('progress-text').textContent =
        `Išspręsta ${done} iš ${arr.length}`;

    $('progress-percent').textContent = percent + '%';
    $('progress-bar').style.width = percent + '%';
};

// Kitas uždavinys po teisingo atsakymo
$('next').onclick = () => {
    drawQuiz();
};

// Praleisti uždavinį
$('skip').onclick = () => {
    if (!current || correct) return;

    const pending = pendingQuestions();

    if (pending.length <= 1) {
        $('feedback').textContent =
            'Tai vienintelis likęs neišspręstas uždavinys.';
        $('feedback').className = '';
        return;
    }

    questionIndex = (questionIndex + 1) % pending.length;
    drawQuiz();
};

// Progreso ištrynimas
$('reset').onclick = () => {
    if (!confirm('Ištrinti visą išsaugotą progresą?')) return;

    completed.clear();
    questionIndex = 0;

    try {
        localStorage.removeItem(OLD_KEY);
    } catch {}

    save();
    draw();
};

save();
draw();
