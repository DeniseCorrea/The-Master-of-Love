import React from 'react';
import EachQuestion from './EachQuestion.js';

const questions =   
[ 
    {
        "question": "C-3PO was built by Anakin.",
        "answers": ['true','false'],
        "correct": "true",
        "questionID": "75846" 
    },
    {
        "question": "Yoda has 600 hundred years when he died.",
        "answers": ['true','false'],
        "correct": "false",
        "questionID": "45636" 
    },
    {
        "question": "Luke and Obi-Wan meet Han Solo and Chewbacca in Mos Eisley.",
        "answers": ['true','false'],
        "correct": "true",
        "questionID": "64756" 
    },
    {
        "question": "Wookies come from Mustafar.",
        "answers": ['true','false'],
        "correct": "false",
        "questionID": "90382" 
    },
    {
        "question": "Jabba's species is Hutt.",
        "answers": ['true','false'],
        "correct": "true",
        "questionID": "68966" 
    },
    {
        "question": "The name of Poe Dameron’s astromech droid is AA-7.",
        "answers": ['true','false'],
        "correct": "false",
        "questionID": "90394" 
    },
    {
        "question": "The path to the Dark Side is fear.",
        "answers": ['true','false'],
        "correct": "true",
        "questionID": "48732" 
    },
    {
        "question": "The cell number where Princess Leia was imprisoned was 2197.",
        "answers": ['true','false'],
        "correct": "false",
        "questionID": "19054" 
    },
    {
        "question": "The Jedi temmple has five spires.",
        "answers": ['true','false'],
        "correct": "true",
        "questionID": "04536" 
    },
    {
        "question": "The birth planet of Han Solo is Dantooine.",
        "answers": ['true','false'],
        "correct": "false",
        "questionID": "28093" 
    }
]


for (let i = 0; i < questions.length; i++) {
    const randomIdx = Math.floor(Math.random() * questions.length) % 10;
    [questions[i], questions[randomIdx]] = [questions[randomIdx], questions[i]];
  }

const QuizQuestions = () => {
    return (
        <div>
            {
                questions.map((question) => 
                    <EachQuestion 
                        key={question.questionID}
                        question={question}
                    />
                )
            }
        </div>
    ) 
}
    

export default QuizQuestions;