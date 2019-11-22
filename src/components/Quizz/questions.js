const questions =   
[ 
    {
        "question": "C-3PO was built by Anakin.",
        "answers": ['False','True'],
        "correct": "True",
        "questionID": "75846" 
    },
    {
        "question": "Yoda was 600 hundred years when he died.",
        "answers": ['False','True'],
        "correct": "False",
        "questionID": "45636" 
    },
    {
        "question": "Luke and Obi-Wan met Han Solo and Chewbacca in Mos Eisley.",
        "answers": ['False','True'],
        "correct": "True",
        "questionID": "64756" 
    },
    {
        "question": "Wookies come from Mustafar.",
        "answers": ['False','True'],
        "correct": "False",
        "questionID": "90382" 
    },
    {
        "question": "Jabba's species is Hutt.",
        "answers": ['False','True'],
        "correct": "True",
        "questionID": "68966" 
    },
    {
        "question": "The name of Poe Dameron’s astromech droid is AA-7.",
        "answers": ['False','True'],
        "correct": "False",
        "questionID": "90394" 
    },
    {
        "question": "The path to the Dark Side is fear.",
        "answers": ['False','True'],
        "correct": "True",
        "questionID": "48732" 
    },
    {
        "question": "The cell number where Princess Leia was imprisoned was 2197.",
        "answers": ['False','True'],
        "correct": "False",
        "questionID": "19054" 
    },
    {
        "question": "The Jedi Temple has five spires.",
        "answers": ['False','True'],
        "correct": "True",
        "questionID": "04536" 
    },
    {
        "question": "The birth planet of Han Solo is Dantooine.",
        "answers": ['False','True'],
        "correct": "False",
        "questionID": "28093" 
    }
]

for (let i = 0; i < questions.length; i++) {
    const randomIdx = Math.floor(Math.random() * questions.length) % 10;
    [questions[i], questions[randomIdx]] = [questions[randomIdx], questions[i]];
}

export default questions;